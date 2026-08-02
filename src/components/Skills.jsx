import Reveal from './Reveal.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="competences" className="relative bg-ink-800 py-24 border-t border-ink-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal-teal mb-10">
            {t.skills.title}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-border/60 rounded-xl overflow-hidden">
          {t.skills.groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.05}>
              <div className="bg-ink-800 p-6 h-full">
                <h3 className="font-display text-paper text-lg mb-4">{g.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-ink-border bg-ink-900/60 px-2.5 py-1 font-mono text-xs text-paper-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
