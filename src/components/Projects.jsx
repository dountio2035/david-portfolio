import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Projects() {
  const { t } = useLanguage()
  const p = t.projects

  return (
    <section id="projets" className="relative bg-ink-800 py-24 border-t border-ink-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal-teal mb-10">
            {p.title}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {p.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="group flex flex-col h-full rounded-xl border border-ink-border bg-ink-900 p-6 hover:border-signal-tealDim transition-colors">
                <p className="font-mono text-[11px] uppercase tracking-wider text-signal-tealDim mb-3">{item.kind}</p>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-lg text-paper leading-snug">{item.title}</h3>
                  <ArrowUpRight size={18} className="text-paper-dim group-hover:text-signal-teal transition-colors shrink-0" />
                </div>
                <p className="text-paper-muted text-sm leading-relaxed mb-5 flex-1">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <span key={s} className="rounded-md border border-ink-border bg-ink-800 px-2.5 py-1 font-mono text-xs text-paper-dim">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
