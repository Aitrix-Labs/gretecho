import { asset } from '../asset'
import PageBanner from '../components/PageBanner'
import Verticals from '../components/Verticals'

export default function VerticalsPage() {
  return (
    <>
      <PageBanner
        title="Business Verticals"
        subtitle="Each solution has evolved into a market-leading standalone business vertical."
        image={asset('images/bg-section-dark.jpg')}
      />
      <Verticals />
    </>
  )
}
