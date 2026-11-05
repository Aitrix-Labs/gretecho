import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__intro">
        <h2 className="section-title">20+ years of driving digital transformation</h2>
        <p>
          For over two decades, Gretecho has been at the forefront of developing and
          delivering impactful digital solutions that reshape the financial
          landscape. From pioneering digital payments to building robust financial
          platforms, our expertise lies in not just delivering cutting-edge
          solutions, but also driving widespread market adoption. Today, our
          platforms power millions of transactions, enabling individuals and
          businesses to thrive in an increasingly digital economy.
        </p>
        <div className="about__actions">
          <Link to="/career" className="btn btn--primary">
            Join Us
          </Link>
          <Link to="/about" className="btn btn--ghost">
            More About Us
          </Link>
        </div>
      </div>
    </section>
  )
}
