import { ImageResponse } from "next/og";

// Applies to all routes as the default social-share card.
export const alt = "PitchKey — Audio Studio for YouTube";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const orange = "#ff7a3d";
  const bg = "#1a1a1d";

  // A simple equalizer bar row, drawn with divs (satori supports flexbox).
  const bars = [38, 96, 60, 140, 84, 52, 120, 70, 100, 44, 130, 64];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: `radial-gradient(900px 500px at 80% -10%, rgba(255,122,61,0.28), transparent 60%), ${bg}`,
          padding: "70px 80px",
          fontFamily: "sans-serif",
          color: "#e8e8ea",
        }}
      >
        {/* Top row: wordmark + free badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: 44, fontWeight: 800 }}>
            <span>Pitch</span>
            <span style={{ color: orange }}>Key</span>
          </div>
          <div
            style={{
              display: "flex",
              border: `2px solid ${orange}`,
              color: orange,
              borderRadius: 999,
              padding: "10px 24px",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            FREE CHROME EXTENSION
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
            The audio studio
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1.05,
              color: orange,
            }}
          >
            YouTube never gave you.
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#a8a8ad", marginTop: 10 }}>
            Pitch · Speed · Reverb · A↔B Loop · Chop &amp; Screw · Mini-DAW
          </div>
        </div>

        {/* Equalizer */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 14, height: 150 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                width: 40,
                height: h,
                borderRadius: 8,
                background: orange,
                opacity: 0.45 + (h / 140) * 0.55,
              }}
            />
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
