import { Link } from 'react-router-dom'
import BrandLogo from './BrandLogo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <BrandLogo className="nav__logo--footer" />
          <p>
            Gretecho democratizes financial services to create possibilities for
            economic progress and individual prosperity.
          </p>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Our Solutions</h4>
          <ul>
            <li>
              <Link to="/solutions">Omnichannel Banking</Link>
            </li>
            <li>
              <Link to="/solutions">Neobanking</Link>
            </li>
            <li>
              <Link to="/solutions">Smart Wallet</Link>
            </li>
            <li>
              <Link to="/solutions">Digital Lending</Link>
            </li>
            <li>
              <Link to="/solutions">Digital Payments Processor</Link>
            </li>
            <li>
              <Link to="/solutions">Loyalty Management</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Business Verticals</h4>
          <ul>
            <li>
              <Link to="/verticals">eSewa</Link>
            </li>
            <li>
              <Link to="/verticals">Fonepay</Link>
            </li>
            <li>
              <Link to="/verticals">Foneloan</Link>
            </li>
            <li>
              <Link to="/verticals">FoneNXT</Link>
            </li>
            <li>
              <Link to="/verticals">Fonepoints</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Gretecho. All rights reserved.</p>
        <div className="footer__social">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                fill="currentColor"
                d="M6.5 8.5H3.7V20h2.8V8.5zM5.1 4a1.7 1.7 0 1 0 0 3.4A1.7 1.7 0 0 0 5.1 4zM20.3 20h-2.8v-5.6c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V20h-2.8s.0-9.4 0-10.4h2.8v1.5c.4-.6 1.1-1.5 2.7-1.5 2 0 3.5 1.3 3.5 4.1V20z"
              />
            </svg>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                fill="currentColor"
                d="M14.5 20v-7.2h2.4l.4-2.8h-2.8V8.3c0-.8.2-1.4 1.4-1.4h1.5V4.1c-.3 0-1.1-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H9.2v2.8h2.3V20h3z"
              />
            </svg>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 7.4A4.6 4.6 0 1 0 16.6 12 4.6 4.6 0 0 0 12 7.4zm0 7.6A3 3 0 1 1 15 12a3 3 0 0 1-3 3zm5.8-7.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1zM12 4.4c-2.1 0-2.3 0-3.2.1a4.5 4.5 0 0 0-3.3 3.3c-.1.9-.1 1.1-.1 3.2s0 2.3.1 3.2a4.5 4.5 0 0 0 3.3 3.3c.9.1 1.1.1 3.2.1s2.3 0 3.2-.1a4.5 4.5 0 0 0 3.3-3.3c.1-.9.1-1.1.1-3.2s0-2.3-.1-3.2a4.5 4.5 0 0 0-3.3-3.3c-.9-.1-1.1-.1-3.2-.1zm0 1.4c2 0 2.3 0 3.1.1a3.1 3.1 0 0 1 2.3 2.3c.1.8.1 1 .1 3.1s0 2.3-.1 3.1a3.1 3.1 0 0 1-2.3 2.3c-.8.1-1 .1-3.1.1s-2.3 0-3.1-.1a3.1 3.1 0 0 1-2.3-2.3c-.1-.8-.1-1-.1-3.1s0-2.3.1-3.1a3.1 3.1 0 0 1 2.3-2.3c.8-.1 1.1-.1 3.1-.1z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
