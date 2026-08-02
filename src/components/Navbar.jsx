import { useState } from 'react'
import { Menu, X, Sun, Moon, Languages } from 'lucide-react'
import Logo from './Logo.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t, lang, toggleLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const links = [
    { href: '#apropos', label: t.nav.about },
    { href: '#competences', label: t.nav.skills },
    { href: '#experience', label: t.nav.experience },
    { href: '#projets', label: t.nav.projects },
    { href: '#soutenance', label: t.nav.defense },
    { href: '#formation', label: t.nav.formation },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-ink-border/60 bg-ink-900/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" aria-label="Accueil">
          <Logo className="shrink-0" />
        </a>

        <ul className="hidden lg:flex items-center gap-7 font-mono text-xs uppercase tracking-wider text-paper-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-signal-teal transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-full border border-ink-border px-3 py-2 font-mono text-xs uppercase tracking-wider text-paper-muted hover:text-signal-teal hover:border-signal-tealDim transition-colors"
            aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
            title={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
          >
            <Languages size={14} />
            {t.misc.langToggle}
          </button>

          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-border text-paper-muted hover:text-signal-teal hover:border-signal-tealDim transition-colors"
            aria-label={theme === 'dark' ? t.misc.themeToLight : t.misc.themeToDark}
            title={theme === 'dark' ? t.misc.themeToLight : t.misc.themeToDark}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-signal-tealDim/60 px-4 py-2 font-mono text-xs uppercase tracking-wider text-signal-teal hover:bg-signal-teal hover:text-ink-900 transition-colors"
          >
            {t.nav.cta}
          </a>

          <button
            className="lg:hidden text-paper"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-ink-border/60 bg-ink-900 px-6 py-4">
          <ul className="flex flex-col gap-4 font-mono text-sm uppercase tracking-wider text-paper-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="hover:text-signal-teal">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
