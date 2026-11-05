import { Link } from 'react-router-dom'
import { verticals } from '../data/content'

export default function Verticals() {
  return (
    <section className="verticals" id="verticals">
      <div className="container">
        <div className="verticals__header">
          <h2 className="section-title">Business Verticals</h2>
          <p>
            Each of our comprehensive suite of solutions have evolved into market
            leading standalone business verticals.
          </p>
        </div>

        <div className="verticals__grid">
          {verticals.map((item, index) => (
            <Link
              key={item.name}
              to="/verticals"
              className="vertical-card"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <img
                className="vertical-card__logo"
                src={item.logo}
                alt={`${item.name} logo`}
                loading="lazy"
              />
              <span className="vertical-card__tag">{item.tag}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
