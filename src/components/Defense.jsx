import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from './Section.jsx'
import { AwardIcon, CloseIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { EASE_OUT } from '../motion.js'
import thumb1 from '../assets/soutenance/soutenance-1-600.webp'
import thumb2 from '../assets/soutenance/soutenance-2-600.webp'
import thumb3 from '../assets/soutenance/soutenance-3-600.webp'
import full1 from '../assets/soutenance/soutenance-1-1200.webp'
import full2 from '../assets/soutenance/soutenance-2-1200.webp'
import full3 from '../assets/soutenance/soutenance-3-1200.webp'

// Small files for the grid, larger ones only when a photo is opened.
const thumbs = [thumb1, thumb2, thumb3]
const photos = [full1, full2, full3]

// Slide direction decides which side the next photo enters from.
const slide = {
  enter: (dir) => ({ x: dir * 60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir * -60, opacity: 0 }),
}

export default function Defense() {
  const { t } = useLanguage()
  const d = t.defense
  const [[index, dir], setView] = useState([null, 0])
  const open = index !== null

  const go = (step) => setView(([i]) => [(i + step + photos.length) % photos.length, step])
  const close = () => setView([null, 0])

  // Escape closes, arrows navigate, and the page behind stops scrolling.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <Section id="soutenance" title={d.title}>
      <div className="defense-grid">
        <div className="defense-text">
          <div>
            <p className="mention"><AwardIcon size={18} />{d.mention}</p>
            <p className="muted" style={{ margin: 0 }}>{d.intro}</p>
          </div>
          <ul className="jury">
            {d.jury.map((j) => (
              <li key={j.name}>
                <strong>{j.name}</strong>
                <span>{j.role}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="gallery">
            {thumbs.map((src, i) => (
              <button type="button" key={src} onClick={() => setView([i, 0])} aria-label={`${d.photoOpen} ${i + 1}`}>
                <img src={src} alt={`${d.photoAlt} ${i + 1}`} loading="lazy" decoding="async" width="600" height="797" />
              </button>
            ))}
          </div>
          <p className="gallery-note">{d.galleryNote}</p>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={d.photoAlt}
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <button type="button" className="lb-btn lb-close" onClick={close} aria-label={d.close} autoFocus>
              <CloseIcon size={20} />
            </button>

            <AnimatePresence initial={false} custom={dir} mode="popLayout">
              <motion.img
                key={index}
                src={photos[index]}
                alt={`${d.photoAlt} ${index + 1}`}
                custom={dir}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: EASE_OUT }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) go(1)
                  else if (info.offset.x > 60) go(-1)
                }}
                onClick={(e) => e.stopPropagation()}
                draggable={false}
              />
            </AnimatePresence>

            <div className="lb-nav" onClick={(e) => e.stopPropagation()}>
              <button type="button" className="lb-btn" onClick={() => go(-1)} aria-label={d.prev}>
                <ChevronLeftIcon size={20} />
              </button>
              <span className="num" aria-live="polite">{index + 1} / {photos.length}</span>
              <button type="button" className="lb-btn" onClick={() => go(1)} aria-label={d.next}>
                <ChevronRightIcon size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
