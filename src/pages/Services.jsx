import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import './Services.css'

const Services = () => {
  const { t } = useLanguage()
  
  const services = [
    {
      id: 'auto',
      title: t('services.items.autoInsurance.title'),
      description: t('services.items.autoInsurance.description'),
      image: '/assets/category-1.png',
      features: [
        t('servicesPage.auto.features.collision'),
        t('servicesPage.auto.features.liability'),
        t('servicesPage.auto.features.support'),
        t('servicesPage.auto.features.roadside'),
        t('servicesPage.auto.features.rental'),
        t('servicesPage.auto.features.glass')
      ],
      benefits: [
        t('servicesPage.auto.benefits.rates'),
        t('servicesPage.auto.benefits.discounts'),
        t('servicesPage.auto.benefits.rewards'),
        t('servicesPage.auto.benefits.processing')
      ]
    },
    {
      id: 'health',
      title: t('services.items.healthInsurance.title'),
      description: t('services.items.healthInsurance.description'),
      image: '/assets/category-2.png',
      features: [
        t('servicesPage.health.features.medical'),
        t('servicesPage.health.features.prescription'),
        t('servicesPage.health.features.preventive'),
        t('servicesPage.health.features.emergency'),
        t('servicesPage.health.features.specialist'),
        t('servicesPage.health.features.mental')
      ],
      benefits: [
        t('servicesPage.health.benefits.network'),
        t('servicesPage.health.benefits.preventiveCost'),
        t('servicesPage.health.benefits.flexible'),
        t('servicesPage.health.benefits.submission')
      ]
    },
    {
      id: 'life',
      title: t('services.items.lifeInsurance.title'),
      description: t('services.items.lifeInsurance.description'),
      image: '/assets/category-3.png',
      features: [
        'Term Life Insurance',
        'Whole Life Insurance',
        'Universal Life Insurance',
        'Investment Options',
        'Living Benefits',
        'Flexible Payment Plans'
      ],
      benefits: [
        'Financial security for loved ones',
        'Tax-advantaged savings',
        'Flexible coverage amounts',
        'No medical exam options available'
      ]
    },
    {
      id: 'business',
      title: 'Business Insurance',
      description: 'Comprehensive business protection including liability, property, and workers\' compensation.',
      image: '/assets/category-4.png',
      features: [
        'General Liability Insurance',
        'Property Coverage',
        'Workers\' Compensation',
        'Cyber Liability Protection',
        'Professional Indemnity',
        'Business Interruption'
      ],
      benefits: [
        'Tailored coverage for your industry',
        'Risk management expertise',
        'Competitive business rates',
        'Dedicated business specialists'
      ]
    },
    {
      id: 'property',
      title: 'Property Insurance',
      description: 'Protect your home and personal belongings with our comprehensive property insurance solutions.',
      image: '/assets/category-5.png',
      features: [
        'Homeowners Insurance',
        'Renters Insurance',
        'Condo Coverage',
        'Personal Property Protection',
        'Liability Coverage',
        'Additional Living Expenses'
      ],
      benefits: [
        'Replacement cost coverage',
        'Multiple discount opportunities',
        'Personal belongings protection',
        'Temporary housing assistance'
      ]
    },
    {
      id: 'financial',
      title: 'Financial Planning',
      description: 'Professional financial planning and investment advisory services for your future.',
      image: '/assets/category.png',
      features: [
        'Retirement Planning',
        'Investment Advisory',
        'Tax Planning Strategies',
        'Estate Planning',
        'Education Funding',
        'Risk Assessment'
      ],
      benefits: [
        'Certified financial planners',
        'Personalized strategies',
        'Regular portfolio reviews',
        'Retirement readiness analysis'
      ]
    }
  ]

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-title">{t('servicesPage.title')}</h1>
            <p className="page-subtitle">
              {t('servicesPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="services-overview">
            <div className="overview-content">
              <h2 className="section-title">{t('servicesPage.whyChooseUs.title')}</h2>
              <p className="section-description">
                {t('servicesPage.whyChooseUs.description')}
              </p>
              
              <div className="overview-highlights">
                <div className="highlight">
                  <img src="/assets/strengths-1.svg" alt="Expert Advice" />
                  <span>{t('servicesPage.highlights.expertAdvice')}</span>
                </div>
                <div className="highlight">
                  <img src="/assets/strengths-2.svg" alt="Competitive Rates" />
                  <span>{t('servicesPage.highlights.competitiveRates')}</span>
                </div>
                <div className="highlight">
                  <img src="/assets/strengths-3.svg" alt="24/7 Support" />
                  <span>{t('servicesPage.highlights.support')}</span>
                </div>
              </div>
            </div>
            <div className="overview-image">
              <img src="/assets/contacts.png" alt="Our Services" />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section bg-light">
        <div className="container">
          <div className="services-detailed">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`service-detailed ${index % 2 === 1 ? 'reverse' : ''}`}>
                <div className="service-content">
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-features">
                    <h3 className="features-title">{t('servicesPage.featuresTitle')}</h3>
                    <ul className="features-list">
                      {service.features.map((feature, i) => (
                        <li key={i} className="feature-item">
                          <img src="/assets/strengths-4.svg" alt="" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-benefits">
                    <h3 className="benefits-title">{t('servicesPage.benefitsTitle')}</h3>
                    <ul className="benefits-list">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="benefit-item">
                          <img src="/assets/strengths-5.svg" alt="" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-actions">
                    <Link to="/contact" className="btn btn-primary">
                      {t('common.getQuote')}
                    </Link>
                    <Link to="/contact" className="btn btn-secondary">
                      {t('common.learnMore')}
                    </Link>
                  </div>
                </div>

                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
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
              <h2 className="cta-title">Ready to Get Protected?</h2>
              <p className="cta-description">
                Contact us today for a free consultation and personalized quote. 
                Our insurance experts are here to help you find the perfect coverage.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Get Free Quote
                </Link>
                <a href="tel:+1234567890" className="cta-phone">
                  <img src="/assets/phone.svg" alt="Phone" />
                  <span>Call: +1 (234) 567-890</span>
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