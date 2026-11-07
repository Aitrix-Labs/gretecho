import { Link } from 'react-router-dom'
import { asset } from '../asset'
import PageBanner from '../components/PageBanner'
import Stats from '../components/Stats'

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="For over two decades, Gretecho has been at the forefront of digital financial services across Nepal and beyond."
        image={asset('images/bg-about.jpg')}
      />
      <section className="page-section page-section--light">
        <div className="container page-prose">
          <h2 className="section-title">20+ years of driving digital transformation</h2>
          <p>
            From pioneering digital payments to building robust financial platforms,
            our expertise lies in not just delivering cutting-edge solutions, but also
            driving widespread market adoption. Today, our platforms power millions of
            transactions, enabling individuals and businesses to thrive in an
            increasingly digital economy.
          </p>
          <p>
            With an innovation center in Nepal and a business center in Dubai, we
            continue to expand our horizons while staying rooted in democratizing
            financial services for possibilities, progress, and prosperity —
            powered by gretecho.com.
          </p>
          <div className="about__actions">
            <Link to="/career" className="btn btn--primary">
              Join Us
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Stats />
    </>
  )
}
