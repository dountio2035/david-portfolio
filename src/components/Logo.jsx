import logoMark from '../assets/logo-mark.webp'

// D³T monogram (Dountio · David · Duclair · Tchiofo), from the official logo.
export function LogoMark({ size = 42, className = '' }) {
  return (
    <img
      src={logoMark}
      width={size}
      height={size}
      alt="Logo D³T"
      decoding="async"
      className={`logo-mark ${className}`}
      style={{ width: size, height: size }}
    />
  )
}

export default function Logo({ showName = true, subtitle }) {
  return (
    <span className="brand">
      <LogoMark />
      {showName && (
        <span className="brand-name">
          <strong>David Tchiofo</strong>
          {subtitle && <span>{subtitle}</span>}
        </span>
      )}
    </span>
  )
}
