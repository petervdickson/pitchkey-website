import Link from "next/link";

const CWS_URL =
  "https://chromewebstore.google.com/detail/pitchkey/lklcgdabgngapomnffkdjdgicicijooa";

const FREE_FEATURES = [
  {
    icon: "🎵",
    name: "Pitch Shift",
    desc: "±12 semitones — one full octave in either direction, exact with no FFT bin quantization.",
  },
  {
    icon: "⚡",
    name: "Speed Control",
    desc: "0.25× to 4× via native playbackRate. Logarithmic slider keeps 1× perfectly centred.",
  },
  {
    icon: "🌊",
    name: "Reverb",
    desc: "Studio-quality convolution reverb with a dry/wet mix slider. Sounds like a real room.",
  },
  {
    icon: "🔁",
    name: "A↔B Loop",
    desc: "Set two points, loop that section indefinitely. Per-frame precision — no stutter.",
  },
  {
    icon: "🎙️",
    name: "Chop & Screw",
    desc: "Classic DJ Screw vibe: slowed playback + lowered pitch. Light, Classic, and Heavy presets.",
  },
  {
    icon: "🎛️",
    name: "Studio Panel",
    desc: "Full side panel for power users — Chop triggers, Vibe Presets, intensity slider.",
  },
];

const PRO_FEATURES = [
  { icon: "🎚️", name: "5-Band EQ", desc: "Boost bass, cut mids, brighten highs." },
  { icon: "⏺️", name: "Audio Export", desc: "Download your processed audio." },
  { icon: "🎤", name: "Vocal Reducer", desc: "Karaoke mode + A Capella mode." },
  { icon: "🎛️", name: "Mashup", desc: "Auto BPM sync + crossfader for two tracks." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 border-b border-[#2a2a2e] bg-[#1a1a1d]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link href="/" className="font-bold text-base tracking-tight text-[#e8e8ea]">
            Pitch<span className="text-[#ff7a3d]">Key</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/pro"
              className="text-sm text-[#a8a8ad] hover:text-[#e8e8ea] transition-colors"
            >
              Pro
            </Link>
            <a
              href={CWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-4 py-1.5 rounded-md bg-[#ff7a3d] text-[#1a1a1d] hover:bg-[#ff8e57] transition-colors"
            >
              Add to Chrome
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1">

        {/* ── HERO ── */}
        <section className="max-w-5xl mx-auto px-5 pt-24 pb-16 text-center">
          <div className="inline-block mb-5 px-3 py-1 rounded-full border border-[#3a3a40] bg-[#1f1f23] text-[10px] font-semibold tracking-widest uppercase text-[#ff7a3d]">
            Free Chrome Extension
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-[#e8e8ea] mb-5">
            The audio studio<br />
            <span className="text-[#ff7a3d]">YouTube never gave you.</span>
          </h1>
          <p className="text-lg text-[#a8a8ad] max-w-xl mx-auto mb-8 leading-relaxed">
            Pitch shift, speed control, reverb, A↔B loop, and Chop&nbsp;&amp;&nbsp;Screw —
            applied live to any YouTube video. No accounts. No ads. Free forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={CWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-lg bg-[#ff7a3d] text-[#1a1a1d] font-bold text-base hover:bg-[#ff8e57] transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(255,122,61,0.25)]"
            >
              Add to Chrome — it&apos;s free
            </a>
            <Link
              href="/pro"
              className="px-7 py-3 rounded-lg border border-[#3a3a40] text-[#a8a8ad] font-semibold text-base hover:border-[#ff7a3d] hover:text-[#ff7a3d] transition-colors"
            >
              Explore Pro features →
            </Link>
          </div>
        </section>

        {/* ── EXTENSION MOCKUP ── */}
        <section className="flex justify-center px-5 pb-20">
          <div className="w-72 rounded-2xl border border-[#2a2a2e] bg-[#1f1f23] p-5 shadow-2xl shadow-black/60">
            {/* header row */}
            <div className="flex justify-between items-center mb-5">
              <span className="font-bold text-sm">
                Pitch<span className="text-[#ff7a3d]">Key</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#6a6a70]">v1.5</span>
                <div className="w-9 h-5 rounded-full bg-[#ff7a3d] relative">
                  <div className="absolute right-1 top-0.5 w-4 h-4 rounded-full bg-white shadow" />
                </div>
              </div>
            </div>
            {/* sliders */}
            {[
              { label: "Pitch", val: "+3 st", pct: "62%" },
              { label: "Speed", val: "0.85×", pct: "38%" },
              { label: "Reverb", val: "40%",  pct: "40%" },
            ].map((s) => (
              <div key={s.label} className="mb-4">
                <div className="flex justify-between mb-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#a8a8ad]">{s.label}</span>
                  <span className="text-[11px] font-bold text-[#ff7a3d]">{s.val}</span>
                </div>
                <div className="relative h-1 rounded-full bg-[#2a2a2e]">
                  <div className="absolute left-0 top-0 h-full rounded-full bg-[#ff7a3d]" style={{ width: s.pct }} />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#ff7a3d] border-2 border-[#1f1f23]"
                    style={{ left: `calc(${s.pct} - 6px)` }}
                  />
                </div>
              </div>
            ))}
            {/* loop section */}
            <div className="mt-5 pt-4 border-t border-[#2a2a2e]">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] uppercase tracking-wider text-[#a8a8ad]">Loop A↔B</span>
                <div className="w-7 h-4 rounded-full bg-[#3a3a40]">
                  <div className="w-3 h-3 m-0.5 rounded-full bg-[#a8a8ad]" />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 h-7 rounded-md bg-[#ff7a3d] flex items-center justify-center">
                  <span className="text-[10px] font-bold text-[#1a1a1d]">Set A</span>
                </div>
                <div className="flex-1 h-7 rounded-md bg-[#2a2a2e] flex items-center justify-center">
                  <span className="text-[10px] text-[#6a6a70]">A — ↔ — B</span>
                </div>
                <div className="flex-1 h-7 rounded-md bg-[#ff7a3d] flex items-center justify-center">
                  <span className="text-[10px] font-bold text-[#1a1a1d]">Set B</span>
                </div>
              </div>
            </div>
            {/* open studio */}
            <div className="mt-3">
              <div className="w-full h-8 rounded-md bg-[#ff7a3d] flex items-center justify-center">
                <span className="text-[11px] font-bold text-[#1a1a1d]">Open Studio →</span>
              </div>
            </div>
          </div>
          <p className="hidden">Works on every YouTube video, live.</p>
        </section>

        {/* ── FREE FEATURES ── */}
        <section className="max-w-5xl mx-auto px-5 pb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#e8e8ea] mb-2">Everything free. Always.</h2>
            <p className="text-[#a8a8ad] text-base">
              Core features ship with the extension at no cost — no trial, no expiry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FREE_FEATURES.map((f) => (
              <div
                key={f.name}
                className="rounded-xl border border-[#2a2a2e] bg-[#1f1f23] p-5 hover:border-[#3a3a40] transition-colors"
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <div className="font-bold text-sm text-[#e8e8ea] mb-1">{f.name}</div>
                <div className="text-xs text-[#8a8a8f] leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRO TEASER ── */}
        <section className="border-t border-[#2a2a2e] bg-[#1f1f23]">
          <div className="max-w-5xl mx-auto px-5 py-20">
            <div className="text-center mb-10">
              <div className="inline-block mb-3 px-3 py-1 rounded-full border border-[#4a2e1e] bg-[#2a1810] text-[10px] font-bold tracking-widest uppercase text-[#ff7a3d]">
                Coming soon
              </div>
              <h2 className="text-3xl font-extrabold text-[#e8e8ea] mb-2">
                PitchKey <span className="text-[#ff7a3d]">Pro</span>
              </h2>
              <p className="text-[#a8a8ad] text-base max-w-md mx-auto">
                Advanced features for producers, vocalists, and power users. One-time upgrade — no subscription.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {PRO_FEATURES.map((f) => (
                <div
                  key={f.name}
                  className="rounded-xl border border-[#3a3a40] bg-[#1a1a1d] p-5 relative"
                >
                  <div className="absolute top-3 right-3 text-sm opacity-30">🔒</div>
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <div className="font-bold text-sm text-[#e8e8ea] mb-1">{f.name}</div>
                  <div className="text-xs text-[#6a6a70] leading-relaxed">{f.desc}</div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/pro"
                className="inline-block px-8 py-3 rounded-lg border border-[#ff7a3d] text-[#ff7a3d] font-bold text-sm hover:bg-[#ff7a3d] hover:text-[#1a1a1d] transition-all"
              >
                Join the waitlist →
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#2a2a2e] py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#6a6a70]">
          <span>
            Pitch<span className="text-[#ff7a3d]">Key</span> — built with ♥ for musicians
          </span>
          <div className="flex gap-5">
            <Link href="/pro" className="hover:text-[#a8a8ad] transition-colors">Pro</Link>
            <a href={CWS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#a8a8ad] transition-colors">
              Chrome Web Store
            </a>
            <a
              href="https://github.com/petervdickson"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#a8a8ad] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
