"use client";

import { useState } from "react";

// Sign up at formspree.io → create a form → replace this with your form ID
const FORMSPREE_ID = "YOUR_FORMSPREE_FORM_ID";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json();
        setErrorMsg(data?.errors?.[0]?.message ?? "Something went wrong. Try again.");
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
