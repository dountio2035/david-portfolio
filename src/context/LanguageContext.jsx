import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../i18n/translations.js'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'fr'
    try {
      const saved = localStorage.getItem('portfolio-lang')
      return saved in translations ? saved : 'fr'
    } catch {
      return 'fr'
    }
  })

  useEffect(() => {
    try { localStorage.setItem('portfolio-lang', lang) } catch { /* storage unavailable */ }
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'))
  // Never let an unknown language code reach the UI.
  const safeSetLang = (code) => setLang(code in translations ? code : 'fr')

  return (
    <LanguageContext.Provider value={{ lang, setLang: safeSetLang, toggleLang, t: translations[lang] || translations.fr }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
