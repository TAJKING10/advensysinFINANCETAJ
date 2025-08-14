import React from 'react'
import ContactSection from '../components/sections/Contact'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">
              Ready to protect what matters most? Get in touch with our insurance experts today
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
              <h2 className="section-title">Office Hours</h2>
              <div className="hours-grid">
                <div className="hours-item">
                  <span className="day">Monday - Friday</span>
                  <span className="time">8:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Saturday</span>
                  <span className="time">9:00 AM - 4:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday</span>
                  <span className="time">Closed</span>
                </div>
                <div className="hours-item emergency">
                  <span className="day">Emergency Claims</span>
                  <span className="time">24/7 Available</span>
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