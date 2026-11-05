import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <>
      <ScrollToTop />
      <Navbar solid={!isHome} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
