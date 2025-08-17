import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { useLocation } from '../../contexts/LocationContext'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()
  const { currentLocationData } = useLocation()

  const quickLinks = [
    { path: '/', label: t('footer.quickLinks.home') },
    { path: '/about', label: t('footer.quickLinks.about') },
    { path: '/services', label: t('footer.quickLinks.services') },
    { path: '/news', label: t('footer.quickLinks.news') },
    { path: '/contact', label: t('footer.quickLinks.contact') }
  ]

  const services = [
    t('footer.services.auto'),
    t('footer.services.health'),
    t('footer.services.life'),
    t('footer.services.business'),
    t('footer.services.home')
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
                <a href="https://www.linkedin.com/company/advensys-international-trading/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <img src="/assets/linkedin.png" alt="LinkedIn" onError={(e) => {e.target.style.display = 'none'}} />
                </a>
                <a href="https://www.linkedin.com/company/advensys-international-trading/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <img src="/assets/facebook.png" alt="Facebook" onError={(e) => {e.target.style.display = 'none'}} />
                </a>
                <a href="https://wa.me/46725298126?text=Hello%20Advensys%20%E2%80%94%20I%E2%80%99d%20like%20a%20quote." target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                  <img src="/assets/whatsapp.png" alt="WhatsApp" onError={(e) => {e.target.style.display = 'none'}} />
                </a>
                <a href="https://www.linkedin.com/company/advensys-international-trading/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
                  <img src="/assets/tiktok.png" alt="TikTok" onError={(e) => {e.target.style.display = 'none'}} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-title">{t('footer.quickLinks.title')}</h3>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
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
                    <Link to="/services" className="footer-link">
                      {service}
                    </Link>
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
                    <p>{currentLocationData?.email}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <img src="/assets/site.svg" alt="Website" className="contact-icon" />
                  <div>
                    <p>www.advensys-in-finance.com</p>
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
              <a href="#" className="footer-bottom-link">{t('footer.quickLinks.privacy')}</a>
              <span className="footer-separator">|</span>
              <a href="#" className="footer-bottom-link">{t('footer.quickLinks.terms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer