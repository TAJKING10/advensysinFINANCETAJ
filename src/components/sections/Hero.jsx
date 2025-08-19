import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { HiChevronLeft, HiChevronRight, HiSparkles } from 'react-icons/hi'
import './Hero.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage()
  const navigate = useNavigate()

  const handleContactClick = () => {
    navigate('/contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const slides = [
    {
      id: 1,
      image: '/assets/slide-1.png',
      title: t('hero.slide1.title'),
      subtitle: t('hero.slide1.subtitle'),
      description: t('hero.slide1.description'),
      ctaText: t('hero.slide1.cta'),
      ctaLink: '/contact'
    },
    {
      id: 2,
      image: '/assets/slide-2.png',
      title: t('hero.slide2.title'),
      subtitle: t('hero.slide2.subtitle'),
      description: t('hero.slide2.description'),
      ctaText: t('hero.slide2.cta'),
      ctaLink: '/services'
    },
    {
      id: 3,
      image: '/assets/slide-3.png',
      title: t('hero.slide3.title'),
      subtitle: t('hero.slide3.subtitle'),
      description: t('hero.slide3.description'),
      ctaText: t('hero.slide3.cta'),
      ctaLink: '/contact'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Auto-advance slides
  React.useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [])

  const currentSlideData = slides[currentSlide]

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Background Image */}
        <div className="hero-background">
          <img 
            src={currentSlideData.image} 
            alt={currentSlideData.title}
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="container hero-content">
          <div className="hero-text">
            <h2 className="hero-subtitle">{currentSlideData.subtitle}</h2>
            <h1 className="hero-title">{currentSlideData.title}</h1>
            <p className="hero-description">{currentSlideData.description}</p>
            
            <div className="hero-actions">
              {currentSlideData.ctaLink === '/contact' ? (
                <button onClick={handleContactClick} className="btn btn-primary btn-lg" style={{ border: 'none', cursor: 'pointer' }}>
                  {currentSlideData.ctaText}
                </button>
              ) : (
                <Link to={currentSlideData.ctaLink} className="btn btn-primary btn-lg">
                  {currentSlideData.ctaText}
                </Link>
              )}
              <button onClick={() => { navigate('/about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn btn-secondary btn-lg" style={{ border: 'none', cursor: 'pointer' }}>
                {t('common.learnMore')}
              </button>
            </div>

            {/* Key Features */}
            <div className="hero-features">
              <div className="hero-feature">
                <img src="/assets/strengths-1.svg" alt={t('hero.features.fastService')} />
                <span>{t('hero.features.fastService')}</span>
              </div>
              <div className="hero-feature">
                <img src="/assets/strengths-2.svg" alt={t('hero.features.expertAdvice')} />
                <span>{t('hero.features.expertAdvice')}</span>
              </div>
              <div className="hero-feature">
                <img src="/assets/strengths-3.svg" alt={t('hero.features.bestRates')} />
                <span>{t('hero.features.bestRates')}</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="hero-image">
            <img src="/assets/hero.png" alt="Insurance Solutions" />
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="hero-navigation">
          <button 
            className="slide-btn slide-btn-prev" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <HiChevronLeft />
          </button>
          
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className="slide-btn slide-btn-next" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <HiChevronRight />
          </button>
        </div>

        {/* Statistics */}
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-number">10K+</span>
            <span className="stat-label">{t('hero.stats.clients')}</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">18+</span>
            <span className="stat-label">{t('hero.stats.experience')}</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">{t('hero.stats.partners')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero