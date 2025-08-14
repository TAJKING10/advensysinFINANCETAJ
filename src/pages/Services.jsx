import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 'auto',
      title: 'Auto Insurance',
      description: 'Comprehensive vehicle protection with competitive rates and excellent customer service.',
      image: '/assets/category-1.png',
      features: [
        'Collision and Comprehensive Coverage',
        'Liability Protection',
        '24/7 Claims Support',
        'Roadside Assistance',
        'Rental Car Coverage',
        'Glass and Windshield Protection'
      ],
      benefits: [
        'Competitive rates from top insurers',
        'Multi-car discounts available',
        'Safe driver rewards',
        'Fast claim processing'
      ]
    },
    {
      id: 'health',
      title: 'Health Insurance',
      description: 'Protect your health and finances with our comprehensive medical insurance plans.',
      image: '/assets/category-2.png',
      features: [
        'Medical Coverage',
        'Prescription Drug Benefits',
        'Preventive Care Services',
        'Emergency Services',
        'Specialist Consultations',
        'Mental Health Support'
      ],
      benefits: [
        'Network of trusted healthcare providers',
        'Preventive care at no extra cost',
        'Flexible plan options',
        'Easy claim submission'
      ]
    },
    {
      id: 'life',
      title: 'Life Insurance',
      description: 'Secure your family\'s financial future with our comprehensive life insurance policies.',
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
            <h1 className="page-title">Our Insurance Services</h1>
            <p className="page-subtitle">
              Comprehensive insurance solutions tailored to protect what matters most to you
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="services-overview">
            <div className="overview-content">
              <h2 className="section-title">Why Choose Our Services?</h2>
              <p className="section-description">
                With over 15 years of experience, we provide personalized insurance solutions 
                that offer comprehensive protection at competitive rates. Our expert team works 
                with leading insurers to find the perfect coverage for your unique needs.
              </p>
              
              <div className="overview-highlights">
                <div className="highlight">
                  <img src="/assets/strengths-1.svg" alt="Expert Advice" />
                  <span>Expert Advice</span>
                </div>
                <div className="highlight">
                  <img src="/assets/strengths-2.svg" alt="Competitive Rates" />
                  <span>Competitive Rates</span>
                </div>
                <div className="highlight">
                  <img src="/assets/strengths-3.svg" alt="24/7 Support" />
                  <span>24/7 Support</span>
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
                    <h3 className="features-title">Coverage Features:</h3>
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
                    <h3 className="benefits-title">Key Benefits:</h3>
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
                      Get Quote
                    </Link>
                    <Link to="/contact" className="btn btn-secondary">
                      Learn More
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