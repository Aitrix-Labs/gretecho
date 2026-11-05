import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SolutionsPage from './pages/SolutionsPage'
import VerticalsPage from './pages/VerticalsPage'
import NewsPage from './pages/NewsPage'
import CareerPage from './pages/CareerPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="verticals" element={<VerticalsPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="career" element={<CareerPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
