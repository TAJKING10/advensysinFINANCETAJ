import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLanguage } from '../../contexts/LanguageContext'
import { useLocation } from '../../contexts/LocationContext'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const { t } = useLanguage()
  const { currentLocationData } = useLocation()
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  // Initialize EmailJS
  React.useEffect(() => {
    try {
      emailjs.init('UIyCerW0Z_0KhzuE4')
      console.log('EmailJS initialized successfully')
    } catch (error) {
      console.error('EmailJS initialization failed:', error)
    }
  }, [])

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitMessage('')
    
    try {
      console.log('Submitting form with data:', data)
      
      // EmailJS configuration with your correct credentials
      const serviceId = 'service_5cdb6bg'
      const templateId = 'template_bwldyv1'
      
      // Prepare template parameters
      const templateParams = {
        to_name: 'Advensys Team',
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        phone: data.phone || 'Not provided',
        service: data.service || 'Not specified',
        message: data.message,
        reply_to: data.email
      }
      
      console.log('Sending email with params:', templateParams)
      
      // Send email using EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams)
      
      console.log('EmailJS Response:', response)
      
      setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.')
      reset()
    } catch (error) {
      console.error('EmailJS Error Details:', error)
      let errorMessage = 'Sorry, there was an error sending your message. Please try again.'
      
      if (error.text) {
        errorMessage += ` Error: ${error.text}`
      } else if (error.message) {
        errorMessage += ` Error: ${error.message}`
      }
      
      setSubmitMessage(errorMessage)
    }
    
    setIsSubmitting(false)
    
    // Clear message after 8 seconds
    setTimeout(() => setSubmitMessage(''), 8000)
  }

  // Map click handler removed as per requirements

  const contactInfo = [
    {
      icon: '/assets/geo.svg',
      title: t('contact.info.address'),
      info: [
        { text: 'Paris: 66 Avenue des Champs Elysées, F-75008 Paris', url: 'https://maps.google.com/maps?q=66+Avenue+des+Champs+Elysees,+F-75008+Paris,+France' },
        { text: 'Luxembourg: 34 Grand rue L-9710 Clervaux', url: 'https://maps.google.com/maps?q=34+Grand+Rue,+L-9710+Clervaux,+Luxembourg' },
        { text: 'Stockholm: c/o SERVANDO BOLAG AB, BOX 5814, 102 48 Stockholm', url: 'https://maps.google.com/maps?q=c/o+SERVANDO+BOLAG+AB,+BOX+5814,+102+48+Stockholm,+Sweden' }
      ]
    },
    {
      icon: '/assets/phone-2.svg',
      title: t('contact.info.phone'),
      info: [
        { text: '+33 6 98 21 44 46 (Paris)', url: 'tel:+33698214446', type: 'phone' },
        { text: '+352 661 11 22 60 (Luxembourg)', url: 'https://wa.me/352661112260?text=Hello%20Advensys%20%E2%80%94%20I%E2%80%99d%20like%20a%20quote.', type: 'whatsapp' },
        { text: '+46 72 529 81 26 (Stockholm)', url: 'tel:+46725298126', type: 'phone' }
      ]
    },
    {
      icon: '/assets/email-2.svg',
      title: t('contact.info.email'),
      info: [{ text: 'contact@advensys-in-finance.com', url: 'mailto:contact@advensys-in-finance.com', type: 'email' }]
    },
    {
      icon: '/assets/site.svg',
      title: 'Website',
      info: [{ text: 'advensys-in-finance.com', url: 'https://advensys-in-finance.com/' }]
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
                {t('contact.form.description')}
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
                  <option value="life">Life Insurance</option>
                  <option value="dedicatedLife">Dedicated Life Insurance</option>
                  <option value="privatePension">Private Pension Plan</option>
                  <option value="brokerInBank">Broker in Bank Services</option>
                  <option value="investmentAdviser">Investment Adviser</option>
                  <option value="financialPlanning">Financial Planning</option>
                  <option value="generalInsurance">General Insurance Services</option>
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

              <div className="form-group">
                <div className="robot-verification">
                  <label className="robot-checkbox">
                    <input
                      type="checkbox"
                      id="robotVerification"
                      {...register('robotVerification', { required: 'Please verify that you are not a robot' })}
                      className={errors.robotVerification ? 'error' : ''}
                    />
                    <span className="robot-text">I'm not a robot</span>
                  </label>
                  {errors.robotVerification && (
                    <span className="error-message">{errors.robotVerification.message}</span>
                  )}
                </div>
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
                {t('contact.info.description')}
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
                        <p key={i} className="contact-method-info">
                          {typeof info === 'object' && info.url ? (
                            <a 
                              href={info.url} 
                              target={info.type === 'whatsapp' ? '_blank' : '_self'}
                              rel={info.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                              style={{ color: 'inherit', textDecoration: 'underline' }}
                            >
                              {info.text}
                            </a>
                          ) : (
                            <span style={{ textDecoration: 'underline' }}>
                              {typeof info === 'object' ? info.text : info}
                            </span>
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <h4 className="contact-social-title">{t('contact.info.followUs')}</h4>
                <div className="social-links">
                  <a href="https://www.linkedin.com/company/advensys-insurance-finance/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                    <img src="/assets/linkedin.png" alt="LinkedIn" onError={(e) => {e.target.style.display = 'none'}} />
                  </a>
                  <a href="https://www.facebook.com/advensysinsurancefinance" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                    <img src="/assets/facebook.png" alt="Facebook" onError={(e) => {e.target.style.display = 'none'}} />
                  </a>
                  <a href="https://www.youtube.com/@advensysinsurancefinance" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                    <img src="/assets/youtube.png" alt="YouTube" onError={(e) => {e.target.style.display = 'none'}} />
                  </a>
                  <a href="https://wa.me/352661112260?text=Hello%20Advensys%20%E2%80%94%20I%E2%80%99d%20like%20a%20quote." target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                    <img src="/assets/whatsapp.png" alt="WhatsApp" onError={(e) => {e.target.style.display = 'none'}} />
                  </a>
                </div>
              </div>
            </div>

            {/* Map section removed as per requirements */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact