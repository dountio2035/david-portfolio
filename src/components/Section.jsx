// Every content section shares one grid: the title sits in a narrow left
// column (and stays in view while the section scrolls), the content on the right.
export default function Section({ id, title, alt = false, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-titre`} className={`section${alt ? ' alt' : ''}`}>
      <div className="wrap split">
        <div className="split-head">
          <h2 id={`${id}-titre`} className="h2">{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}
