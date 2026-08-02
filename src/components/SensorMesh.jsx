import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// A small irrigation sensor mesh: nodes pulse steady "trust" teal, one node
// periodically flags an anomaly (amber), then the system "responds" and the
// node is re-verified back to teal. This directly mirrors the thesis work:
// adaptive detection & response to cyber-physical attacks via a dynamic
// sensor trust model.

const nodes = [
  { id: 0, x: 60, y: 70 },
  { id: 1, x: 190, y: 40 },
  { id: 2, x: 320, y: 90 },
  { id: 3, x: 110, y: 180 },
  { id: 4, x: 260, y: 200 },
  { id: 5, x: 380, y: 170 },
  { id: 6, x: 40, y: 280 },
  { id: 7, x: 200, y: 300 },
  { id: 8, x: 340, y: 290 },
]

const edges = [
  [0, 1], [1, 2], [0, 3], [1, 4], [2, 4], [2, 5],
  [3, 6], [3, 7], [4, 7], [4, 8], [5, 8], [6, 7], [7, 8],
]

export default function SensorMesh({ className = '' }) {
  const [flagged, setFlagged] = useState(null)
  const [status, setStatus] = useState('idle') // idle -> anomaly -> responding -> idle

  useEffect(() => {
    let timeouts = []
    const cycle = () => {
      const target = nodes[Math.floor(Math.random() * nodes.length)].id
      setFlagged(target)
      setStatus('anomaly')
      timeouts.push(setTimeout(() => setStatus('responding'), 1400))
      timeouts.push(setTimeout(() => {
        setStatus('idle')
        setFlagged(null)
      }, 2600))
    }
    const interval = setInterval(cycle, 5200)
    const first = setTimeout(cycle, 1800)
    return () => {
      clearInterval(interval)
      clearTimeout(first)
      timeouts.forEach(clearTimeout)
    }
  }, [])

  return (
    <svg
      viewBox="0 0 420 340"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {edges.map(([a, b], i) => {
        const na = nodes[a]
        const nb = nodes[b]
        const isActive = flagged === a || flagged === b
        return (
          <line
            key={i}
            x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
            stroke={isActive && status !== 'idle' ? '#F2A93B' : '#243252'}
            strokeWidth={isActive && status !== 'idle' ? 1.4 : 1}
            opacity={isActive && status !== 'idle' ? 0.8 : 0.6}
            style={{ transition: 'stroke 0.6s ease, opacity 0.6s ease' }}
          />
        )
      })}

      {nodes.map((n) => {
        const isFlagged = flagged === n.id
        const color = isFlagged && status === 'anomaly'
          ? '#F2A93B'
          : isFlagged && status === 'responding'
            ? '#4FD8C4'
            : '#4FD8C4'
        return (
          <g key={n.id}>
            <AnimatePresence>
              {isFlagged && status !== 'idle' && (
                <motion.circle
                  cx={n.x} cy={n.y} r={6}
                  fill="none"
                  stroke={status === 'anomaly' ? '#F2A93B' : '#4FD8C4'}
                  strokeWidth={1.5}
                  initial={{ r: 6, opacity: 0.9 }}
                  animate={{ r: 22, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.3, repeat: status === 'anomaly' ? Infinity : 0 }}
                />
              )}
            </AnimatePresence>
            <motion.circle
              cx={n.x} cy={n.y} r={5}
              fill={color}
              animate={{
                opacity: isFlagged && status === 'anomaly' ? [1, 0.5, 1] : 0.9,
                scale: isFlagged ? 1.3 : 1,
              }}
              transition={{ duration: 0.8, repeat: isFlagged && status === 'anomaly' ? Infinity : 0 }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
          </g>
        )
      })}
    </svg>
  )
}
