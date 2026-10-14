import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { MailIcon, PinIcon, WhatsappIcon, LinkedinIcon } from './Icons.jsx'
import { CONTACT, whatsappLink } from '../contact.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import { EASE_OUT } from '../motion.js'

// The page's one orchestrated moment: the night-blue field slides in, the portrait
// is uncovered from the bottom, and the name rises line by line.
const copy = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}
const rise = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT } },
}
const nameLine = {
  hidden: { y: '105%' },
  show: { y: '0%', transition: { duration: 1, ease: EASE_OUT } },
}

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero
  const reduce = useReducedMotion()
  const ref = useRef(null)

  // The portrait drifts a little slower than the page as the hero scrolls away.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60])

  return (
    <section ref={ref} id="top" className="hero">
      <div className="wrap hero-grid">
        <motion.div className="hero-copy" variants={copy} initial="hidden" animate="show">
          <motion.p className="hero-role" variants={rise}>{h.role}</motion.p>

          <h1 className="hero-name">
            <span className="mask"><motion.span variants={nameLine}>{h.name1}</motion.span></span>
            <span className="mask"><motion.span variants={nameLine} className="second">{h.name2}</motion.span></span>
          </h1>

          <motion.p className="hero-tagline" variants={rise}>{h.tagline}</motion.p>

          <motion.div className="hero-actions" variants={rise}>
            <a href="#projets" className="btn btn-solid">{h.ctaPrimary}</a>
            <a href="#contact" className="btn btn-line">{h.ctaSecondary}</a>
          </motion.div>

          <motion.ul className="hero-contact" variants={rise}>
            <li><PinIcon size={16} />{h.location}</li>
            <li>
              <MailIcon size={16} />
              <a href={`mailto:${CONTACT.email}`} className="link">{CONTACT.email}</a>
            </li>
            <li>
              <WhatsappIcon size={16} />
              <a href={whatsappLink(t.contact.waMessage)} target="_blank" rel="noopener noreferrer" className="link">WhatsApp</a>
            </li>
            <li>
              <LinkedinIcon size={16} />
              <a href={CONTACT.linkedinHref} target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
            </li>
          </motion.ul>
        </motion.div>

        <motion.figure className="portrait" style={{ y: portraitY }}>
          <motion.div
            aria-hidden="true"
            className="portrait-field"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.1, ease: EASE_OUT }}
          />
          <motion.div
            className="portrait-frame"
            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ duration: 1.1, delay: 0.35, ease: EASE_OUT }}
          >
            {/* Served from /public so index.html can preload it before the app starts. */}
            <picture>
              <source
                type="image/webp"
                srcSet="/img/portrait-480.webp 480w, /img/portrait-760.webp 760w"
                sizes="(max-width: 640px) 82vw, 380px"
              />
              <motion.img
                src="/img/portrait-760.jpg"
                alt={h.portraitAlt}
                width="760"
                height="950"
                fetchpriority="high"
                decoding="async"
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, delay: 0.35, ease: EASE_OUT }}
              />
            </picture>
          </motion.div>
          <motion.figcaption
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <span className="status-dot" aria-hidden="true" />
            {h.status}
          </motion.figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
