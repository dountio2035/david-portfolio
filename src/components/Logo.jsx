export function LogoMark({ size = 40, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      className={className}
      role="img"
      aria-label="Logo D cube T"
    >
      <rect x="1" y="1" width="42" height="42" rx="12" fill="var(--ink-800)" stroke="var(--ink-border)" />
      <text
        x="22"
        y="24.5"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="17"
        fontWeight="600"
        fill="var(--paper)"
      >
        D
        <tspan fontSize="10" dy="-6" fill="var(--signal-teal)">3</tspan>
        <tspan dy="6">T</tspan>
      </text>
      <circle cx="9" cy="34.5" r="1.6" fill="var(--signal-teal)" />
      <circle cx="35" cy="34.5" r="1.6" fill="var(--signal-tealDim)" />
      <path d="M9 34.5 L35 34.5" stroke="var(--ink-border)" strokeWidth="1" />
    </svg>
  )
}

export default function Logo({ className = '', showName = true }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark />
      {showName && (
        <span className="font-display leading-tight text-paper">
          <span className="block text-sm sm:text-base tracking-tight">Dountio Tchiofo</span>
          <span className="block text-[10px] sm:text-xs tracking-[0.2em] text-paper-dim uppercase">David Duclair</span>
        </span>
      )}
    </div>
  )
}
