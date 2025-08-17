import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { useLocation } from '../../contexts/LocationContext'
import './Services.css'

const Services = () => {
  const { t } = useLanguage()
  const { currentLocationData } = useLocation()
  const navigate = useNavigate()

  const handleServiceClick = (serviceId) => {
    navigate('/services')
    
    // Scroll to specific service section after navigation
    setTimeout(() => {
      const element = document.getElementById(serviceId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const getServiceFeatures = (serviceType) => {
    const features = t(`services.items.${serviceType}.features`)
    return Array.isArray(features) ? features : []
  }

  const services = [
    {
      id: 1,
      type: 'autoInsurance',
      serviceId: 'auto',
      title: t('services.items.autoInsurance.title'),
      description: t('services.items.autoInsurance.description'),
      image: '/assets/category-1.png',
      link: '/services#auto'
    },
    {
      id: 2,
      type: 'healthInsurance',
      serviceId: 'health',
      title: t('services.items.healthInsurance.title'),
      description: t('services.items.healthInsurance.description'),
      image: '/assets/category-2.png',
      link: '/services#health'
    },
    {
      id: 3,
      type: 'lifeInsurance',
      serviceId: 'life',
      title: t('services.items.lifeInsurance.title'),
      description: t('services.items.lifeInsurance.description'),
      image: '/assets/category-3.png',
      link: '/services#life'
    },
    {
      id: 4,
      type: 'businessInsurance',
      serviceId: 'business',
      title: t('services.items.businessInsurance.title'),
      description: t('services.items.businessInsurance.description'),
      image: '/assets/category-4.png',
      link: '/services#business'
    },
    {
      id: 5,
      type: 'propertyInsurance',
      serviceId: 'property',
      title: t('services.items.propertyInsurance.title'),
      description: t('services.items.propertyInsurance.description'),
      image: '/assets/category-5.png',
      link: '/services#property'
    },
    {
      id: 6,
      type: 'financialPlanning',
      serviceId: 'financial',
      title: t('services.items.financialPlanning.title'),
      description: t('services.items.financialPlanning.description'),
      image: '/assets/category.png',
      link: '/services#financial'
    }
  ]

  return (
    <section className="services-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <button onClick={() => handleServiceClick(service.serviceId)} className="service-link" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {t('common.learnMore')}
                    <img src="/assets/arrow.svg" alt="" />
                  </button>
                </div>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {getServiceFeatures(service.type).map((feature, index) => (
                    <li key={index} className="service-feature">
                      <img src="/assets/strengths-1.svg" alt="" className="feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="service-actions">
                  <button onClick={() => handleServiceClick(service.serviceId)} className="btn btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                    {t('common.getQuote')}
                  </button>
                  <Link to="/contact" className="service-contact">
                    {t('common.contactUs')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="services-cta">
          <div className="cta-content">
            <h3 className="cta-title">{t('services.cta.title')}</h3>
            <p className="cta-description">{t('services.cta.description')}</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                {t('services.cta.button')}
              </Link>
              <a href={`tel:${currentLocationData?.phone}`} className="cta-phone">
                <img src="/assets/phone.svg" alt={t('header.phone')} />
                <span>{t('services.cta.phone')} {currentLocationData?.phone}</span>
              </a>
            </div>
          </div>
          <div className="cta-image">
            <img src="/assets/contacts.png" alt={t('common.contactUs')} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services