import Reveal from './Reveal.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Formation() {
  const { t } = useLanguage()
  const f = t.formation

  return (
    <section id="formation" className="relative bg-ink-800 py-24 border-t border-ink-border/60">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">
        <Reveal>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal-teal mb-8">
              {f.titleFormation}
            </p>
            <ul className="space-y-6">
              {f.diplomas.map((d) => (
                <li key={d.title} className="border-b border-ink-border/60 pb-6 last:border-0">
                  <h3 className="font-display text-paper text-lg">{d.title}</h3>
                  <p className="text-sm text-paper-muted mt-1">{d.org} · {d.mention}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal-teal mb-4">{f.titleLangues}</p>
              <p className="text-paper-muted">{f.langues}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal-teal mb-8">
              {f.titleCerts}
            </p>
            <ul className="space-y-6">
              {f.certifications.map((c) => (
                <li key={c.title} className="border-b border-ink-border/60 pb-6 last:border-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-display text-paper text-base">{c.title}</h3>
                    {c.period && <span className="font-mono text-xs text-paper-dim shrink-0">{c.period}</span>}
                  </div>
                  {c.org && <p className="text-sm text-paper-muted mt-1">{c.org}</p>}
                  {c.note && <p className="text-sm text-paper-dim mt-1 leading-relaxed">{c.note}</p>}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
