import type { Metadata } from "next";
import Link from "next/link";
import {
  SlidersHorizontalIcon,
  DownloadIcon,
  MicIcon,
  ShuffleIcon,
  LockIcon,
} from "lucide-react";
import WaitlistForm from "./WaitlistForm";

export const metadata: Metadata = {
  title: "PitchKey Pro — Coming Soon",
  description:
    "Join the waitlist for PitchKey Pro: 5-Band EQ, Audio Export, Vocal Reducer, and Mashup. One-time upgrade.",
};

const CWS_URL =
  "https://chromewebstore.google.com/detail/pitchkey/lklcgdabgngapomnffkdjdgicicijooa";

const PRO_FEATURES = [
  {
    Icon: SlidersHorizontalIcon,
    name: "5-Band EQ",
    version: "v1.6",
    desc: "Fine-tune every frequency with five parametric bands — Low Shelf, Low-Mid, Mid, High-Mid, and High Shelf. Includes Bass Boost, Vocal Cut, Bright, and Warm presets.",
    detail: ["±12 dB per band", "EQ presets for common use cases", "Real-time preview"],
  },
  {
    Icon: DownloadIcon,
    name: "Audio Export",
    version: "v1.7",
    desc: "Record the processed audio stream — with all pitch, speed, reverb, and EQ applied — and download it as a file. Your mix, your file.",
    detail: ["All effects baked into the export", "Download as audio file", "For personal use only"],
  },
  {
    Icon: MicIcon,
    name: "Vocal Reducer",
    version: "v1.8",
    desc: "Two modes in one: Karaoke removes lead vocals so you can sing along; A Capella removes the instrumental and isolates the voice. Works best on modern stereo recordings.",
    detail: ["Karaoke mode (remove vocals)", "A Capella mode (remove instruments)", "Mix slider for partial reduction"],
  },
  {
    Icon: ShuffleIcon,
    name: "Mashup",
    version: "v2.0",
    desc: "Load a second YouTube track alongside the one playing. Auto-detect BPM and key, sync them, and blend with a crossfader. Full DJ console in your browser.",
    detail: ["Auto BPM & key detection", "Crossfader between two tracks", "Per-deck vocal reduction"],
  },
];

export default function ProPage() {
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
              className="text-sm font-semibold text-[#ff7a3d]"
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
        <section className="max-w-3xl mx-auto px-5 pt-20 pb-14 text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[#4a2e1e] bg-[#2a1810] text-[10px] font-bold tracking-widest uppercase text-[#ff7a3d]">
            Coming soon
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-[#e8e8ea] mb-4">
            PitchKey <span className="text-[#ff7a3d]">Pro</span>
          </h1>
          <p className="text-lg text-[#a8a8ad] leading-relaxed max-w-xl mx-auto">
            Advanced features for producers, vocalists, and power users.
            Pick the plan that works for you.
          </p>
        </section>

        {/* ── PRICING CARDS ── */}
        <section className="max-w-2xl mx-auto px-5 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Monthly */}
            <div className="rounded-2xl border border-[#2a2a2e] bg-[#1f1f23] p-7 text-center flex flex-col">
              <div className="text-xs font-bold uppercase tracking-widest text-[#a8a8ad] mb-3">Monthly</div>
              <div className="text-5xl font-extrabold text-[#e8e8ea] mb-1">
                $0<span className="text-3xl">.99</span>
              </div>
              <div className="text-sm text-[#6a6a70] mb-5">per month · cancel any time</div>
              <div className="mt-auto w-full py-3 rounded-lg border border-[#ff7a3d] text-[#ff7a3d] font-bold text-sm cursor-default select-none">
                Available when Pro launches
              </div>
            </div>

            {/* One-time — highlighted */}
            <div className="rounded-2xl border border-[#ff7a3d]/40 bg-[#1f1f23] p-7 text-center flex flex-col shadow-[0_0_40px_rgba(255,122,61,0.08)] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#ff7a3d] text-[#1a1a1d] text-[10px] font-extrabold uppercase tracking-wider whitespace-nowrap">
                Best value
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#ff7a3d] mb-3">One-time</div>
              <div className="text-5xl font-extrabold text-[#e8e8ea] mb-1">
                $9<span className="text-3xl">.99</span>
              </div>
              <div className="text-sm text-[#6a6a70] mb-5">forever · all future Pro features included</div>
              <div className="mt-auto w-full py-3 rounded-lg border border-[#ff7a3d] text-[#ff7a3d] font-bold text-sm cursor-default select-none">
                Available when Pro launches
              </div>
            </div>

          </div>
          <p className="text-xs text-[#6a6a70] mt-5 text-center leading-relaxed">
            Free features (pitch, speed, reverb, loop, Chop&nbsp;&amp;&nbsp;Screw) remain free forever.
            Pro is an optional upgrade.
          </p>
        </section>

        {/* ── PRO FEATURES ── */}
        <section className="max-w-5xl mx-auto px-5 pb-20">
          <h2 className="text-2xl font-extrabold text-[#e8e8ea] mb-8 text-center">What&apos;s included in Pro</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PRO_FEATURES.map(({ Icon, name, version, desc, detail }) => (
              <div
                key={name}
                className="rounded-xl border border-[#2a2a2e] bg-[#1f1f23] p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#2a2a2e] flex-shrink-0">
                      <Icon size={18} className="text-[#ff7a3d]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="font-bold text-base text-[#e8e8ea]">{name}</div>
                      <div className="text-[10px] font-semibold text-[#ff7a3d] uppercase tracking-wide mt-0.5">
                        Ships in {version}
                      </div>
                    </div>
                  </div>
                  <LockIcon size={14} className="text-[#3a3a40] mt-1 flex-shrink-0" strokeWidth={2} />
                </div>
                <p className="text-sm text-[#8a8a8f] leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-1">
                  {detail.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-[#6a6a70]">
                      <span className="w-1 h-1 rounded-full bg-[#ff7a3d] flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── WAITLIST ── */}
        <section className="border-t border-[#2a2a2e] bg-[#1f1f23]">
          <div className="max-w-xl mx-auto px-5 py-20 text-center">
            <h2 className="text-2xl font-extrabold text-[#e8e8ea] mb-2">
              Be first to know when Pro launches
            </h2>
            <p className="text-[#a8a8ad] text-sm mb-8 leading-relaxed">
              Drop your email and we&apos;ll send you one message when Pro is ready — no spam, no drip campaigns.
            </p>
            <WaitlistForm />
          </div>
        </section>

        {/* ── BACK TO FREE ── */}
        <section className="max-w-5xl mx-auto px-5 py-12 text-center">
          <p className="text-sm text-[#6a6a70] mb-4">
            Not ready to upgrade? The free extension already has a lot to offer.
          </p>
          <a
            href={CWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 rounded-lg bg-[#ff7a3d] text-[#1a1a1d] font-bold text-sm hover:bg-[#ff8e57] transition-colors"
          >
            Add PitchKey to Chrome — Free
          </a>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#2a2a2e] py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#6a6a70]">
          <span>
            Pitch<span className="text-[#ff7a3d]">Key</span> — built with ♥ for musicians
          </span>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-[#a8a8ad] transition-colors">Home</Link>
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
