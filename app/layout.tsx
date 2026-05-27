import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PitchKey — Audio Studio for YouTube",
  description:
    "Pitch shift, speed control, reverb, A↔B loop, and Chop & Screw for any YouTube video. Free Chrome extension.",
  openGraph: {
    title: "PitchKey — Audio Studio for YouTube",
    description:
      "Pitch shift, speed control, reverb, A↔B loop, and Chop & Screw for any YouTube video. Free Chrome extension.",
    url: "https://pitchkey.app",
    siteName: "PitchKey",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PitchKey — Audio Studio for YouTube",
    description: "Free Chrome extension. Pitch shift, speed, reverb, loop, and Chop & Screw for YouTube.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#1a1a1d] text-[#e8e8ea]">
        {children}
      </body>
    </html>
  );
}
