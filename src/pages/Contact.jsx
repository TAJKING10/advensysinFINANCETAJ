import React from 'react'
import ContactSection from '../components/sections/Contact'
import { useLanguage } from '../contexts/LanguageContext'
import './Contact.css'

const Contact = () => {
  const { t } = useLanguage()
  
  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-title">{t('contactPage.title')}</h1>
            <p className="page-subtitle">
              {t('contactPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Office Hours */}
      <section className="section bg-light">
        <div className="container">
          <div className="office-hours">
            <div className="hours-content">
              <h2 className="section-title">{t('contactPage.officeHours.title')}</h2>
              <div className="hours-grid">
                <div className="hours-item">
                  <span className="day">{t('contactPage.officeHours.weekdays')}</span>
                  <span className="time">{t('contactPage.officeHours.weekdaysTime')}</span>
                </div>
                <div className="hours-item">
                  <span className="day">{t('contactPage.officeHours.saturday')}</span>
                  <span className="time">{t('contactPage.officeHours.saturdayTime')}</span>
                </div>
                <div className="hours-item">
                  <span className="day">{t('contactPage.officeHours.sunday')}</span>
                  <span className="time">{t('contactPage.officeHours.closed')}</span>
                </div>
                <div className="hours-item emergency">
                  <span className="day">{t('contactPage.officeHours.emergency')}</span>
                  <span className="time">{t('contactPage.officeHours.available247')}</span>
                </div>
              </div>
            </div>
            <div className="hours-image">
              <img src="/assets/contacts.png" alt="Office Hours" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact