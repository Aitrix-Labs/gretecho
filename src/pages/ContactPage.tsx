import { useState } from 'react'
import type { FormEvent } from 'react'
import PageBanner from '../components/PageBanner'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageBanner
        title="Contact"
        subtitle="Tell us about your banking, payments, or digital transformation goals."
        image="/images/bg-solutions.jpg"
      />
      <section className="page-section page-section--light">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2>Get in touch</h2>
            <p>
              Reach our teams in Nepal and Dubai. We partner with banks and financial
              institutions to deliver secure, scalable digital experiences.
            </p>
            <ul>
              <li>
                <strong>Nepal</strong>
                <span>Innovation Center, Kathmandu</span>
              </li>
              <li>
                <strong>Dubai</strong>
                <span>Business Center, UAE</span>
              </li>
              <li>
                <strong>Email</strong>
                <span>hello@gretecho.com</span>
              </li>
              <li>
                <strong>Website</strong>
                <span>www.gretecho.com</span>
              </li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            {sent ? (
              <div className="contact-success" role="status">
                Thanks — your message is ready. We will get back to you soon.
              </div>
            ) : (
              <>
                <label>
                  Full name
                  <input name="name" type="text" required placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required placeholder="you@company.com" />
                </label>
                <label>
                  Subject
                  <input name="subject" type="text" required placeholder="How can we help?" />
                </label>
                <label>
                  Message
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Share a few details about your project"
                  />
                </label>
                <button type="submit" className="btn btn--primary">
                  Send message
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
