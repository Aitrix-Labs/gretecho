import { Link } from 'react-router-dom'

type BrandLogoProps = {
  className?: string
  onClick?: () => void
}

export default function BrandLogo({ className = '', onClick }: BrandLogoProps) {
  return (
    <Link
      to="/"
      className={`nav__logo ${className}`.trim()}
      aria-label="Gretecho home"
      onClick={onClick}
    >
      <span className="nav__mark">GE</span>
      <span className="nav__word">Gretecho</span>
    </Link>
  )
}
