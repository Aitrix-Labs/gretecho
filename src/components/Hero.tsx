import { useEffect, useRef, useState } from 'react'

const HERO_VIDEO = '/videos/hero-digital-payment.mp4?v=2'

export default function Hero() {
  const [muted, setMuted] = useState(true)
  const bgRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    void bgRef.current?.play().catch(() => {})
  }, [])

  useEffect(() => {
    if (bgRef.current) bgRef.current.muted = muted
  }, [muted])

  return (
    <section className="hero" id="top">
      <video
        ref={bgRef}
        className="hero__video"
        src={HERO_VIDEO}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      <div className="hero__overlay" aria-hidden />

      <div className="hero__content">
        <h1 className="hero__title">
          <span>For</span> <span>Possibilities,</span>{' '}
          <span>Progress</span> <span>&amp;</span>{' '}
          <span>Prosperity</span>
        </h1>
        <p className="hero__subtitle">
          We democratize financial services to create new possibilities for
          economic progress and individual prosperity.
        </p>
        <button
          type="button"
          className="hero__play"
          aria-label={muted ? 'Unmute background video' : 'Mute background video'}
          onClick={() => setMuted((value) => !value)}
        >
          <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
            <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 8.5v7l6-3.5-6-3.5z" fill="currentColor" />
          </svg>
        </button>
      </div>
      <div className="hero__fade" aria-hidden />
    </section>
  )
}
