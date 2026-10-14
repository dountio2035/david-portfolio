import Section from './Section.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

// A quiet sketch of the thesis subject: a mesh of irrigation sensors where one
// node is flagged by the trust model. Decorative only.
const nodes = [[40, 60], [150, 30], [270, 70], [90, 160], [210, 175], [320, 150], [150, 270], [280, 260]]
const edges = [[0, 1], [1, 2], [0, 3], [1, 4], [2, 4], [2, 5], [3, 4], [4, 5], [3, 6], [4, 6], [4, 7], [5, 7], [6, 7]]

function TrustGraph() {
  return (
    <svg className="trust-graph" viewBox="0 0 360 310" aria-hidden="true" focusable="false">
      {edges.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="currentColor" strokeWidth="1.5" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 4 ? 10 : 6} fill={i === 4 ? 'none' : 'currentColor'} stroke="currentColor" strokeWidth="2" />
      ))}
    </svg>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const p = t.projects
  const [research, ...rest] = p.items

  return (
    <Section id="projets" title={p.title} alt>
      <article className="feature">
        <TrustGraph />
        <div style={{ position: 'relative' }}>
          <p className="feature-kind">{research.kind}</p>
          <h3>{research.title}</h3>
        </div>
        <div style={{ position: 'relative' }}>
          <p className="desc">{research.desc}</p>
          <p className="stack">{research.stack.join(', ')}</p>
        </div>
      </article>

      <div className="projects">
        {rest.map((item) => (
          <article key={item.title} className="project">
            <p className="project-kind">{item.kind}</p>
            <h3 className="h3">{item.title}</h3>
            <p className="desc">{item.desc}</p>
            <p className="stack">{item.stack.join(', ')}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
