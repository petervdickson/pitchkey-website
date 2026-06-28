/**
 * Single source of truth for site-wide constants.
 *
 * SITE_URL is the canonical, publicly-served origin. It feeds the sitemap,
 * robots.txt, canonical <link> tags, Open Graph URLs, and JSON-LD.
 *
 * ⚠️  When you move to a custom domain (e.g. https://pitchkey.app), change
 *     SITE_URL here and everything else updates automatically. A custom domain
 *     also ranks better and can be verified as a Google Search Console
 *     "domain property" — a plain *.vercel.app subdomain cannot.
 */
export const SITE_URL = "https://pitchkey-website.vercel.app";

export const SITE_NAME = "PitchKey";

export const SITE_TAGLINE = "The audio studio YouTube never gave you";

export const SITE_DESCRIPTION =
  "PitchKey is a free Chrome extension that turns any YouTube video into an audio studio — pitch shift, speed control, reverb, A↔B loop, Chop & Screw, and a full multitrack mini-DAW with AI Mashup and Mastering.";

/** Chrome Web Store listing for the extension. */
export const CWS_URL =
  "https://chromewebstore.google.com/detail/pitchkey/lklcgdabgngapomnffkdjdgicicijooa";

/** Keywords surfaced in metadata to help discoverability for the brand term. */
export const SITE_KEYWORDS = [
  "PitchKey",
  "PitchKey extension",
  "YouTube pitch shifter",
  "YouTube speed control",
  "change pitch YouTube",
  "slow down YouTube",
  "chop and screw",
  "A B loop YouTube",
  "YouTube reverb",
  "YouTube audio studio",
  "Chrome extension music tool",
  "vocal remover YouTube",
  "AI mashup",
];
