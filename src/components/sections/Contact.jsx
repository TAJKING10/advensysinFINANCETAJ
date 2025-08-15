import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLanguage } from '../../contexts/LanguageContext'
import './Contact.css'

const Contact = () => {
  const { t } = useLanguage()
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form data:', data)
      setSubmitMessage(t('contact.form.success'))
      reset()
    } catch (error) {
      setSubmitMessage(t('contact.form.error'))
    }
    
    setIsSubmitting(false)
    
    // Clear message after 5 seconds
    setTimeout(() => setSubmitMessage(''), 5000)
  }

  const contactInfo = [
    {
      icon: '/assets/geo.svg',
      title: t('contact.info.address'),
      info: ['Paris: 66 Avenue des Champs Elysées, F-75008 Paris', 'Luxembourg: 34 Grand rue L-9710 Clervaux', 'Stockholm: c/o SERVANDO BOLAG AB, BOX 5814, 102 48 Stockholm']
    },
    {
      icon: '/assets/phone-2.svg',
      title: t('contact.info.phone'),
      info: ['+33 6 98 21 44 46 (Paris)', '+352 661 11 22 60 (Luxembourg)', '+46 72 529 81 26 (Stockholm)']
    },
    {
      icon: '/assets/email-2.svg',
      title: t('contact.info.email'),
      info: ['contact@advensys-in-finance.com']
    },
    {
      icon: '/assets/site.svg',
      title: 'Website',
      info: ['www.advensys-in-finance.com']
    }
  ]

  return (
    <section className="contact-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">
            {t('contact.description')}
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <div className="form-header">
              <h3 className="form-title">{t('contact.form.title')}</h3>
              <p className="form-description">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">{t('contact.form.firstName')} *</label>
                  <input
                    type="text"
                    id="firstName"
                    className={`form-input ${errors.firstName ? 'error' : ''}`}
                    {...register('firstName', { required: t('contact.form.required') })}
                  />
                  {errors.firstName && (
                    <span className="error-message">{errors.firstName.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">{t('contact.form.lastName')} *</label>
                  <input
                    type="text"
                    id="lastName"
                    className={`form-input ${errors.lastName ? 'error' : ''}`}
                    {...register('lastName', { required: t('contact.form.required') })}
                  />
                  {errors.lastName && (
                    <span className="error-message">{errors.lastName.message}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">{t('contact.form.email')} *</label>
                  <input
                    type="email"
                    id="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    {...register('email', { 
                      required: t('contact.form.required'),
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: t('contact.form.invalidEmail')
                      }
                    })}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">{t('contact.form.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-input"
                    {...register('phone')}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service" className="form-label">{t('contact.form.service')}</label>
                <select id="service" className="form-input" {...register('service')}>
                  <option value="">{t('contact.form.selectService')}</option>
                  <option value="auto">{t('services.items.autoInsurance.title')}</option>
                  <option value="health">{t('services.items.healthInsurance.title')}</option>
                  <option value="life">{t('services.items.lifeInsurance.title')}</option>
                  <option value="business">{t('services.items.businessInsurance.title')}</option>
                  <option value="property">{t('services.items.propertyInsurance.title')}</option>
                  <option value="financial">{t('services.items.financialPlanning.title')}</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">{t('contact.form.message')} *</label>
                <textarea
                  id="message"
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  rows="5"
                  {...register('message', { required: t('contact.form.required') })}
                ></textarea>
                {errors.message && (
                  <span className="error-message">{errors.message.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    {t('common.loading')}
                  </>
                ) : (
                  t('contact.form.submit')
                )}
              </button>

              {submitMessage && (
                <div className={`submit-message ${submitMessage.includes('error') ? 'error' : 'success'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="contact-info-wrapper">
            {/* Contact Info */}
            <div className="contact-info">
              <h3 className="contact-info-title">{t('contact.info.title')}</h3>
              <p className="contact-info-description">
                Get in touch with us through any of these convenient methods.
              </p>

              <div className="contact-methods">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-method">
                    <div className="contact-method-icon">
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <div className="contact-method-content">
                      <h4 className="contact-method-title">{item.title}</h4>
                      {item.info.map((info, i) => (
                        <p key={i} className="contact-method-info">{info}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <h4 className="contact-social-title">{t('contact.info.followUs')}</h4>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <img src="/assets/Facebook.svg" alt="Facebook" />
                  </a>
                  <a href="#" className="social-link">
                    <img src="/assets/whatapp.svg" alt="WhatsApp" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="contact-map">
              <img src="/assets/map.png" alt="Our Location" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact