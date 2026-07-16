import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Resend needs the Node.js runtime (not Edge).
export const runtime = "nodejs";

/**
 * Per-IP rate limiter: at most 5 signups per 10 minutes. Instantiated once at
 * module load so the Redis connection is reused across warm invocations.
 *
 * Built only when Upstash env vars are present — that way local dev (and any
 * preview without the vars) still runs; it just skips limiting and logs a
 * warning instead of crashing. In production on Vercel the vars ARE set, so
 * the limiter is always active there.
 */
const ratelimit =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(5, "10 m"),
        prefix: "pk-waitlist",
        analytics: true,
      })
    : null;

// Deliberately permissive but structurally strict: one @, a dot in the domain,
// no whitespace. Real validation is "can we send to it," which Resend reports.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: NextRequest) {
  // ── 1. Rate limit by IP (abuse / overload protection) ────────────────────
  if (ratelimit) {
    const { success, reset } = await ratelimit.limit(getClientIp(req));
    if (!success) {
      const retryAfter = Math.max(1, Math.ceil((reset - Date.now()) / 1000));
      return NextResponse.json(
        { error: "Too many requests. Please try again in a few minutes." },
        { status: 429, headers: { "Retry-After": String(retryAfter) } },
      );
    }
  } else {
    console.warn("[waitlist] Upstash not configured — rate limiting is OFF");
  }

  // ── 2. Parse + validate input ────────────────────────────────────────────
  let body: { email?: string; website?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: the form ships a hidden "website" field that humans never see or
  // fill. If it has a value, this is a bot — return a fake success so it can't
  // tell it was filtered, and send no email.
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  // ── 3. Notify the site owner via Resend ──────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.WAITLIST_NOTIFY_EMAIL;
  if (!apiKey || !notifyTo) {
    console.error(
      "[waitlist] Missing RESEND_API_KEY or WAITLIST_NOTIFY_EMAIL env var",
    );
    return NextResponse.json(
      { error: "Signups are temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    // Until your own domain is verified in Resend, the onboarding sender works
    // out of the box. Set RESEND_FROM to "PitchKey <hello@yourdomain>" later.
    const from = process.env.RESEND_FROM ?? "PitchKey Waitlist <onboarding@resend.dev>";
    const { error } = await resend.emails.send({
      from,
      to: notifyTo,
      replyTo: email,
      subject: "New PitchKey Pro waitlist signup",
      text: `New waitlist signup:\n\n${email}\n\nReceived: ${new Date().toUTCString()}`,
    });
    if (error) {
      console.error("[waitlist] Resend returned error:", error);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 502 },
      );
    }
  } catch (e) {
    console.error("[waitlist] Resend send threw:", e);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

// Only POST is supported; reject everything else cleanly.
export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
