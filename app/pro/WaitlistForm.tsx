"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  // Honeypot: bots fill hidden fields, humans don't. Kept in state so the
  // value posts to the API, where a non-empty value is silently rejected.
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, website }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => null);
        const fallback =
          res.status === 429
            ? "Too many attempts. Please try again in a few minutes."
            : "Something went wrong. Try again.";
        setErrorMsg(data?.error ?? fallback);
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-[#3a3a40] bg-[#1a1a1d] p-6 text-center">
        <div className="text-3xl mb-3">🎉</div>
        <div className="font-bold text-[#e8e8ea] mb-1">You&apos;re on the list!</div>
        <div className="text-sm text-[#6a6a70]">
          We&apos;ll send you one email when PitchKey Pro launches. That&apos;s it.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      {/* Honeypot — visually hidden and off the tab order. Real users never
          fill it; bots that auto-fill inputs will, and get silently dropped. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
      />
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className="
          flex-1 px-4 py-3 rounded-lg
          bg-[#1a1a1d] border border-[#3a3a40]
          text-[#e8e8ea] placeholder-[#6a6a70]
          text-sm outline-none
          focus:border-[#ff7a3d] transition-colors
          disabled:opacity-50
        "
      />
      <button
        type="submit"
        disabled={status === "loading" || !email}
        className="
          px-6 py-3 rounded-lg
          bg-[#ff7a3d] text-[#1a1a1d]
          font-bold text-sm
          hover:bg-[#ff8e57] transition-colors
          disabled:opacity-50 disabled:cursor-not-allowed
          whitespace-nowrap
        "
      >
        {status === "loading" ? "Joining…" : "Join waitlist"}
      </button>
      {status === "error" && (
        <p className="text-xs text-[#ff6060] mt-1 w-full text-left">{errorMsg}</p>
      )}
    </form>
  );
}
