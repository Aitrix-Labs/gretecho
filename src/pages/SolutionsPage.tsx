import { asset } from '../asset'
import PageBanner from '../components/PageBanner'
import Solutions from '../components/Solutions'

export default function SolutionsPage() {
  return (
    <>
      <PageBanner
        title="Our Solutions"
        subtitle="Scalable, secure, and adaptable technology that helps partner BFIs grow and thrive."
        image={asset('images/bg-solutions.jpg')}
      />
      <Solutions />
    </>
  )
}
