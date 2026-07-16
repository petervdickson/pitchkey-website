import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import BackgroundVisuals from "./BackgroundVisuals";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  CWS_URL,
} from "./site";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const TITLE = "PitchKey — Audio Studio for YouTube";

export const metadata: Metadata = {
  // metadataBase makes all relative OG/canonical URLs resolve to the live origin.
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · PitchKey",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SITE_KEYWORDS,
  authors: [{ name: "PitchKey" }],
  creator: "PitchKey",
  publisher: "PitchKey",
  category: "music",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Free Chrome extension. Pitch shift, speed control, reverb, and an A↔B loop for any YouTube video.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/**
 * JSON-LD structured data. This is the highest-leverage SEO addition: it tells
 * Google "PitchKey" is a named software product (SoftwareApplication) and a
 * brand WebSite, which is what surfaces a rich result / knowledge panel when
 * someone searches the brand term.
 */
function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/icon.png`,
        sameAs: [CWS_URL],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: SITE_NAME,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Chrome",
        url: SITE_URL,
        downloadUrl: CWS_URL,
        installUrl: CWS_URL,
        description: SITE_DESCRIPTION,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        publisher: { "@id": `${SITE_URL}/#org` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be raw text in a script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#1a1a1d] text-[#e8e8ea] relative overflow-x-hidden">
        <StructuredData />
        <BackgroundVisuals />
        {children}
      </body>
    </html>
  );
}
