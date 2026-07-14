import type { Metadata } from "next";
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
  PuzzleIcon,
  CheckCircle2Icon,
} from "lucide-react";
import Reveal from "../Reveal";
import { CWS_URL } from "../site";

export const metadata: Metadata = {
  title: "Release Notes & Roadmap",
  description:
    "Everything new in PitchKey — the free YouTube audio extension. See what shipped in each version (v1.0 → v1.1) and what's coming next.",
  alternates: { canonical: "/changelog" },
  openGraph: {
    title: "PitchKey Release Notes & Roadmap",
    description:
      "What shipped in each version of PitchKey and what's coming next.",
    url: "/changelog",
    type: "website",
  },
};

type Change = { Icon: React.ElementType; text: string };

const RELEASES: {
  version: string;
  date: string;
  tag?: string;
  summary: string;
  changes: Change[];
}[] = [
  {
    version: "1.1",
    date: "Latest",
    tag: "Current",
    summary: "A↔B looping joins the toolkit — practice and study any passage on repeat.",
    changes: [
      { Icon: RepeatIcon, text: "New A↔B Loop: set two points and loop that section with per-frame precision." },
      { Icon: CheckCircle2Icon, text: "Refined controls and stability improvements across the panel." },
    ],
  },
  {
    version: "1.0.1",
    date: "Earlier",
    summary: "Better sound, plus a real room reverb.",
    changes: [
      { Icon: AudioWaveformIcon, text: "New Reverb tool with a dry/wet mix slider — convolution reverb that sounds like a real space." },
      { Icon: CheckCircle2Icon, text: "Sound-quality fixes for cleaner pitch and speed processing." },
    ],
  },
  {
    version: "1.0",
    date: "Initial release",
    summary: "PitchKey launches with the two essentials.",
    changes: [
      { Icon: MusicIcon, text: "Pitch Shift — transpose any YouTube video ±12 semitones." },
      { Icon: GaugeIcon, text: "Speed Control — 0.25× to 4× playback without changing pitch unexpectedly." },
    ],
  },
];

const ROADMAP: { Icon: React.ElementType; name: string; when: string; desc: string }[] = [
  { Icon: ScissorsIcon,          name: "Chop & Screw",   when: "Next free update", desc: "Slowed playback + lowered pitch with Light, Classic, and Heavy presets." },
  { Icon: LayoutDashboardIcon,   name: "Studio Panel",   when: "Free",             desc: "A full side panel for power users — Chop triggers, Vibe Presets, intensity slider." },
  { Icon: SlidersHorizontalIcon, name: "5-Band EQ",      when: "Pro · v1.4",       desc: "Five parametric bands with presets for bass boost, vocal cut, bright, and warm." },
  { Icon: DownloadIcon,          name: "Audio Export",   when: "Pro · v1.5",       desc: "Record the processed stream with all effects baked in and download it." },
  { Icon: MicIcon,               name: "Vocal Reducer",  when: "Pro · v1.6",       desc: "Karaoke mode removes lead vocals; A Capella mode isolates the voice." },
  { Icon: ShuffleIcon,           name: "Mashup",         when: "Pro · v2.0",       desc: "Load a second track, auto-sync BPM and key, blend with a crossfader." },
];

