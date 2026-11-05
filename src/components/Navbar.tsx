import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/content'
import BrandLogo from './BrandLogo'

type NavbarProps = {
  solid?: boolean
}

export default function Navbar({ solid = false }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1100) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solidNav = solid || scrolled || open

  return (
    <header className={`nav ${solidNav ? 'nav--solid' : ''} ${open ? 'nav--menu-open' : ''}`}>
      <div className="nav__inner">
        <BrandLogo onClick={() => setOpen(false)} />

        <nav className="nav__desktop" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <button
        type="button"
        className={`nav__backdrop ${open ? 'is-open' : ''}`}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />

      <div className={`nav__drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="nav__drawer-top">
          <p className="nav__drawer-label">Menu</p>
          <button
            type="button"
            className="nav__drawer-close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <span />
            <span />
          </button>
        </div>

        <nav className="nav__drawer-links" aria-label="Mobile">
          {navLinks
            .filter((link) => link.to !== '/contact')
            .map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                style={{ transitionDelay: open ? `${80 + index * 40}ms` : '0ms' }}
                onClick={() => setOpen(false)}
              >
                <span className="nav__drawer-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="nav__drawer-text">{link.label}</span>
              </NavLink>
            ))}
        </nav>

        <div className="nav__drawer-foot">
          <Link to="/contact" className="btn btn--primary" onClick={() => setOpen(false)}>
            Contact Us
          </Link>
          <p>Gretecho · gretecho.com</p>
        </div>
      </div>
    </header>
  )
}
