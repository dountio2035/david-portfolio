import Reveal from './Reveal.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="relative py-24 border-t border-ink-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal-teal mb-10">
            {t.experience.title}
          </p>
        </Reveal>

        <div className="relative border-l border-ink-border pl-8 space-y-14 max-w-3xl">
          {t.experience.roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08} className="relative">
              <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-signal-teal ring-4 ring-ink-900" />
              <p className="font-mono text-xs uppercase tracking-wider text-signal-tealDim mb-1">{r.period}</p>
              <h3 className="font-display text-xl text-paper mb-1">{r.title}</h3>
              <p className="text-sm text-paper-dim mb-3">{r.org}</p>
              <ul className="space-y-1.5">
                {r.points.map((p) => (
                  <li key={p} className="text-paper-muted leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ink-border">
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