export default function ChangelogPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 border-b border-[#2a2a2e] bg-[#1a1a1d]/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link href="/" className="font-bold text-base tracking-tight text-[#e8e8ea]">
            Pitch<span className="text-[#ff7a3d]">Key</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/changelog" className="text-sm font-semibold text-[#ff7a3d]">
              Releases
            </Link>
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
        <section className="max-w-3xl mx-auto px-5 pt-20 pb-12 text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[#3a3a40] bg-[#1f1f23] text-[10px] font-bold tracking-widest uppercase text-[#ff7a3d]">
            Currently shipping v1.1
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#e8e8ea] mb-4">
            Release notes <span className="text-gradient">&amp; roadmap</span>
          </h1>
          <p className="text-lg text-[#a8a8ad] leading-relaxed max-w-xl mx-auto">
            PitchKey ships in small, focused updates. Here&apos;s everything that has
            landed so far — and what&apos;s next.
          </p>
        </section>

        {/* ── TIMELINE ── */}
        <section className="max-w-3xl mx-auto px-5 pb-20">
          <div className="relative border-l border-[#2a2a2e] ml-3 sm:ml-4">
            {RELEASES.map((rel, i) => (
              <Reveal key={rel.version} delay={i * 90} className="relative pl-8 sm:pl-10 pb-10 last:pb-0">
                {/* node */}
                <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#ff7a3d] ring-4 ring-[#1a1a1d]" />
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h2 className="text-xl font-extrabold text-[#e8e8ea]">v{rel.version}</h2>
                  {rel.tag && (
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-[#ff7a3d] text-[#1a1a1d] rounded-full px-2 py-0.5">
                      {rel.tag}
                    </span>
                  )}
                  <span className="text-xs text-[#6a6a70]">{rel.date}</span>
                </div>
                <p className="text-sm text-[#a8a8ad] mb-4">{rel.summary}</p>
                <ul className="space-y-2.5">
                  {rel.changes.map((c, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-0.5 w-7 h-7 flex items-center justify-center rounded-lg bg-[#1f1f23] border border-[#2a2a2e] flex-shrink-0">
                        <c.Icon size={14} className="text-[#ff7a3d]" strokeWidth={1.75} />
                      </span>
                      <span className="text-sm text-[#c8c8cd] leading-relaxed pt-1">{c.text}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── ROADMAP ── */}
        <section className="border-t border-[#2a2a2e] bg-[#1f1f23]/40">
          <div className="max-w-5xl mx-auto px-5 py-20">
            <Reveal className="text-center mb-12">
              <div className="inline-block mb-3 px-3 py-1 rounded-full border border-[#4a2e1e] bg-[#2a1810] text-[10px] font-bold tracking-widest uppercase text-[#ff7a3d]">
                In development
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e8e8ea] mb-2">What&apos;s coming next</h2>
              <p className="text-[#a8a8ad] text-base max-w-md mx-auto">
                Built and on the way. Free updates stay free — Pro features are an optional one-time upgrade.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ROADMAP.map(({ Icon, name, when, desc }, i) => (
                <Reveal
                  key={name}
                  delay={(i % 3) * 90}
                  className="rounded-xl border border-dashed border-[#2a2a2e] bg-[#1a1a1d] p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#2a2a2e]">
                      <Icon size={17} className="text-[#8a8a8f]" strokeWidth={1.75} />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#6a6a70] border border-[#3a3a40] rounded-full px-2 py-0.5">
                      {when}
                    </span>
                  </div>
                  <div className="font-bold text-sm text-[#c8c8cd] mb-1">{name}</div>
                  <div className="text-xs text-[#6a6a70] leading-relaxed">{desc}</div>
                </Reveal>
              ))}
            </div>
            <Reveal className="text-center mt-10">
              <Link
                href="/pro"
                className="inline-block px-8 py-3 rounded-lg border border-[#ff7a3d] text-[#ff7a3d] font-bold text-sm hover:bg-[#ff7a3d] hover:text-[#1a1a1d] transition-all"
              >
                See Pro plans →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-t border-[#2a2a2e]">
          <div className="max-w-3xl mx-auto px-5 py-16 text-center">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#e8e8ea] mb-4">
                Get the current version
              </h2>
              <p className="text-[#a8a8ad] text-sm mb-7">
                Install v1.1 free and you&apos;ll get every future update automatically.
              </p>
              <a
                href={CWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pk-cta-glow inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#ff7a3d] text-[#1a1a1d] font-bold text-base hover:bg-[#ff8e57] transition-all hover:-translate-y-0.5"
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
            <Link href="/" className="hover:text-[#a8a8ad] transition-colors">Home</Link>
            <Link href="/pro" className="hover:text-[#a8a8ad] transition-colors">Pro</Link>
            <a href={CWS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#a8a8ad] transition-colors">
              Chrome Web Store
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
