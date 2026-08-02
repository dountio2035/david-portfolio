import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Contact() {
  const { t } = useLanguage()

  const items = [
    { icon: Mail, label: 'tchiofodavid@gmail.com', href: 'mailto:tchiofodavid@gmail.com' },
    { icon: Phone, label: '+237 658 558 220', href: 'tel:+237658558220' },
    { icon: Linkedin, label: 'linkedin.com/in/tchiofodavid', href: 'https://linkedin.com/in/tchiofodavid' },
    { icon: MapPin, label: t.contact.location, href: null },
  ]

  return (
    <section id="contact" className="relative py-24 border-t border-ink-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal-teal mb-6">
            {t.contact.title}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-paper max-w-xl mb-10">
            {t.contact.heading}
          </h2>

          <div className="flex flex-wrap gap-4">
            {items.map(({ icon: Icon, label, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-2.5 rounded-full border border-ink-border bg-ink-800 px-5 py-3 font-mono text-sm text-paper-muted hover:border-signal-tealDim hover:text-signal-teal transition-colors"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ) : (
                <span
                  key={label}
                  className="flex items-center gap-2.5 rounded-full border border-ink-border bg-ink-800 px-5 py-3 font-mono text-sm text-paper-muted"
                >
                  <Icon size={16} />
                  {label}
                </span>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
