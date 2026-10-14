import { Component } from 'react'
import { CONTACT, whatsappLink } from '../contact.js'

// Catches rendering errors so the visitor never ends up on a blank page.
//
// - <SafeSection> wraps one block of the page: if it fails, only that block is
//   hidden and the rest of the portfolio keeps working.
// - <AppErrorBoundary> wraps the whole app: if everything fails, it shows a
//   simple page with the essential contact details and a reload button. It
//   reads no context or translations, so it cannot fail for the same reason.

class Boundary extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error, info) {
    // Kept in the console so the problem can still be diagnosed.
    console.error(`[portfolio] ${this.props.name || 'app'} failed to render`, error, info?.componentStack)
  }

  render() {
    if (this.state.failed) return this.props.fallback ?? null
    return this.props.children
  }
}

export function SafeSection({ name, children }) {
  return <Boundary name={name} fallback={null}>{children}</Boundary>
}

const copy = {
  fr: {
    title: 'Le site rencontre un problème d’affichage.',
    body: 'Rechargez la page. Si le problème persiste, vous pouvez me contacter directement :',
    reload: 'Recharger la page',
    wa: 'Bonjour M. DOUNTIO David, je vous contacte depuis votre portfolio.',
  },
  en: {
    title: 'The site ran into a display problem.',
    body: 'Please reload the page. If it keeps happening, you can reach me directly:',
    reload: 'Reload the page',
    wa: 'Hello Mr. DOUNTIO David, I am reaching out from your portfolio.',
  },
}

export function AppFallback() {
  const lang = typeof document !== 'undefined' && document.documentElement.lang === 'en' ? 'en' : 'fr'
  const c = copy[lang]
  return (
    <main className="fallback">
      <p className="fallback-name">David Duclair Dountio Tchiofo</p>
      <h1>{c.title}</h1>
      <p>{c.body}</p>
      <ul>
        <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
        <li><a href={whatsappLink(c.wa)} target="_blank" rel="noopener noreferrer">WhatsApp {CONTACT.phone}</a></li>
        <li><a href={CONTACT.linkedinHref} target="_blank" rel="noopener noreferrer">{CONTACT.linkedin}</a></li>
      </ul>
      <button type="button" className="btn btn-solid" onClick={() => window.location.reload()}>{c.reload}</button>
    </main>
  )
}

export function AppErrorBoundary({ children }) {
  return <Boundary name="app" fallback={<AppFallback />}>{children}</Boundary>
}
