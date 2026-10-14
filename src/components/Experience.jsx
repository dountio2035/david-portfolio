import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import Section from './Section.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Experience() {
  const { t } = useLanguage()
  const e = t.experience
  const reduce = useReducedMotion()
  const listRef = useRef(null)

  // The rail fills in as the timeline is read.
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 55%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <Section id="experience" title={e.title}>
      <div ref={listRef} className="timeline">
        <span aria-hidden="true" className="timeline-rail" />
        {!reduce && <motion.span aria-hidden="true" className="timeline-fill" style={{ scaleY: fill }} />}
        <ol className="roles">

        {e.roles.map((r) => (
          <li key={r.title} className={`role${r.current ? ' current' : ''}`}>
            <p className="role-period num" style={{ margin: 0 }}>{r.period}</p>
            <div>
              <h3 className="h3">
                {r.title}
                {r.current && <span className="badge">{e.current}</span>}
              </h3>
              <p className="role-org">{r.org}</p>
              <ul>
                {r.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </li>
        ))}
        </ol>
      </div>
    </Section>
  )
}
