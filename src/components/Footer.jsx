import { LogoMark } from './Logo.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="wrap">
        <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <LogoMark size={30} />
          <p>© {new Date().getFullYear()} David Duclair Dountio Tchiofo. {t.footer.rights}.</p>
        </span>
      </div>
    </footer>
  )
}
