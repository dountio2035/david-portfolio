import Reveal from './Reveal.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="apropos" className="relative py-24 border-t border-ink-border/60">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[0.3fr_1fr] gap-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal-teal">
            {a.title}
          </p>
        </Reveal>
        <Reveal delay={0.1} className="max-w-2xl space-y-6 text-paper-muted text-lg leading-relaxed">
          <div className="space-y-6">
            <p>{a.p1}</p>
            <p>{a.p2}</p>
            <p>{a.p3}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
