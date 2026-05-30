/**
 * Ambient background visuals for the PitchKey site.
 *
 * Subtle, slow, on-theme: two soft orange orbs drift across the page, a
 * handful of geometric outlines (triangle / square / hexagon / circle) rotate
 * very slowly, and an audio-bar cluster pulses gently — small nod to what
 * PitchKey actually does. All opacities are low so content stays readable.
 *
 * Pure CSS animations (no JS), pointer-events disabled, fixed behind content.
 * Respects prefers-reduced-motion via globals.css.
 */
export default function BackgroundVisuals() {
  return (
    <div aria-hidden className="bg-visuals">
      {/* Page load wave ripple — bright pulse from center */}
      <svg className="bg-load-wave" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="wave-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff7a3d" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff7a3d" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="20" fill="url(#wave-grad)" />
      </svg>

      {/* Soft glowing orbs — set the ambient orange wash */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      {/* Geometric shapes — outlines only, very low opacity */}
      <svg
        className="bg-shape bg-shape-tri"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#ff7a3d"
        strokeWidth="1"
      >
        <polygon points="50,8 92,86 8,86" />
      </svg>

      <svg
        className="bg-shape bg-shape-square"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#ff7a3d"
        strokeWidth="1"
      >
        <rect x="10" y="10" width="80" height="80" />
      </svg>

      <svg
        className="bg-shape bg-shape-hex"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#ff7a3d"
        strokeWidth="1"
      >
        <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" />
      </svg>

      <svg
        className="bg-shape bg-shape-circle"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#ff7a3d"
        strokeWidth="1"
      >
        <circle cx="50" cy="50" r="44" />
      </svg>

      {/* Audio bars — slow pulse, subtle nod to the product */}
      <svg className="bg-shape bg-shape-bars" viewBox="0 0 100 60" fill="#ff7a3d">
        <rect x="0"  y="22" width="6" height="16" />
        <rect x="12" y="14" width="6" height="32" />
        <rect x="24" y="26" width="6" height="8"  />
        <rect x="36" y="6"  width="6" height="48" />
        <rect x="48" y="18" width="6" height="24" />
        <rect x="60" y="22" width="6" height="16" />
        <rect x="72" y="10" width="6" height="40" />
        <rect x="84" y="24" width="6" height="12" />
      </svg>
    </div>
  );
}
