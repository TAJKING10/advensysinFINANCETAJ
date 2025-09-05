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
          id: 'bpmi-en',
          title: 'Borrower Paid Mortgage Insurance',
          youtubeId: '7ltogxhD6Xs'
        },
        {
          id: 'bpmi-fr',
          title: 'Assurance Solde Restant Dû',
          youtubeId: '1wGVUPcAtaA'
        }
      ]).slice(0, 1), // Only show one video
      details: {
        overview: t('services.mainServices.insurance.overview'),
        services: [
          'Life Insurance - Term, Whole, Universal, and Variable life options',
          'Health Insurance - Individual, family, and group health plans',
          'Property Insurance - Homeowners, renters, and commercial property',
          'Business Insurance - Liability, workers compensation, and cyber protection',
          'Auto Insurance - Comprehensive vehicle protection and coverage'
        ],
        benefits: [
          'Expert guidance from licensed insurance professionals',
          'Competitive rates from multiple insurance carriers',
          'Comprehensive claims support and advocacy',
          'Regular policy reviews and updates',
          'Personalized coverage recommendations'
        ]
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
      ]).slice(0, 1), // Only show one video
      details: {
        overview: t('services.mainServices.dedicatedLifeInsurance.overview'),
        services: [
          'Term Life Insurance - 10, 20, or 30-year term options with level premiums',
          'Whole Life Insurance - Lifetime coverage with cash value accumulation',
          'Universal Life Insurance - Flexible premiums and adjustable death benefits',
          'Variable Life Insurance - Investment-linked cash value growth',
          'Group Life Insurance - Employer-sponsored life insurance plans'
        ],
        benefits: [
          'Specialized expertise in life insurance products',
          'Personalized needs analysis and coverage recommendations',
          'Advanced features like living benefits and estate planning',
          'Tax-advantaged wealth building strategies',
          'Ongoing policy management and support'
        ]
      }
    },
    {
      id: 'investment-adviser',
      title: t('services.mainServices.investmentAdviser.title'),
      shortDescription: t('services.mainServices.investmentAdviser.shortDescription'),
      image: '/assets/category-3.png',
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
      ]).slice(0, 1), // Only show one video
      details: {
        overview: t('services.mainServices.investmentAdviser.overview'),
        services: [
          'Portfolio Management - Customized investment portfolios and asset allocation',
          'Investment Planning - Goal-based strategies and retirement planning',
          'Research & Analysis - Market research and investment due diligence',
          'Wealth Management - High net worth and institutional services',
          'Tax-Efficient Investing - Strategies to minimize tax impact'
        ],
        benefits: [
          'Fiduciary standard - we act in your best interests',
          'Personalized approach tailored to your goals',
          'Transparent fee structure with no hidden costs',
          'Continuous portfolio monitoring and adjustments',
          'Long-term focus with disciplined investment approach'
        ]
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
      ]).slice(0, 1), // Only show one video
      details: {
        overview: t('services.mainServices.brokerInBank.overview'),
        services: [
          'Loan Brokerage - Mortgages, personal, business, and commercial lending',
          'Banking Services - Business banking, international solutions, treasury management',
          'Credit Solutions - Lines of credit, credit cards, asset-based lending',
          'Specialized Banking - Private banking, offshore solutions, multi-currency accounts',
          'Trade Finance - Letters of credit, invoice financing, and factoring'
        ],
        benefits: [
          'Extensive network of banking partners and institutions',
          'Negotiated best terms and competitive interest rates',
          'Expert guidance through complex banking processes',
          'Time-saving research and comparison services',
          'Regulatory compliance and professional licensing'
        ]
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
      ]).slice(0, 1), // Only show one video
      details: {
        overview: t('services.mainServices.privatePensionPlan.overview'),
        services: [
          'SEPCAV Plans - Specialized investment funds with maximum flexibility',
          'Luxembourg Life Insurance Pension - Combined retirement and life protection',
          'Corporate Pension Schemes - Employer-sponsored plans with tax advantages',
          'International Pension Planning - Cross-border and expat solutions',
          'Pension Optimization - Tax-efficient retirement strategies'
        ],
        benefits: [
          'Luxembourg tax advantages and regulatory security',
          'EU-wide pension portability and international mobility',
          'Investment flexibility with multi-currency options',
          'Strong creditor protection and asset segregation',
          'Professional management and institutional access'
        ]
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
                      <p>Contact us today to discuss your {service.title.toLowerCase()} needs and get a personalized quote.</p>
                      <div className="cta-buttons">
                        <Link to="/contact" className="btn btn-primary">
                          {t('common.contactUs')}
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                          {t('common.getQuote')}
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
                {t('services.ctaDescription')}
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  {t('services.contactUsToday')}
                </Link>
                <a href={`tel:${currentLocationData?.phone?.replace(/\s/g, '')}`} className="cta-phone">
                  <img src="/assets/phone.svg" alt="Phone" />
                  <span>{t('services.call')}: {currentLocationData?.phone}</span>
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