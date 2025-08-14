import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-title">About Advensys Insurance Finance</h1>
            <p className="page-subtitle">
              Your trusted partner in insurance and financial planning for over 15 years
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p className="story-paragraph">
                Founded in 2009, Advensys Insurance Finance began with a simple mission: to provide 
                comprehensive insurance solutions that truly protect our clients' most valuable assets. 
                What started as a small local agency has grown into a trusted partner for thousands 
                of individuals and businesses across the region.
              </p>
              <p className="story-paragraph">
                Our founders, with over 25 years of combined experience in the insurance industry, 
                recognized the need for an agency that would put client relationships first. They 
                established Advensys with the core belief that insurance should be personal, 
                accessible, and tailored to each client's unique circumstances.
              </p>
              <p className="story-paragraph">
                Today, we continue to uphold those same values while embracing modern technology 
                and innovative solutions to serve our clients better than ever before.
              </p>
            </div>
            <div className="story-image">
              <img src="/assets/about.png" alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section bg-light">
        <div className="container">
          <div className="mvv-grid">
            <div className="mvv-card">
              <div className="mvv-icon">
                <img src="/assets/strengths-1.svg" alt="Mission" />
              </div>
              <h3 className="mvv-title">Our Mission</h3>
              <p className="mvv-description">
                To provide exceptional insurance and financial services that protect our clients' 
                assets and secure their financial future through personalized solutions and 
                unwavering commitment to excellence.
              </p>
            </div>

            <div className="mvv-card">
              <div className="mvv-icon">
                <img src="/assets/strengths-2.svg" alt="Vision" />
              </div>
              <h3 className="mvv-title">Our Vision</h3>
              <p className="mvv-description">
                To be the most trusted insurance partner in our community, known for our integrity, 
                expertise, and dedication to helping clients navigate life's uncertainties with 
                confidence and peace of mind.
              </p>
            </div>

            <div className="mvv-card">
              <div className="mvv-icon">
                <img src="/assets/strengths-3.svg" alt="Values" />
              </div>
              <h3 className="mvv-title">Our Values</h3>
              <p className="mvv-description">
                Integrity, Excellence, Customer Focus, and Innovation guide everything we do. 
                We believe in honest communication, continuous improvement, and putting our 
                clients' needs at the center of every decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-subtitle">
              Meet the experienced professionals leading Advensys Insurance Finance
            </p>
          </div>

          <div className="team-grid">
            <div className="team-member">
              <div className="team-photo">
                <img src="/assets/hero-1.png" alt="John Smith" />
              </div>
              <div className="team-info">
                <h3 className="team-name">John Smith</h3>
                <p className="team-position">Chief Executive Officer</p>
                <p className="team-bio">
                  With over 20 years in the insurance industry, John leads our team with 
                  a passion for client service and business excellence.
                </p>
              </div>
            </div>

            <div className="team-member">
              <div className="team-photo">
                <img src="/assets/hero-2.png" alt="Sarah Johnson" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Sarah Johnson</h3>
                <p className="team-position">Director of Operations</p>
                <p className="team-bio">
                  Sarah oversees daily operations and ensures our clients receive the 
                  highest level of service and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses and Certifications */}
      <section className="section bg-light">
        <div className="container">
          <div className="licenses-content">
            <div className="licenses-text">
              <h2 className="section-title">Licenses & Certifications</h2>
              <p className="section-description">
                Advensys Insurance Finance maintains all required state licenses and industry 
                certifications to serve our clients with the highest professional standards.
              </p>
              
              <div className="licenses-list">
                <div className="license-item">
                  <img src="/assets/strengths-4.svg" alt="State Licensed" />
                  <span>State Licensed Insurance Agency</span>
                </div>
                <div className="license-item">
                  <img src="/assets/strengths-5.svg" alt="Certified" />
                  <span>Certified Insurance Counselors (CIC)</span>
                </div>
                <div className="license-item">
                  <img src="/assets/strengths-6.svg" alt="Bonded" />
                  <span>Fully Bonded and Insured</span>
                </div>
                <div className="license-item">
                  <img src="/assets/strengths-7.svg" alt="Accredited" />
                  <span>Better Business Bureau Accredited</span>
                </div>
              </div>
            </div>
            <div className="licenses-image">
              <img src="/assets/licenses-1.png" alt="Licenses and Certifications" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About