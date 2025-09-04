import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { useLocation } from '../../contexts/LocationContext'
import './Services.css'

const Services = () => {
  const { t } = useLanguage()
  const { currentLocationData } = useLocation()
  const navigate = useNavigate()


  const services = [
    {
      id: 'insurance',
      title: t('services.mainServices.insurance.title'),
      description: t('services.mainServices.insurance.shortDescription'),
      image: '/assets/category-1.png',
      features: t('services.mainServices.insurance.services')
    },
    {
      id: 'dedicated-life-insurance',
      title: t('services.mainServices.dedicatedLifeInsurance.title'),
      description: t('services.mainServices.dedicatedLifeInsurance.shortDescription'),
      image: '/assets/category-2.png',
      features: t('services.mainServices.dedicatedLifeInsurance.services')
    },
    {
      id: 'investment-adviser',
      title: t('services.mainServices.investmentAdviser.title'),
      description: t('services.mainServices.investmentAdviser.shortDescription'),
      image: '/assets/category-3.png',
      features: t('services.mainServices.investmentAdviser.services')
    },
    {
      id: 'broker-in-bank',
      title: t('services.mainServices.brokerInBank.title'),
      description: t('services.mainServices.brokerInBank.shortDescription'),
      image: '/assets/category-4.png',
      features: t('services.mainServices.brokerInBank.services')
    },
    {
      id: 'private-pension-plan',
      title: t('services.mainServices.privatePensionPlan.title'),
      description: t('services.mainServices.privatePensionPlan.shortDescription'),
      image: '/assets/category-5.png',
      features: t('services.mainServices.privatePensionPlan.services')
    }
  ]

  return (
    <section className="services-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="section-title">{t('services.mainServicesTitle')}</h2>
          <p className="section-subtitle">{t('services.mainServicesSubtitle')}</p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <button onClick={() => { navigate(`/services?service=${service.id}`); }} className="service-link" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {t('services.learnMore')}
                    <img src="/assets/arrow.svg" alt="" />
                  </button>
                </div>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {Array.isArray(service.features) ? service.features.map((feature, index) => (
                    <li key={index} className="service-feature">
                      <img src="/assets/strengths-1.svg" alt="" className="feature-icon" />
                      <span>{feature}</span>
                    </li>
                  )) : null}
                </ul>
                
                <div className="service-actions">
                  <button onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                    {t('services.getQuote')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="services-cta">
          <div className="cta-content">
            <h3 className="cta-title">{t('services.readyToStart')}</h3>
            <p className="cta-description">{t('services.contactToday')} to discuss your financial needs and find the perfect solution for you.</p>
            <div className="cta-actions">
              <button onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn btn-primary btn-lg" style={{ border: 'none', cursor: 'pointer' }}>
                {t('common.contactUs')} Today
              </button>
              <a href={`tel:${currentLocationData?.phone}`} className="cta-phone">
                <img src="/assets/phone.svg" alt="Phone" />
                <span>{t('services.cta.phone')} {currentLocationData?.phone}</span>
              </a>
            </div>
          </div>
          <div className="cta-image">
            <img src="/assets/contacts.png" alt="Contact Us" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services