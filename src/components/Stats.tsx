import { stats } from '../data/content'

export default function Stats() {
  return (
    <section className="stats" aria-label="Impact statistics">
      <div className="container stats__grid">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className={`stat-card stat-card--${stat.tone}`}
            style={{ ['--stat-image' as string]: `url(${stat.image})` }}
          >
            <div className="stat-card__overlay" />
            <div className="stat-card__body">
              <p className="stat-card__value">{stat.value}</p>
              <h3>{stat.label}</h3>
              <p>{stat.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
