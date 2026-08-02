import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Subtle, slow-drifting ambient background — three soft gradient blobs that
// glide behind the content. Disabled automatically for users who prefer
// reduced motion.
export default function BackgroundField() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const blobs = [
    { size: 480, color: 'var(--signal-tealDim)', top: '-8%', left: '-6%', dur: 26 },
    { size: 420, color: 'var(--signal-amber)', top: '55%', left: '78%', dur: 32 },
    { size: 360, color: 'var(--signal-teal)', top: '75%', left: '5%', dur: 22 },
  ]

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-ink-900" />
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-[0.10] blur-3xl"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: b.color,
          }}
          animate={
            reduced
              ? {}
              : {
                  x: [0, 40, -20, 0],
                  y: [0, -30, 20, 0],
                }
          }
          transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <div className="absolute inset-0 bg-grid bg-grid opacity-60" />
    </div>
  )
}
