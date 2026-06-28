import Link from "next/link";
import {
  MusicIcon,
  GaugeIcon,
  AudioWaveformIcon,
  RepeatIcon,
  ScissorsIcon,
  LayoutDashboardIcon,
  SlidersHorizontalIcon,
  DownloadIcon,
  MicIcon,
  ShuffleIcon,
  LockIcon,
  PuzzleIcon,
  ZapIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import HeroDemo from "./HeroDemo";
import { CWS_URL } from "./site";

const FREE_FEATURES = [
  {
    Icon: MusicIcon,
    name: "Pitch Shift",
    desc: "±12 semitones — one full octave in either direction, exact with no FFT bin quantization.",
  },
  {
    Icon: GaugeIcon,
    name: "Speed Control",
    desc: "0.25× to 4× via native playbackRate. Logarithmic slider keeps 1× perfectly centred.",
  },
  {
    Icon: AudioWaveformIcon,
    name: "Reverb",
    desc: "Studio-quality convolution reverb with a dry/wet mix slider. Sounds like a real room.",
  },
  {
    Icon: RepeatIcon,
    name: "A↔B Loop",
    desc: "Set two points, loop that section indefinitely. Per-frame precision — no stutter.",
  },
  {
    Icon: ScissorsIcon,
    name: "Chop & Screw",
    desc: "Classic DJ Screw vibe: slowed playback + lowered pitch. Light, Classic, and Heavy presets.",
  },
  {
    Icon: LayoutDashboardIcon,
    name: "Studio Panel",
    desc: "Full side panel for power users — Chop triggers, Vibe Presets, intensity slider.",
  },
];

const PRO_FEATURES = [
  { Icon: SlidersHorizontalIcon, name: "5-Band EQ",     desc: "Boost bass, cut mids, brighten highs." },
  { Icon: DownloadIcon,          name: "Audio Export",  desc: "Download your processed audio." },
  { Icon: MicIcon,               name: "Vocal Reducer", desc: "Karaoke mode + A Capella mode." },
  { Icon: ShuffleIcon,           name: "Mashup",        desc: "Auto BPM sync + crossfader for two tracks." },
];

const STATS = [
  { value: "6", label: "free tools" },
  { value: "±12", label: "semitones" },
  { value: "0.25–4×", label: "speed range" },
  { value: "$0", label: "forever" },
];

const STEPS = [
  {
    n: "01",
    title: "Add to Chrome",
    desc: "One click from the Web Store. No account, no sign-up, no card.",
  },
  {
    n: "02",
    title: "Open any YouTube video",
    desc: "PitchKey attaches to the player instantly — the studio panel is one click away.",
  },
  {
    n: "03",
    title: "Shape the sound",
    desc: "Pitch, speed, reverb, loops, Chop & Screw — applied live as the video plays.",
  },
];

const MARQUEE_TAGS = [
  "Pitch Shift",
  "Speed Control",
  "Reverb",
  "A↔B Loop",
  "Chop & Screw",
  "Multitrack DAW",
  "AI Mashup",
  "AI Mastering",
  "Stem Separation",
  "Hot Cues",
  "Clip Editing",
  "Vocal Remover",
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 border-b border-[#2a2a2e] bg-[#1a1a1d]/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link href="/" className="font-bold text-base tracking-tight text-[#e8e8ea]">
            Pitch<span className="text-[#ff7a3d]">Key</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/pro" className="text-sm text-[#a8a8ad] hover:text-[#e8e8ea] transition-colors">
              Pro
            </Link>
            <a
              href={CWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-4 py-1.5 rounded-md bg-[#ff7a3d] text-[#1a1a1d] hover:bg-[#ff8e57] transition-colors inline-flex items-center gap-1.5"
            >
              <PuzzleIcon size={14} strokeWidth={2.25} />
              Add to Chrome
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1">

        {/* ── HERO ── */}
        <section className="max-w-6xl mx-auto px-5 pt-20 pb-16 lg:pt-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
            {/* Left — copy */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-[#3a3a40] bg-[#1f1f23] text-[10px] font-semibold tracking-widest uppercase text-[#ff7a3d]">
                <ZapIcon size={11} strokeWidth={2.5} />
                Free Chrome Extension
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight text-[#e8e8ea] mb-6">
                The audio studio
                <br />
                <span className="text-gradient">YouTube never gave you.</span>
              </h1>
              <p className="text-lg text-[#a8a8ad] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Pitch shift, speed control, reverb, A↔B loop, and Chop&nbsp;&amp;&nbsp;Screw —
                applied live to any YouTube video. No accounts. No ads. Free forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center">
                <a
                  href={CWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pk-cta-glow px-7 py-3 rounded-lg bg-[#ff7a3d] text-[#1a1a1d] font-bold text-base hover:bg-[#ff8e57] transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <PuzzleIcon size={18} strokeWidth={2.25} />
                  Add to Chrome — it&apos;s free
                </a>
                <Link
                  href="/pro"
                  className="px-7 py-3 rounded-lg border border-[#3a3a40] text-[#a8a8ad] font-semibold text-base hover:border-[#ff7a3d] hover:text-[#ff7a3d] transition-colors"
                >
                  Explore Pro features →
                </Link>
              </div>
              <div className="flex items-center gap-4 justify-center lg:justify-start mt-6 text-xs text-[#6a6a70]">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheckIcon size={13} className="text-[#ff7a3d]" /> No account
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ZapIcon size={13} className="text-[#ff7a3d]" /> Works instantly
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MusicIcon size={13} className="text-[#ff7a3d]" /> Any video
                </span>
              </div>
            </div>

            {/* Right — interactive demo */}
            <div className="flex justify-center lg:justify-end">
              <HeroDemo />
            </div>
          </div>
        </section>

        {/* ── MARQUEE STRIP ── */}
        <section className="border-y border-[#2a2a2e] bg-[#1f1f23]/40 py-4 overflow-hidden">
          <div className="pk-marquee">
            {[...MARQUEE_TAGS, ...MARQUEE_TAGS].map((tag, i) => (
              <span
                key={i}
                className="mx-4 text-sm font-semibold text-[#6a6a70] whitespace-nowrap flex items-center gap-3"
              >
                {tag}
                <span className="w-1 h-1 rounded-full bg-[#ff7a3d]" />
              </span>
            ))}
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="max-w-5xl mx-auto px-5 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 80}
                className="rounded-xl border border-[#2a2a2e] bg-[#1f1f23] p-6 text-center"
              >
                <div className="text-4xl font-extrabold text-[#ff7a3d] mb-1 tabular-nums">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-[#8a8a8f]">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── FREE FEATURES ── */}
        <section className="max-w-5xl mx-auto px-5 pb-24">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e8e8ea] mb-2">
              Everything free. <span className="text-gradient">Always.</span>
            </h2>
            <p className="text-[#a8a8ad] text-base">
              Core features ship with the extension at no cost — no trial, no expiry.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FREE_FEATURES.map(({ Icon, name, desc }, i) => (
              <Reveal
                key={name}
                delay={(i % 3) * 90}
                className="pk-lift rounded-xl border border-[#2a2a2e] bg-[#1f1f23] p-5"
              >
                <div className="mb-3 w-9 h-9 flex items-center justify-center rounded-lg bg-[#2a2a2e]">
                  <Icon size={17} className="text-[#ff7a3d]" strokeWidth={1.75} />
                </div>
                <div className="font-bold text-sm text-[#e8e8ea] mb-1">{name}</div>
                <div className="text-xs text-[#8a8a8f] leading-relaxed">{desc}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="border-t border-[#2a2a2e] bg-[#1f1f23]/40">
          <div className="max-w-5xl mx-auto px-5 py-20">
            <Reveal className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e8e8ea] mb-2">
                Up and running in seconds
              </h2>
              <p className="text-[#a8a8ad] text-base">Three steps. Zero friction.</p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {STEPS.map((step, i) => (
                <Reveal
                  key={step.n}
                  delay={i * 110}
                  className="relative rounded-xl border border-[#2a2a2e] bg-[#1a1a1d] p-6"
                >
                  <div className="text-5xl font-extrabold text-[#2a2a2e] mb-3 select-none">{step.n}</div>
                  <div className="font-bold text-base text-[#e8e8ea] mb-1.5">{step.title}</div>
                  <div className="text-sm text-[#8a8a8f] leading-relaxed">{step.desc}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRO TEASER ── */}
        <section className="border-t border-[#2a2a2e]">
          <div className="max-w-5xl mx-auto px-5 py-20">
            <Reveal className="text-center mb-10">
              <div className="inline-block mb-3 px-3 py-1 rounded-full border border-[#4a2e1e] bg-[#2a1810] text-[10px] font-bold tracking-widest uppercase text-[#ff7a3d]">
                Coming soon
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e8e8ea] mb-2">
                PitchKey <span className="text-gradient">Pro</span>
              </h2>
              <p className="text-[#a8a8ad] text-base max-w-md mx-auto">
                Advanced features for producers, vocalists, and power users. One-time upgrade — no subscription.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {PRO_FEATURES.map(({ Icon, name, desc }, i) => (
                <Reveal
                  key={name}
                  delay={(i % 4) * 80}
                  className="pk-lift rounded-xl border border-[#3a3a40] bg-[#1a1a1d] p-5 relative"
                >
                  <div className="absolute top-3 right-3">
                    <LockIcon size={12} className="text-[#3a3a40]" strokeWidth={2} />
                  </div>
                  <div className="mb-3 w-9 h-9 flex items-center justify-center rounded-lg bg-[#2a2a2e]">
                    <Icon size={17} className="text-[#ff7a3d]" strokeWidth={1.75} />
                  </div>
                  <div className="font-bold text-sm text-[#e8e8ea] mb-1">{name}</div>
                  <div className="text-xs text-[#8a8a8f] leading-relaxed">{desc}</div>
                </Reveal>
              ))}
            </div>
            <Reveal className="text-center">
              <Link
                href="/pro"
                className="inline-block px-8 py-3 rounded-lg border border-[#ff7a3d] text-[#ff7a3d] font-bold text-sm hover:bg-[#ff7a3d] hover:text-[#1a1a1d] transition-all"
              >
                Join the waitlist →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="border-t border-[#2a2a2e] bg-[#1f1f23]">
          <div className="max-w-3xl mx-auto px-5 py-20 text-center">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e8e8ea] mb-4">
                Turn YouTube into your studio.
              </h2>
              <p className="text-[#a8a8ad] text-base mb-8 max-w-lg mx-auto">
                Free forever. Installs in one click. Works on every video you already watch.
              </p>
              <a
                href={CWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pk-cta-glow inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#ff7a3d] text-[#1a1a1d] font-bold text-base hover:bg-[#ff8e57] transition-all hover:-translate-y-0.5"
              >
                <PuzzleIcon size={18} strokeWidth={2.25} />
                Add PitchKey to Chrome
              </a>
            </Reveal>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#2a2a2e] py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#6a6a70]">
          <span>Pitch<span className="text-[#ff7a3d]">Key</span> — built with ♥ for musicians</span>
          <div className="flex gap-5">
            <Link href="/pro" className="hover:text-[#a8a8ad] transition-colors">Pro</Link>
            <a href={CWS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#a8a8ad] transition-colors">
              Chrome Web Store
            </a>
            <a href="https://github.com/petervdickson" target="_blank" rel="noopener noreferrer" className="hover:text-[#a8a8ad] transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
