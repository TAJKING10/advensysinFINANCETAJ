import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useLocation } from '../contexts/LocationContext'
import './Services.css'

const Services = () => {
  const { t } = useLanguage()
  const { currentLocationData } = useLocation()
  const [searchParams] = useSearchParams()
  const [expandedServices, setExpandedServices] = useState(new Set())

  // Auto-expand service if specified in URL parameters
  useEffect(() => {
    const serviceId = searchParams.get('service')
    if (serviceId) {
      // First expand the service
      setExpandedServices(prev => {
        const newSet = new Set(prev)
        newSet.add(serviceId)
        return newSet
      })
      
      // Then scroll to the service after allowing time for DOM update
      setTimeout(() => {
        const element = document.getElementById(`service-${serviceId}`)
        if (element) {
          // Scroll with more padding from top for better visibility
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          })
        }
      }, 300)
    }
  }, [searchParams])

  const financialEducationVideos = [
    {
      id: 'bpmi-en',
      title: 'Borrower Paid Mortgage Insurance',
      youtubeId: '7ltogxhD6Xs'
    },
    {
      id: 'bpmi-fr',
      title: 'Assurance Solde Restant Dû',
      youtubeId: '1wGVUPcAtaA'
    },
    {
      id: 'mortgage-en',
      title: 'Mortgage Loan',
      youtubeId: '6_2K5tcRfWw'
    },
    {
      id: 'mortgage-fr',
      title: 'Prêt Immobilier',
      youtubeId: 'ohNkwTvkRGU'
    },
    {
      id: 'savings-en',
      title: 'House Savings Plan',
      youtubeId: 'UPXZ5q-XFe0'
    },
    {
      id: 'savings-fr',
      title: 'Épargne Logement',
      youtubeId: 'cVq9gvJN6IE'
    },
    {
      id: 'pension-en',
      title: 'Private Pension Plan',
      youtubeId: 'VIcqJ0WuaoY'
    },
    {
      id: 'pension-fr',
      title: 'Prévoyance Vieillesse',
      youtubeId: '_nxRWgmeFLU'
    },
    {
      id: 'welcome-en',
      title: 'Welcome to Advensys In-Finance',
      youtubeId: 'rrtUkqn9gqo'
    },
    {
      id: 'welcome-fr',
      title: 'Bonjour et Bienvenue chez Advensys In-Finance',
      youtubeId: 'amwQlWwkaMs'
    }
  ]

  // Filter videos based on language selection
  const getFilteredVideos = (videos) => {
    const { currentLanguage } = useLanguage()
    
    if (currentLanguage === 'fr') {
      // Show only French videos when French is selected
      return videos.filter(video => video.id.endsWith('-fr'))
    } else {
      // Show English videos for English and Swedish (or any other language)
      return videos.filter(video => video.id.endsWith('-en'))
    }
  }

  const mainServices = [
    {
      id: 'insurance',
      title: t('services.mainServices.insurance.title'),
      shortDescription: t('services.mainServices.insurance.shortDescription'),
      image: '/assets/category-1.png',
      relatedVideos: getFilteredVideos([
        {
          id: 'welcome-en',
          title: 'Welcome to Advensys In-Finance',
          youtubeId: 'rrtUkqn9gqo'
        },
        {
          id: 'welcome-fr',
          title: 'Bonjour et Bienvenue chez Advensys In-Finance',
          youtubeId: 'amwQlWwkaMs'
        }
      ]).slice(0, 1),
      details: {
        overview: t('services.mainServices.insurance.overview'),
        services: t('services.mainServices.insurance.services'),
        benefits: t('services.mainServices.insurance.benefits')
      }
    },
    {
      id: 'dedicated-life-insurance',
      title: t('services.mainServices.dedicatedLifeInsurance.title'),
      shortDescription: t('services.mainServices.dedicatedLifeInsurance.shortDescription'),
      image: '/assets/category-2.png',
      relatedVideos: getFilteredVideos([
        {
          id: 'bpmi-en',
          title: 'Borrower Paid Mortgage Insurance',
          youtubeId: '7ltogxhD6Xs'
        },
        {
          id: 'bpmi-fr',
          title: 'Assurance Solde Restant Dû',
          youtubeId: '1wGVUPcAtaA'
        }
      ]).slice(0, 1),
      details: {
        overview: t('services.mainServices.dedicatedLifeInsurance.overview'),
        services: t('services.mainServices.dedicatedLifeInsurance.services'),
        benefits: t('services.mainServices.dedicatedLifeInsurance.benefits')
      }
    },
    {
      id: 'investment-adviser',
      title: t('services.mainServices.investmentAdviser.title'),
      shortDescription: t('services.mainServices.investmentAdviser.shortDescription'),
      image: '/assets/category-3.png',
      relatedVideos: getFilteredVideos([
        {
          id: 'savings-en',
          title: 'House Savings Plan',
          youtubeId: 'UPXZ5q-XFe0'
        },
        {
          id: 'savings-fr',
          title: 'Épargne Logement',
          youtubeId: 'cVq9gvJN6IE'
        }
      ]).slice(0, 1),
      details: {
        overview: t('services.mainServices.investmentAdviser.overview'),
        services: t('services.mainServices.investmentAdviser.services'),
        benefits: t('services.mainServices.investmentAdviser.benefits')
      }
    },
    {
      id: 'broker-in-bank',
      title: t('services.mainServices.brokerInBank.title'),
      shortDescription: t('services.mainServices.brokerInBank.shortDescription'),
      image: '/assets/category-4.png',
      relatedVideos: getFilteredVideos([
        {
          id: 'mortgage-en',
          title: 'Mortgage Loan',
          youtubeId: '6_2K5tcRfWw'
        },
        {
          id: 'mortgage-fr',
          title: 'Prêt Immobilier',
          youtubeId: 'ohNkwTvkRGU'
        }
      ]).slice(0, 1),
      details: {
        overview: t('services.mainServices.brokerInBank.overview'),
        services: t('services.mainServices.brokerInBank.services'),
        benefits: t('services.mainServices.brokerInBank.benefits')
      }
    },
    {
      id: 'private-pension-plan',
      title: t('services.mainServices.privatePensionPlan.title'),
      shortDescription: t('services.mainServices.privatePensionPlan.shortDescription'),
      image: '/assets/category-5.png',
      relatedVideos: getFilteredVideos([
        {
          id: 'pension-en',
          title: 'Private Pension Plan',
          youtubeId: 'VIcqJ0WuaoY'
        },
        {
          id: 'pension-fr',
          title: 'Prévoyance Vieillesse',
          youtubeId: '_nxRWgmeFLU'
        }
      ]).slice(0, 1),
      details: {
        overview: t('services.mainServices.privatePensionPlan.overview'),
        services: t('services.mainServices.privatePensionPlan.services'),
        benefits: t('services.mainServices.privatePensionPlan.benefits')
      }
    }
  ]

  const toggleService = (serviceId) => {
    setExpandedServices(prev => {
      const newSet = new Set(prev)
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId)
      } else {
        newSet.add(serviceId)
      }
      return newSet
    })
  }

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-title">{t('services.pageTitle')}</h1>
            <p className="page-subtitle">
              {t('services.pageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Company Services Section */}
      <section id="main-services" className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('services.mainServicesTitle')}</h2>
            <p className="section-subtitle">
              {t('services.mainServicesSubtitle')}
            </p>
          </div>

          <div className="services-list">
            {mainServices.map(service => (
              <div key={service.id} id={`service-${service.id}`} className={`service-item ${expandedServices.has(service.id) ? 'expanded' : ''}`}>
                <div className="service-summary" onClick={() => toggleService(service.id)}>
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="service-basic-info">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-short-description">{service.shortDescription}</p>
                    <button className="expand-btn">
                      {expandedServices.has(service.id) ? t('services.showLess') : t('services.learnMore')}
                      <span className={`arrow ${expandedServices.has(service.id) ? 'up' : 'down'}`}>→</span>
                    </button>
                  </div>
                </div>

                {expandedServices.has(service.id) && (
                  <div className="service-details">
                    <div className="service-overview">
                      <h4>{t('services.overview')}</h4>
                      <p>{service.details.overview}</p>
                    </div>

                    {service.relatedVideos && service.relatedVideos.length > 0 && (
                      <div className="service-videos">
                        <h4>{t('services.educationalVideos')}</h4>
                        <div className="videos-grid">
                          {service.relatedVideos.map(video => (
                            <div key={video.id} className="video-item">
                              <h5 className="video-title">{video.title}</h5>
                              <div className="video-wrapper">
                                <div className="youtube-video">
                                  <iframe
                                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="video-player"
                                  ></iframe>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="service-offerings">
                      <div className="offerings-section">
                        <h4>{t('services.ourServicesInclude')}</h4>
                        <ul>
                          {service.details.services.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="benefits-section">
                        <h4>{t('services.keyBenefits')}</h4>
                        <ul>
                          {service.details.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="service-cta">
                      <h4>{t('services.readyToStart')}</h4>
                      <p>{t('services.contactToday')} to discuss your {service.title.toLowerCase()} needs and get a personalized quote.</p>
                      <div className="cta-buttons">
                        <Link to="/contact" className="btn btn-primary">
                          {t('common.contactUs')}
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                          {t('services.getQuote')}
                        </Link>
                        <a href={`tel:${currentLocationData?.phone?.replace(/\s/g, '')}`} className="btn btn-outline">
                          {t('services.callNow')}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <div className="services-cta">
            <div className="cta-content text-center">
              <h2 className="cta-title">{t('services.readyToStart')}</h2>
              <p className="cta-description">
                {t('services.contactToday')} to discuss your financial needs and find the perfect solution for you.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  {t('common.contactUs')} Today
                </Link>
                <a href={`tel:${currentLocationData?.phone?.replace(/\s/g, '')}`} className="cta-phone">
                  <img src="/assets/phone.svg" alt="Phone" />
                  <span>{t('services.cta.phone')} {currentLocationData?.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services