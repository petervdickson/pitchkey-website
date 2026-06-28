"use client";

import { useEffect, useRef, useState } from "react";

/**
 * HeroDemo — an interactive mock of the PitchKey panel. The three sliders
 * (Pitch / Speed / Reverb) drive a live animated waveform so visitors *feel*
 * what the extension does before installing. Pure canvas + rAF, no audio.
 */
const BAR_COUNT = 44;

export default function HeroDemo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pitch, setPitch] = useState(3); // semitones, -12..12
  const [speed, setSpeed] = useState(0.85); // 0.5..2
  const [reverb, setReverb] = useState(40); // 0..100

  // keep latest values available to the animation loop without re-subscribing
  const params = useRef({ pitch, speed, reverb });
  params.current = { pitch, speed, reverb };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let t = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const { pitch, speed, reverb } = params.current;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      // pitch raises overall amplitude & tints hue; reverb softens/elongates tails
      const amp = 0.45 + (pitch + 12) / 24 * 0.5; // 0.45..0.95
      const wet = reverb / 100;
      const hue = 22 + (pitch / 12) * 14; // orange shifts slightly with pitch

      const gap = 4;
      const barW = (w - gap * (BAR_COUNT - 1)) / BAR_COUNT;
      const mid = h / 2;

      for (let i = 0; i < BAR_COUNT; i++) {
        const phase = i / BAR_COUNT;
        // layered sines for an organic waveform; reverb adds a slow swell
        const v =
          Math.sin(t * 2 + phase * 10) * 0.5 +
          Math.sin(t * 3.3 + phase * 18) * 0.3 +
          Math.sin(t * 1.1 + phase * 4) * 0.2 * (0.4 + wet);
        const env = 0.35 + Math.abs(v) * amp;
        const barH = Math.max(3, env * (h * 0.82));
        const x = i * (barW + gap);
        const glow = 0.5 + wet * 0.5;

        const grad = ctx.createLinearGradient(0, mid - barH / 2, 0, mid + barH / 2);
        grad.addColorStop(0, `hsla(${hue}, 100%, 62%, ${glow})`);
        grad.addColorStop(1, `hsla(${hue + 8}, 100%, 55%, ${0.25 + wet * 0.4})`);
        ctx.fillStyle = grad;

        const r = Math.min(barW / 2, 3);
        roundRect(ctx, x, mid - barH / 2, barW, barH, r);
        ctx.fill();
      }

      if (!reduce) t += 0.018 * speed;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const pitchLabel = `${pitch > 0 ? "+" : ""}${pitch} st`;
  const speedLabel = `${speed.toFixed(2)}×`;
  const reverbLabel = `${reverb}%`;

  return (
    <div className="hero-demo rounded-2xl border border-[#2a2a2e] bg-[#1f1f23]/90 backdrop-blur p-5 shadow-2xl shadow-black/60 w-full max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold text-sm">
          Pitch<span className="text-[#ff7a3d]">Key</span>
        </span>
        <span className="text-[10px] text-[#6a6a70] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a3d] animate-pulse" />
          live preview
        </span>
      </div>

      {/* Animated waveform */}
      <div className="rounded-xl bg-[#141416] border border-[#2a2a2e] mb-5 overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-28 block" />
      </div>

      <DemoSlider
        label="Pitch"
        value={pitchLabel}
        min={-12}
        max={12}
        step={1}
        raw={pitch}
        onChange={setPitch}
      />
      <DemoSlider
        label="Speed"
        value={speedLabel}
        min={0.5}
        max={2}
        step={0.05}
        raw={speed}
        onChange={setSpeed}
      />
      <DemoSlider
        label="Reverb"
        value={reverbLabel}
        min={0}
        max={100}
        step={1}
        raw={reverb}
        onChange={setReverb}
      />

      <p className="text-[10px] text-[#6a6a70] text-center mt-1">
        Drag the sliders — this is a taste of the real panel.
      </p>
    </div>
  );
}

function DemoSlider({
  label,
  value,
  min,
  max,
  step,
  raw,
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  raw: number;
  onChange: (n: number) => void;
}) {
  const pct = ((raw - min) / (max - min)) * 100;
  return (
    <div className="mb-3.5">
      <div className="flex justify-between mb-1.5">
        <span className="text-[10px] uppercase tracking-wider text-[#a8a8ad]">{label}</span>
        <span className="text-[11px] font-bold text-[#ff7a3d] tabular-nums">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={raw}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        aria-label={label}
        className="pk-range"
        style={{ ["--pct" as string]: `${pct}%` }}
      />
    </div>
  );
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
