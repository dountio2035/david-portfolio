import Logo from './Logo.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-ink-border/60 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <Logo showName={false} />
        <p className="font-mono text-xs text-paper-dim">
          © {new Date().getFullYear()} Dountio Tchiofo David Duclair — {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
