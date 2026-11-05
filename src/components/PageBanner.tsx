type PageBannerProps = {
  title: string
  subtitle: string
  image?: string
}

export default function PageBanner({
  title,
  subtitle,
  image = '/images/bg-banner-dark.jpg',
}: PageBannerProps) {
  return (
    <section
      className="page-banner"
      style={{ ['--page-banner-image' as string]: `url(${image})` }}
    >
      <div className="container page-banner__inner">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}
