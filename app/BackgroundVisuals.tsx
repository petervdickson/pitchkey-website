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

      {/* Music notes — floating, drifting */}
      <svg className="bg-shape bg-music-note-1" viewBox="0 0 24 24" fill="#ff7a3d">
        <path d="M12 3v10m-4-5h8m-3 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      </svg>

      <svg className="bg-shape bg-music-note-2" viewBox="0 0 24 24" fill="#ff7a3d">
        <path d="M9 3v10m8-5h-8m2 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      </svg>

      <svg className="bg-shape bg-music-note-3" viewBox="0 0 24 24" fill="#ff8e57">
        <path d="M15 3v10m-5-5h10m-2 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      </svg>

      <svg className="bg-shape bg-music-note-4" viewBox="0 0 24 24" fill="#ff7a3d">
        <path d="M8 3v10m6-5h-6m1 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      </svg>

      {/* Spinning vinyl records/discs */}
      <svg className="bg-shape bg-vinyl-1" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" stroke="#ff7a3d" strokeWidth="2" />
        <circle cx="50" cy="50" r="35" stroke="#ff7a3d" strokeWidth="1" opacity="0.4" />
        <circle cx="50" cy="50" r="25" stroke="#ff7a3d" strokeWidth="1" opacity="0.4" />
        <circle cx="50" cy="50" r="12" fill="#ff7a3d" />
      </svg>

      <svg className="bg-shape bg-vinyl-2" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" stroke="#ff8e57" strokeWidth="2" />
        <circle cx="50" cy="50" r="35" stroke="#ff8e57" strokeWidth="1" opacity="0.4" />
        <circle cx="50" cy="50" r="25" stroke="#ff8e57" strokeWidth="1" opacity="0.4" />
        <circle cx="50" cy="50" r="12" fill="#ff8e57" />
      </svg>

      {/* Animated pitch slider — dragging left/right */}
      <svg className="bg-shape bg-slider-pitch" viewBox="0 0 200 40" fill="none">
        <line x1="20" y1="20" x2="180" y2="20" stroke="#ff7a3d" strokeWidth="2" opacity="0.2" />
        <circle className="slider-knob" cx="100" cy="20" r="6" fill="#ff7a3d" />
      </svg>

      {/* Animated speed slider — dragging left/right */}
      <svg className="bg-shape bg-slider-speed" viewBox="0 0 200 40" fill="none">
        <line x1="20" y1="20" x2="180" y2="20" stroke="#ff8e57" strokeWidth="2" opacity="0.2" />
        <circle className="slider-knob" cx="60" cy="20" r="6" fill="#ff8e57" />
      </svg>

      {/* Sound wave arcs — expanding and contracting */}
      <svg className="bg-shape bg-wave-arc" viewBox="0 0 100 100" fill="none">
        <path d="M50 30 Q60 30 60 50 Q60 70 50 70" stroke="#ff7a3d" strokeWidth="1.5" opacity="0.4" />
        <path d="M50 20 Q75 20 75 50 Q75 80 50 80" stroke="#ff7a3d" strokeWidth="1" opacity="0.2" />
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
