import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'

export default function CareerPage() {
  return (
    <>
      <PageBanner
        title="Career"
        subtitle="Join a 1200+ strong team of technologists, domain experts, and creative thinkers."
        image="/images/bg-about.jpg"
      />
      <section className="page-section page-section--light">
        <div className="container page-prose">
          <h2 className="section-title">Grow with Gretecho</h2>
          <p>
            Guided by our values, we build products that touch millions of lives.
            Our workforce comprises experienced technologists, domain experts, and
            creative thinkers shaping the future of digital financial services.
          </p>
          <p>
            Interested in joining us? Reach out and tell us how you want to
            contribute.
          </p>
          <div className="about__actions">
            <Link to="/contact" className="btn btn--primary">
              Contact Us
            </Link>
            <Link to="/about" className="btn btn--ghost">
              About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
