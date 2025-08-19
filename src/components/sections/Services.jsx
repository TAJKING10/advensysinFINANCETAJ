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
      title: 'Insurance Services',
      description: 'Comprehensive insurance solutions tailored to protect what matters most to you',
      image: '/assets/category-1.png',
      features: [
        'Life Insurance - Term, Whole, Universal options',
        'Health Insurance - Individual, family, group plans',
        'Property Insurance - Homeowners, renters, commercial',
        'Auto Insurance - Comprehensive vehicle protection'
      ]
    },
    {
      id: 'dedicated-life-insurance',
      title: 'Dedicated Life Insurance',
      description: 'Specialized life insurance products for comprehensive financial security',
      image: '/assets/category-2.png',
      features: [
        'Term Life Insurance - 10, 20, 30-year options',
        'Whole Life Insurance - Lifetime coverage with cash value',
        'Universal Life Insurance - Flexible premiums and benefits',
        'Group Life Insurance - Employer-sponsored plans'
      ]
    },
    {
      id: 'investment-adviser',
      title: 'Investment Adviser',
      description: 'Professional investment advisory services for wealth building and growth',
      image: '/assets/category-3.png',
      features: [
        'Portfolio Management - Customized investment strategies',
        'Investment Planning - Goal-based retirement planning',
        'Wealth Management - High net worth services',
        'Tax-Efficient Investing - Minimize tax impact'
      ]
    },
    {
      id: 'broker-in-bank',
      title: 'Broker in Bank',
      description: 'Banking intermediary services for optimal financial solutions',
      image: '/assets/category-4.png',
      features: [
        'Loan Brokerage - Mortgages, personal, business lending',
        'Banking Services - International solutions, treasury',
        'Credit Solutions - Lines of credit, asset-based lending',
        'Trade Finance - Letters of credit, factoring'
      ]
    },
    {
      id: 'private-pension-plan',
      title: 'Private Pension Plan',
      description: 'Luxembourg pension plans with tax advantages and regulatory security',
      image: '/assets/category-5.png',
      features: [
        'SEPCAV Plans - Maximum investment flexibility',
        'Luxembourg Life Insurance Pension - Combined benefits',
        'Corporate Pension Schemes - Employer-sponsored plans',
        'International Pension Planning - Cross-border solutions'
      ]
    }
  ]

  return (
    <section className="services-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="section-title">Our Main Services</h2>
          <p className="section-subtitle">Professional financial services designed to meet your specific needs</p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <button onClick={() => { navigate(`/services?service=${service.id}`); }} className="service-link" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    Learn More
                    <img src="/assets/arrow.svg" alt="" />
                  </button>
                </div>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, index) => {
                    const [title, description] = feature.split(' - ');
                    return (
                      <li key={index} className="service-feature">
                        <div className="feature-icon"></div>
                        <div className="feature-text">
                          <span className="feature-title">{title}</span>
                          {description && <span className="feature-description"> — {description}</span>}
                        </div>
                      </li>
                    );
                  })}
                </ul>
                
                <div className="service-actions">
                  <button onClick={() => { navigate(`/services?service=${service.id}`); }} className="btn btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                    Get Quote
                  </button>
                  <button onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="service-contact" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', textDecoration: 'underline' }}>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="services-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Get Started?</h3>
            <p className="cta-description">Contact us today to discuss your financial needs and find the perfect solution for you.</p>
            <div className="cta-actions">
              <button onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn btn-primary btn-lg" style={{ border: 'none', cursor: 'pointer' }}>
                Contact Us Today
              </button>
              <a href={`tel:${currentLocationData?.phone}`} className="cta-phone">
                <img src="/assets/phone.svg" alt="Phone" />
                <span>Call: {currentLocationData?.phone}</span>
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