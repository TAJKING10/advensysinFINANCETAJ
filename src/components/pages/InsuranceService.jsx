import React from 'react'
import { Link } from 'react-router-dom'
import './ServicePages.css'

const InsuranceService = () => {
  return (
    <div className="service-page">
      <div className="container">
        {/* Back Navigation */}
        <div className="back-navigation">
          <Link to="/services" className="back-link">
            ← Back to Services
          </Link>
        </div>

        {/* Page Header */}
        <header className="service-header">
          <h1>Insurance Services</h1>
          <p className="service-intro">
            Comprehensive insurance solutions tailored to protect what matters most to you
          </p>
        </header>

        {/* Main Content */}
        <article className="service-content">
          <section className="service-overview">
            <h2>Complete Insurance Protection</h2>
            <p>
              At Advensys Insurance Finance, we understand that insurance is about more than just policies—it's about 
              peace of mind. Our comprehensive insurance services are designed to protect you, your family, and your 
              assets from life's unexpected challenges.
            </p>
          </section>

          <section className="service-details">
            <h2>Our Insurance Solutions</h2>
            
            <div className="detail-grid">
              <div className="detail-item">
                <h3>Life Insurance</h3>
                <ul>
                  <li>Term life insurance for temporary coverage needs</li>
                  <li>Whole life insurance for permanent protection</li>
                  <li>Universal life insurance with flexible premiums</li>
                  <li>Variable life insurance with investment options</li>
                  <li>Group life insurance for businesses</li>
                </ul>
              </div>

              <div className="detail-item">
                <h3>Health Insurance</h3>
                <ul>
                  <li>Individual and family health plans</li>
                  <li>Employer-sponsored group health insurance</li>
                  <li>Supplemental health coverage</li>
                  <li>Dental and vision insurance</li>
                  <li>International health coverage</li>
                </ul>
              </div>

              <div className="detail-item">
                <h3>Property Insurance</h3>
                <ul>
                  <li>Homeowners insurance protection</li>
                  <li>Renters insurance coverage</li>
                  <li>Condominium insurance</li>
                  <li>Personal property protection</li>
                  <li>Liability coverage for property owners</li>
                </ul>
              </div>

              <div className="detail-item">
                <h3>Business Insurance</h3>
                <ul>
                  <li>General liability insurance</li>
                  <li>Professional liability coverage</li>
                  <li>Commercial property insurance</li>
                  <li>Workers' compensation</li>
                  <li>Cyber liability protection</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="service-benefits">
            <h2>Why Choose Our Insurance Services</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Expert Guidance</h3>
                <p>Our experienced insurance professionals provide personalized advice to help you choose the right coverage for your unique situation.</p>
              </div>
              <div className="benefit-card">
                <h3>Competitive Rates</h3>
                <p>We work with multiple insurance carriers to find you the best coverage at the most competitive rates available.</p>
              </div>
              <div className="benefit-card">
                <h3>Claims Support</h3>
                <p>When you need to file a claim, our team is here to guide you through the process and advocate for your interests.</p>
              </div>
              <div className="benefit-card">
                <h3>Regular Reviews</h3>
                <p>We regularly review your coverage to ensure it continues to meet your changing needs and life circumstances.</p>
              </div>
            </div>
          </section>

          <section className="service-process">
            <h2>Our Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Assessment</h3>
                <p>We evaluate your current situation, risks, and insurance needs through a comprehensive consultation.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Recommendation</h3>
                <p>Based on our assessment, we recommend insurance solutions that provide optimal protection at competitive rates.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Implementation</h3>
                <p>We help you implement your insurance plan, handling all paperwork and ensuring smooth policy activation.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Ongoing Support</h3>
                <p>We provide continuous support, regular reviews, and assistance with claims throughout your policy term.</p>
              </div>
            </div>
          </section>

          <section className="service-cta">
            <h2>Ready to Protect What Matters Most?</h2>
            <p>
              Don't wait until it's too late. Contact us today to discuss your insurance needs and get a personalized quote.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Apply Now
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Ask a Question
              </Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}

export default InsuranceService