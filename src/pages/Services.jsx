import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useLocation } from '../contexts/LocationContext'
import './Services.css'

const Services = () => {
  const { t } = useLanguage()
  const { currentLocationData } = useLocation()
  const [expandedServices, setExpandedServices] = useState(new Set())

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

  const mainServices = [
    {
      id: 'insurance',
      title: 'Insurance Services',
      shortDescription: 'Comprehensive insurance solutions tailored to your needs',
      image: '/assets/category-1.png',
      relatedVideos: [
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
      ],
      details: {
        overview: 'At Advensys Insurance Finance, we provide comprehensive insurance solutions that protect what matters most to you. Our experienced team works with leading insurance carriers to offer competitive rates and comprehensive coverage.',
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
      title: 'Dedicated Life Insurance',
      shortDescription: 'Specialized life insurance products for financial security',
      image: '/assets/category-2.png',
      relatedVideos: [
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
      ],
      details: {
        overview: 'Our dedicated life insurance services focus exclusively on providing comprehensive life insurance solutions that ensure your loved ones are financially protected when they need it most.',
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
      title: 'Investment Adviser',
      shortDescription: 'Professional investment advisory for wealth building',
      image: '/assets/category-3.png',
      relatedVideos: [
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
      ],
      details: {
        overview: 'As registered investment advisers, we provide personalized investment guidance and portfolio management services designed to help you achieve your financial goals through disciplined, research-driven strategies.',
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
      title: 'Broker in Bank',
      shortDescription: 'Banking intermediary services for optimal solutions',
      image: '/assets/category-4.png',
      relatedVideos: [
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
        }
      ],
      details: {
        overview: 'As licensed banking intermediaries, we bridge the gap between you and financial institutions to secure the best banking products and services with optimal terms and conditions.',
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
      title: 'Private Pension Plan',
      shortDescription: 'Luxembourg pension plans with tax advantages',
      image: '/assets/category-5.png',
      relatedVideos: [
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
      ],
      details: {
        overview: 'Luxembourg private pension plans offer unparalleled advantages for retirement planning, combining political stability, robust regulatory framework, and significant tax benefits for optimal retirement security.',
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
            <h1 className="page-title">Our Services</h1>
            <p className="page-subtitle">
              Comprehensive financial solutions and educational resources for your financial success
            </p>
          </div>
        </div>
      </section>

      {/* Main Company Services Section */}
      <section id="main-services" className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Main Services</h2>
            <p className="section-subtitle">
              Professional financial services designed to meet your specific needs
            </p>
          </div>

          <div className="services-list">
            {mainServices.map(service => (
              <div key={service.id} className={`service-item ${expandedServices.has(service.id) ? 'expanded' : ''}`}>
                <div className="service-summary" onClick={() => toggleService(service.id)}>
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="service-basic-info">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-short-description">{service.shortDescription}</p>
                    <button className="expand-btn">
                      {expandedServices.has(service.id) ? 'Show Less' : 'Learn More'}
                      <span className={`arrow ${expandedServices.has(service.id) ? 'up' : 'down'}`}>→</span>
                    </button>
                  </div>
                </div>

                {expandedServices.has(service.id) && (
                  <div className="service-details">
                    <div className="service-overview">
                      <h4>Overview</h4>
                      <p>{service.details.overview}</p>
                    </div>

                    {service.relatedVideos && service.relatedVideos.length > 0 && (
                      <div className="service-videos">
                        <h4>Educational Videos</h4>
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
                        <h4>Our Services Include:</h4>
                        <ul>
                          {service.details.services.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="benefits-section">
                        <h4>Key Benefits:</h4>
                        <ul>
                          {service.details.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="service-cta">
                      <h4>Ready to Get Started?</h4>
                      <p>Contact us today to discuss your {service.title.toLowerCase()} needs and get a personalized quote.</p>
                      <div className="cta-buttons">
                        <Link to="/contact" className="btn btn-primary">
                          Contact Us
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                          Get Quote
                        </Link>
                        <a href={`tel:${currentLocationData?.phone?.replace(/\s/g, '')}`} className="btn btn-outline">
                          Call Now
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
              <h2 className="cta-title">Ready to Get Started?</h2>
              <p className="cta-description">
                Contact us today to discuss your financial needs and find the perfect solution for you.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Contact Us Today
                </Link>
                <a href={`tel:${currentLocationData?.phone?.replace(/\s/g, '')}`} className="cta-phone">
                  <img src="/assets/phone.svg" alt="Phone" />
                  <span>Call: {currentLocationData?.phone}</span>
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