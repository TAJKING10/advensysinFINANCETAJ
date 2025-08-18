import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { useLocation } from '../../contexts/LocationContext'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()
  const { currentLocationData } = useLocation()
  const navigate = useNavigate()

  const handleQuickLinkClick = (path) => {
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleServiceClick = (service) => {
    const serviceMap = {
      'Auto Insurance': 'auto',
      'Health Insurance': 'health', 
      'Life Insurance': 'life',
      'Business Insurance': 'business',
      'Property Insurance': 'property',
      'Financial Planning': 'financial'
    }
    const serviceId = serviceMap[service]
    navigate('/services')
    
    // Scroll to specific service section after navigation
    setTimeout(() => {
      const element = document.getElementById(serviceId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const handleLegalClick = () => {
    navigate('/legal')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { path: '/', label: t('footer.quickLinks.home') },
    { path: '/about', label: t('footer.quickLinks.about') },
    { path: '/services', label: t('footer.quickLinks.services') },
    { path: '/news', label: t('footer.quickLinks.news') },
    { path: '/contact', label: t('footer.quickLinks.contact') }
  ]

  const services = [
    'Auto Insurance',
    'Health Insurance',
    'Life Insurance',
    'Business Insurance',
    'Property Insurance',
    'Financial Planning'
  ]

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <Link to="/" className="footer-logo">
                <img src="/assets/footer_logo.svg" alt="Advensys Insurance Finance" />
              </Link>
              <p className="footer-description">
                {t('footer.description')}
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/company/advensys-insurance-finance/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <img src="/assets/linkedin.png" alt="LinkedIn" onError={(e) => {e.target.style.display = 'none'}} />
                </a>
                <a href="https://www.facebook.com/share/1AwuTkaKbP/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <img src="/assets/facebook.png" alt="Facebook" onError={(e) => {e.target.style.display = 'none'}} />
                </a>
                <a href="https://wa.me/352661112260?text=Hello%20Advensys%20%E2%80%94%20I%E2%80%99d%20like%20a%20quote." target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                  <img src="/assets/whatsapp.png" alt="WhatsApp" onError={(e) => {e.target.style.display = 'none'}} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-title">{t('footer.quickLinks.title')}</h3>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <button 
                      onClick={() => handleQuickLinkClick(link.path)} 
                      className="footer-link"
                      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', width: '100%' }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3 className="footer-title">{t('footer.services.title')}</h3>
              <ul className="footer-links">
                {services.map((service) => (
                  <li key={service}>
                    <button 
                      onClick={() => handleServiceClick(service)} 
                      className="footer-link"
                      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', width: '100%' }}
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-title">{t('footer.contact.title')}</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <img src="/assets/geo.svg" alt="Location" className="contact-icon" />
                  <div>
                    <p>
                      <a 
                        href={currentLocationData?.mapsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'underline' }}
                      >
                        {currentLocationData?.address}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <img src="/assets/phone-3.svg" alt="Phone" className="contact-icon" />
                  <div>
                    <p>
                      <a 
                        href={`tel:${currentLocationData?.phone}`} 
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        {currentLocationData?.phone}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <img src="/assets/email-2.svg" alt="Email" className="contact-icon" />
                  <div>
                    <p>
                      <a href={`mailto:${currentLocationData?.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {currentLocationData?.email}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <img src="/assets/site.svg" alt="Website" className="contact-icon" />
                  <div>
                    <p>
                      <a href="https://advensys-in-finance.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                        advensys-in-finance.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              {t('footer.copyright')}
            </p>
            <div className="footer-bottom-links">
              <button 
                onClick={handleLegalClick} 
                className="footer-bottom-link"
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline' }}
              >
                Legal Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer