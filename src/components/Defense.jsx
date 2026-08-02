import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Award } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import photo1 from '../assets/soutenance/soutenance-1.jpg'
import photo2 from '../assets/soutenance/soutenance-2.jpg'
import photo3 from '../assets/soutenance/soutenance-3.jpg'

const photos = [photo1, photo2, photo3]

export default function Defense() {
  const { t } = useLanguage()
  const d = t.defense
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="soutenance" className="relative py-24 border-t border-ink-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal-teal mb-10">
            {d.title}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-signal-amber/40 bg-signal-amber/10 px-4 py-1.5 mb-6">
                <Award size={14} className="text-signal-amber" />
                <span className="font-mono text-xs uppercase tracking-wider text-signal-amber">{d.mention}</span>
              </div>

              <p className="text-paper-muted text-lg leading-relaxed mb-8">{d.intro}</p>

              <ul className="space-y-4">
                {d.jury.map((j) => (
                  <li key={j.name} className="flex items-baseline justify-between gap-4 border-b border-ink-border/60 pb-4">
                    <span className="font-display text-paper">{j.name}</span>
                    <span className="font-mono text-xs uppercase tracking-wider text-paper-dim shrink-0">{j.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {photos.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setLightbox(i)}
                  className={`overflow-hidden rounded-xl border border-ink-border focus-visible:outline-2 focus-visible:outline-signal-teal ${i === 0 ? 'col-span-2' : ''}`}
                >
                  <img
                    src={src}
                    alt={`Photo de la soutenance de mémoire ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-paper hover:text-signal-teal"
              onClick={() => setLightbox(null)}
              aria-label="Fermer"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={photos[lightbox]}
              alt="Photo de la soutenance de mémoire, agrandie"
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
