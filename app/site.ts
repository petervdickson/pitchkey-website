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
  "PitchKey is a free Chrome extension that turns any YouTube video into an audio studio — pitch shift ±12 semitones, speed control, studio-quality reverb, and a precise A↔B loop, all applied live. No account, no ads.";

/** Chrome Web Store listing for the extension. */
export const CWS_URL =
  "https://chromewebstore.google.com/detail/pitchkey/lklcgdabgngapomnffkdjdgicicijooa";

/**
 * The published Chrome extension ID.
 *
 * Used to message the installed extension from this site (allowed by the
 * extension's `externally_connectable` manifest entry). Pro checkout must be
 * opened BY the extension — ExtPay's /choose-plan returns "404 API key
 * required" without a per-install api_key that only the extension holds.
 */
export const EXTENSION_ID =
  process.env.NEXT_PUBLIC_EXTENSION_ID || "lklcgdabgngapomnffkdjdgicicijooa";

/** Keywords surfaced in metadata to help discoverability for the brand term. */
export const SITE_KEYWORDS = [
  "PitchKey",
  "PitchKey extension",
  "PitchKey Chrome extension",
  "YouTube pitch shifter",
  "YouTube speed control",
  "change pitch YouTube",
  "slow down YouTube",
  "A B loop YouTube",
  "YouTube reverb",
  "YouTube audio studio",
  "transpose YouTube",
  "Chrome extension music tool",
];
