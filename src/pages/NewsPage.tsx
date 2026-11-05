import PageBanner from '../components/PageBanner'
import News from '../components/News'

export default function NewsPage() {
  return (
    <>
      <PageBanner
        title="News & Updates"
        subtitle="Stories, partnerships, and milestones from across Gretecho."
        image="/images/bg-news.jpg"
      />
      <News />
    </>
  )
}
