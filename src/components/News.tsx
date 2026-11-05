import { Link } from 'react-router-dom'
import { news } from '../data/content'

export default function News() {
  const featured = news.find((item) => item.featured)
  const archive = news.filter((item) => !item.featured)

  return (
    <section className="news" id="news">
      <div className="container">
        <div className="news__header">
          <h2 className="section-title">News &amp; Updates</h2>
          <Link to="/news" className="text-link">
            View All
          </Link>
        </div>

        <div className="news__layout">
          {featured && (
            <article
              className="news__featured"
              style={
                featured.image
                  ? { ['--news-image' as string]: `url(${featured.image})` }
                  : undefined
              }
            >
              <span className="news__eyebrow">Featured</span>
              <h3>{featured.title}</h3>
              <p>{featured.excerpt}</p>
              <Link to="/news" className="text-link">
                Read the full story
              </Link>
            </article>
          )}

          <div className="news__archive">
            <h3 className="news__archive-title">Archive</h3>
            <ul>
              {archive.map((item) => (
                <li key={item.title}>
                  <Link to="/news">
                    <strong>{item.title}</strong>
                    <time>{item.date}</time>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
