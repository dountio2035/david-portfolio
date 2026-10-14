import { MotionConfig } from 'framer-motion'
import { LanguageProvider, useLanguage } from './context/LanguageContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { AppErrorBoundary, SafeSection } from './components/ErrorBoundary.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Defense from './components/Defense.jsx'
import Formation from './components/Formation.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function SkipLink() {
  const { t } = useLanguage()
  return <a href="#contenu" className="skip-link">{t.skipLink}</a>
}

// Each block has its own error boundary: if one fails, it disappears quietly
// and the rest of the page stays usable.
const sections = [
  ['hero', Hero],
  ['about', About],
  ['skills', Skills],
  ['experience', Experience],
  ['projects', Projects],
  ['defense', Defense],
  ['formation', Formation],
  ['contact', Contact],
]

export default function App() {
  return (
    <AppErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          {/* reducedMotion="user": transforms are skipped for visitors who ask for less motion. */}
          <MotionConfig reducedMotion="user">
            <SafeSection name="skip-link"><SkipLink /></SafeSection>
            <SafeSection name="navbar"><Navbar /></SafeSection>
            <main id="contenu">
              {sections.map(([name, Section]) => (
                <SafeSection key={name} name={name}><Section /></SafeSection>
              ))}
            </main>
            <SafeSection name="footer"><Footer /></SafeSection>
            <SafeSection name="scroll-to-top"><ScrollToTop /></SafeSection>
          </MotionConfig>
        </LanguageProvider>
      </ThemeProvider>
    </AppErrorBoundary>
  )
}
