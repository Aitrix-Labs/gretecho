import { useState } from 'react'
import { Link } from 'react-router-dom'
import { solutions } from '../data/content'

export default function Solutions() {
  const [active, setActive] = useState(solutions[0].id)
  const current = solutions.find((s) => s.id === active) ?? solutions[0]

  return (
    <section className="solutions" id="solutions">
      <div className="container">
        <div className="solutions__header">
          <h2 className="section-title">Our Solutions</h2>
          <p>
            Designed with scalability, security and adaptability at its core, our
            advanced tech stack is the cornerstone of how we help partner BFIs grow
            and thrive. Together, we create solutions that drive sustainable growth.
          </p>
        </div>

        <div className="solutions__tabs" role="tablist" aria-label="Solutions">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              role="tab"
              aria-selected={active === solution.id}
              className={active === solution.id ? 'is-active' : ''}
              onClick={() => setActive(solution.id)}
            >
              {solution.title}
            </button>
          ))}
        </div>

        <article className="solutions__panel" key={current.id}>
          <div className="solutions__copy">
            <h3>{current.title}</h3>
            <p>{current.description}</p>
            <div className="solutions__usecase">
              <span>Use Case</span>
              <p>{current.useCase}</p>
            </div>
            <Link to="/verticals" className="btn btn--primary">
              Discover More
            </Link>
          </div>
          <div className="solutions__aside">
            <div
              className="solutions__media"
              style={{ ['--solution-image' as string]: `url(${current.image})` }}
              role="img"
              aria-label={`${current.title} visual`}
            />
            <div className="solutions__metrics">
              {current.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="metric"
                  style={{ ['--solution-image' as string]: `url(${current.image})` }}
                >
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
