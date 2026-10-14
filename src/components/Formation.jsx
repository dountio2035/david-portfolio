import Section from './Section.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Formation() {
  const { t } = useLanguage()
  const f = t.formation

  return (
    <Section id="formation" title={f.titleFormation} alt>
      <div className="edu-grid">
        <div className="edu-col">
          <h3 className="col-title">{f.titleDiplomas}</h3>
          <ul className="entries">
            {f.diplomas.map((d) => (
              <li key={d.title}>
                <h4>{d.title}</h4>
                <p>{d.org}</p>
                <p className="faint">{d.mention}</p>
              </li>
            ))}
          </ul>

          <div className="langs">
            <h3 className="col-title">{f.titleLangues}</h3>
            <p>{f.langues}</p>
          </div>
        </div>

        <div className="edu-col">
          <h3 className="col-title">{f.titleCerts}</h3>
          <ul className="entries">
            {f.certifications.map((c) => (
              <li key={c.title}>
                <div className="top">
                  <h4>{c.title}</h4>
                  {c.period && <span className="when">{c.period}</span>}
                </div>
                {c.org && <p>{c.org}</p>}
                {c.note && <p className="faint">{c.note}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
