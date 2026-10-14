import Section from './Section.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Skills() {
  const { t } = useLanguage()
  const s = t.skills
  const core = s.groups.find((g) => g.featured)
  const others = s.groups.filter((g) => !g.featured)

  return (
    <Section id="competences" title={s.title} alt>
      <p className="skills-intro">{s.intro}</p>

      {core && (
        <div className="core">
          <div className="core-head">
            <h3 className="h3">{core.label}</h3>
            <p>{core.desc}</p>
          </div>
          <ul className="core-list">
            {core.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      )}

      <div className="groups">
        {others.map((g) => (
          <div key={g.label}>
            <h3 className="h3">{g.label}</h3>
            <ul>
              {g.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
