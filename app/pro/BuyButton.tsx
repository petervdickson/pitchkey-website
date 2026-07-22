"use client";

import { useState } from "react";
import { CWS_URL, EXTENSION_ID } from "../site";

/**
 * Pricing CTA that opens the real ExtPay checkout.
 *
 * The site can't link to ExtPay directly — its /choose-plan URL returns
 * "404 API key required" without a per-install api_key that only the
 * extension can generate. So we message the installed extension (permitted by
 * its `externally_connectable` manifest entry) and it opens checkout for us.
 *
 * If PitchKey isn't installed (or this isn't a Chromium browser), we fall back
 * to the Chrome Web Store listing instead of leaving a dead button.
 */

type ChromeRuntime = {
  sendMessage?: (
    extensionId: string,
    message: unknown,
    callback: (response?: unknown) => void,
  ) => void;
  lastError?: { message?: string };
};

declare global {
  interface Window {
    chrome?: { runtime?: ChromeRuntime };
  }
}

export default function BuyButton({
  label = "Get Pro",
  plan,
  variant = "outline",
}: {
  label?: string;
  /** Optional ExtPay plan nickname. Omit to show ExtPay's plan chooser. */
  plan?: string;
  variant?: "outline" | "solid";
}) {
  const [status, setStatus] = useState<"idle" | "opening" | "notInstalled">("idle");

  function handleClick() {
    const runtime = typeof window !== "undefined" ? window.chrome?.runtime : undefined;

    // Not Chromium, or no extension APIs exposed — send them to install.
    // Done synchronously so the browser doesn't treat it as a blocked popup.
    if (!runtime?.sendMessage) {
      window.open(CWS_URL, "_blank", "noopener,noreferrer");
      return;
    }

    setStatus("opening");
    try {
      runtime.sendMessage(EXTENSION_ID, { type: "pro:openCheckout", plan }, () => {
        // lastError is set when the extension isn't installed or didn't reply.
        // Reading it also prevents an unchecked-error warning in the console.
        if (window.chrome?.runtime?.lastError) {
          setStatus("notInstalled");
        } else {
          setStatus("idle");
        }
      });
    } catch {
      setStatus("notInstalled");
    }
  }

  const base =
    "mt-auto w-full py-3 rounded-lg font-bold text-sm transition-colors cursor-pointer";
  const styles =
    variant === "solid"
      ? "bg-[#ff7a3d] text-[#1a1a1d] hover:bg-[#ff8e57]"
      : "border border-[#ff7a3d] text-[#ff7a3d] hover:bg-[#ff7a3d] hover:text-[#1a1a1d]";

  if (status === "notInstalled") {
    return (
      <div className="mt-auto w-full">
        <a
          href={CWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${styles} block text-center`}
        >
          Add PitchKey to Chrome
        </a>
        <p className="text-[11px] text-[#6a6a70] mt-2 leading-relaxed">
          Install PitchKey first — Pro checkout opens from inside the extension.
        </p>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={status === "opening"}
      className={`${base} ${styles} disabled:opacity-60`}
    >
      {status === "opening" ? "Opening checkout…" : label}
    </button>
  );
}
