import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './Contact.css'

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form data:', data)
      setSubmitMessage('Thank you! Your message has been sent successfully.')
      reset()
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
    }
    
    setIsSubmitting(false)
    
    // Clear message after 5 seconds
    setTimeout(() => setSubmitMessage(''), 5000)
  }

  const contactInfo = [
    {
      icon: '/assets/geo.svg',
      title: 'Our Locations',
      info: ['Paris: 66 Avenue des Champs Elysées, F-75008 Paris', 'Luxembourg: 34 Grand rue L-9710 Clervaux', 'Stockholm: c/o SERVANDO BOLAG AB, BOX 5814, 102 48 Stockholm']
    },
    {
      icon: '/assets/phone-2.svg',
      title: 'Phone Numbers',
      info: ['+33 6 98 21 44 46 (Paris)', '+352 661 11 22 60 (Luxembourg)', '+46 72 529 81 26 (Stockholm)']
    },
    {
      icon: '/assets/email-2.svg',
      title: 'Email Address',
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
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to protect what matters most? Contact us today for a free consultation
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <div className="form-header">
              <h3 className="form-title">Send Us a Message</h3>
              <p className="form-description">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    className={`form-input ${errors.firstName ? 'error' : ''}`}
                    {...register('firstName', { required: 'First name is required' })}
                  />
                  {errors.firstName && (
                    <span className="error-message">{errors.firstName.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    className={`form-input ${errors.lastName ? 'error' : ''}`}
                    {...register('lastName', { required: 'Last name is required' })}
                  />
                  {errors.lastName && (
                    <span className="error-message">{errors.lastName.message}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-input"
                    {...register('phone')}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service" className="form-label">Service Interest</label>
                <select id="service" className="form-input" {...register('service')}>
                  <option value="">Select a service...</option>
                  <option value="auto">Auto Insurance</option>
                  <option value="health">Health Insurance</option>
                  <option value="life">Life Insurance</option>
                  <option value="business">Business Insurance</option>
                  <option value="property">Property Insurance</option>
                  <option value="financial">Financial Planning</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  rows="5"
                  {...register('message', { required: 'Message is required' })}
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
                    Sending...
                  </>
                ) : (
                  'Send Message'
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
              <h3 className="contact-info-title">Contact Information</h3>
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
                <h4 className="contact-social-title">Follow Us</h4>
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