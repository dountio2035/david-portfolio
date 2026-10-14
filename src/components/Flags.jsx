import { useId } from 'react'

// Inline flags so they render the same on every system (emoji flags do not show on Windows).
export function FlagFR({ className = '' }) {
  return (
    <svg viewBox="0 0 3 2" className={className} aria-hidden="true" focusable="false" preserveAspectRatio="none">
      <rect width="1" height="2" x="0" fill="#002654" />
      <rect width="1" height="2" x="1" fill="#ffffff" />
      <rect width="1" height="2" x="2" fill="#ED2939" />
    </svg>
  )
}

export function FlagUK({ className = '' }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
      <clipPath id={`${id}s`}><path d="M0,0 v30 h60 v-30 z" /></clipPath>
      <clipPath id={`${id}t`}><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
      <g clipPath={`url(#${id}s)`}>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${id}t)`} stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  )
}
