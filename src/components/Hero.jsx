import { MapPin, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import SensorMesh from './SensorMesh.jsx'
import portrait from '../assets/portrait.jpg'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-paper">
            {t.hero.name1}
            <br />
            {t.hero.name2}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-paper-muted leading-relaxed">
            {t.hero.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projets"
              className="rounded-full bg-signal-teal px-6 py-3 font-mono text-xs uppercase tracking-wider text-ink-900 font-medium hover:opacity-90 transition-opacity"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink-border px-6 py-3 font-mono text-xs uppercase tracking-wider text-paper hover:border-signal-teal hover:text-signal-teal transition-colors"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-paper-dim">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-signal-tealDim" /> {t.hero.location}</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-signal-tealDim" /> tchiofodavid@gmail.com</span>
            <span className="flex items-center gap-2"><Phone size={14} className="text-signal-tealDim" /> +237 658 558 220</span>
          </div>
        </motion.div>

        <motion.div
          className="relative flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-64 sm:w-72">
            <div className="absolute -inset-3 rounded-2xl border border-ink-border" />
            <img
              src={portrait}
              alt="Portrait de David Duclair Dountio Tchiofo"
              className="relative rounded-2xl w-full object-cover contrast-[1.05]"
            />
            <div className="absolute -bottom-6 -left-8 -right-8 -z-10 opacity-70">
              <SensorMesh className="w-full h-auto" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
