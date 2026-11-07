import { asset } from '../asset'
import PageBanner from '../components/PageBanner'
import News from '../components/News'

export default function NewsPage() {
  return (
    <>
      <PageBanner
        title="News & Updates"
        subtitle="Stories, partnerships, and milestones from across Gretecho."
        image={asset('images/bg-news.jpg')}
      />
      <News />
    </>
  )
}
