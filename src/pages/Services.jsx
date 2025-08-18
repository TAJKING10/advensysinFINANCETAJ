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
      {/* Hero Header */}
      <section className="services-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🔹 Professional Services</span>
            </div>
            <h1 className="hero-title">Our Financial Services</h1>
            <p className="hero-subtitle">
              Comprehensive financial solutions designed to secure your future and achieve your goals
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5</div>
                <div className="stat-label">Core Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="main-services" className="main-services-section">
        <div className="services-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span>💼 Our Expertise</span>
            </div>
            <h2 className="section-title">Professional Financial Services</h2>
            <p className="section-subtitle">
              Tailored solutions designed to meet your unique financial goals and secure your future
            </p>
          </div>

          <div className="services-grid">
            {mainServices.map(service => (
              <div key={service.id} className={`service-card ${expandedServices.has(service.id) ? 'expanded' : ''}`}>
                <div className="service-header" onClick={() => toggleService(service.id)}>
                  <div className="service-icon">
                    <img src={service.image} alt={service.title} />
                    <div className="icon-overlay"></div>
                  </div>
                  <div className="service-info">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.shortDescription}</p>
                    <div className="learn-more-btn">
                      <span>{expandedServices.has(service.id) ? 'Show Less' : 'Learn More'}</span>
                      <div className={`arrow-icon ${expandedServices.has(service.id) ? 'up' : 'down'}`}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7 10l5 5 5-5z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {expandedServices.has(service.id) && (
                  <div className="service-content">
                    <div className="content-grid">
                      <div className="overview-section">
                        <div className="section-icon">📋</div>
                        <h4>Overview</h4>
                        <p>{service.details.overview}</p>
                      </div>

                      {service.relatedVideos && service.relatedVideos.length > 0 && (
                        <div className="videos-section">
                          <div className="section-icon">🎥</div>
                          <h4>Educational Videos</h4>
                          <div className="video-grid">
                            {service.relatedVideos.map(video => (
                              <div key={video.id} className="video-card">
                                <div className="video-container">
                                  <iframe
                                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  ></iframe>
                                </div>
                                <h5 className="video-title">{video.title}</h5>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="features-section">
                        <div className="features-grid">
                          <div className="feature-column">
                            <div className="section-icon">⚡</div>
                            <h4>Services</h4>
                            <ul className="feature-list">
                              {service.details.services.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="feature-column">
                            <div className="section-icon">✨</div>
                            <h4>Benefits</h4>
                            <ul className="feature-list">
                              {service.details.benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="action-section">
                        <div className="cta-card">
                          <h4>Ready to Get Started?</h4>
                          <p>Let's discuss your {service.title.toLowerCase()} needs</p>
                          <div className="action-buttons">
                            <Link to="/contact" className="action-btn primary">
                              <span>Contact Us</span>
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                              </svg>
                            </Link>
                            <a href={`tel:${currentLocationData?.phone?.replace(/\s/g, '')}`} className="action-btn secondary">
                              <span>Call Now</span>
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="final-cta-section">
        <div className="cta-background">
          <div className="cta-pattern"></div>
        </div>
        <div className="container">
          <div className="final-cta-content">
            <div className="cta-text">
              <h2>Start Your Financial Journey Today</h2>
              <p>Join thousands of satisfied clients who trust us with their financial future</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="cta-btn primary">
                <span>Get Started</span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
              <a href={`tel:${currentLocationData?.phone?.replace(/\s/g, '')}`} className="cta-btn secondary">
                <span>{currentLocationData?.phone}</span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services