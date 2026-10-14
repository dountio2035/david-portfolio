import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import Logo from './Logo.jsx'
import { MenuIcon, CloseIcon, SunIcon, MoonIcon } from './Icons.jsx'
import { FlagFR, FlagUK } from './Flags.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useTheme } from '../context/ThemeContext.jsx'
import { EASE_OUT, SPRING } from '../motion.js'

// Tracks which section is in the middle of the viewport so the matching
// nav link can be highlighted (and announced with aria-current).
function useActiveSection(ids) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length) return undefined
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids.join(',')]) // eslint-disable-line react-hooks/exhaustive-deps

  return active
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const { t, lang, setLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const links = [
    { id: 'apropos', label: t.nav.about },
    { id: 'competences', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
    { id: 'projets', label: t.nav.projects },
    { id: 'soutenance', label: t.nav.defense },
    { id: 'formation', label: t.nav.formation },
    { id: 'contact', label: t.nav.contact },
  ]
  const active = useActiveSection(links.map((l) => l.id))

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 1081px)')
    const onMq = (e) => e.matches && setOpen(false)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  const themeLabel = theme === 'dark' ? t.misc.themeToLight : t.misc.themeToDark

  return (
    <>
      <header className={`header ${solid || open ? 'is-solid' : ''}`}>
        <motion.div aria-hidden="true" className="header-progress" style={{ scaleX: progress }} />
        <nav className="wrap nav" aria-label={t.nav.label}>
          <a href="#top" aria-label={t.nav.home} onClick={() => setOpen(false)}>
            <Logo subtitle={t.nav.brandRole} />
          </a>

          <ul className="nav-links">
            {links.map((l) => {
              const isActive = active === l.id
              return (
                <li key={l.id}>
                  <a href={`#${l.id}`} aria-current={isActive ? 'true' : undefined}>
                    {l.label}
                    {isActive && (
                      <motion.span layoutId="nav-indicator" aria-hidden="true" transition={SPRING} className="nav-indicator" />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="nav-tools">
            <div className="lang-switch" role="group" aria-label={t.misc.langGroup}>
              {[
                { code: 'fr', label: 'Français', Flag: FlagFR },
                { code: 'en', label: 'English', Flag: FlagUK },
              ].map(({ code, label, Flag }) => (
                <button
                  key={code}
                  type="button"
                  lang={code}
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                  aria-label={label}
                  title={label}
                  className={lang === code ? 'is-active' : ''}
                >
                  <Flag className="flag" />
                  <span className="lang-code">{code.toUpperCase()}</span>
                </button>
              ))}
            </div>
            <button type="button" onClick={toggleTheme} className="tool icon" aria-label={themeLabel} title={themeLabel}>
              {theme === 'dark' ? <SunIcon size={17} /> : <MoonIcon size={17} />}
            </button>
            <a href="#contact" className="btn btn-solid nav-cta">{t.nav.cta}</a>
            <button
              type="button"
              className="tool icon burger"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              aria-controls="menu-mobile"
            >
              {open ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            className="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
          >
            <ul>
              {links.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} onClick={() => setOpen(false)} aria-current={active === l.id ? 'true' : undefined}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-solid">{t.nav.cta}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
