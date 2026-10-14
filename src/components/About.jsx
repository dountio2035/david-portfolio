import Section from './Section.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <Section id="apropos" title={a.title}>
      <p className="lead">{a.lead}</p>
      <div className="prose">
        <p>{a.p1}</p>
        <p>{a.p2}</p>
        <p>{a.p3}</p>
      </div>
      <dl className="facts">
        {a.facts.map((f) => (
          <div key={f.label}>
            <dd>{f.value}</dd>
            <dt>{f.label}</dt>
          </div>
        ))}
      </dl>
    </Section>
  )
}
