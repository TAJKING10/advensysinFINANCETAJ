import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  const achievements = [
    {
      icon: '/assets/strengths-1.svg',
      number: '15+',
      title: 'Years Experience',
      description: 'Serving clients with excellence'
    },
    {
      icon: '/assets/strengths-2.svg',
      number: '10K+',
      title: 'Happy Clients',
      description: 'Satisfied customers nationwide'
    },
    {
      icon: '/assets/strengths-3.svg',
      number: '50+',
      title: 'Insurance Partners',
      description: 'Top-rated insurance companies'
    },
    {
      icon: '/assets/strengths-4.svg',
      number: '24/7',
      title: 'Customer Support',
      description: 'Always here when you need us'
    }
  ]

  const teamValues = [
    {
      icon: '/assets/strengths-5.svg',
      title: 'Integrity',
      description: 'We operate with honesty and transparency in all our dealings.'
    },
    {
      icon: '/assets/strengths-6.svg',
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do.'
    },
    {
      icon: '/assets/strengths-7.svg',
      title: 'Customer Focus',
      description: 'Your needs and satisfaction are our top priority.'
    },
    {
      icon: '/assets/strengths-8.svg',
      title: 'Innovation',
      description: 'We embrace new technologies to serve you better.'
    }
  ]

  return (
    <section className="about-section section">
      <div className="container">
        {/* Main About Content */}
        <div className="about-main">
          <div className="about-content">
            <div className="section-badge">About Advensys</div>
            <h2 className="section-title">
              Your Trusted Partner in 
              <span className="text-primary"> Insurance & Finance</span>
            </h2>
            <p className="section-description">
              With over 15 years of experience in the insurance industry, Advensys Insurance Finance 
              has been helping individuals, families, and businesses protect what matters most to them. 
              Our commitment to excellence and personalized service has made us a trusted name in 
              insurance and financial solutions.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <img src="/assets/strengths-9.svg" alt="Licensed" />
                <div>
                  <h4>Fully Licensed & Certified</h4>
                  <p>All our agents are certified professionals</p>
                </div>
              </div>
              <div className="highlight-item">
                <img src="/assets/strengths-10.svg" alt="Award" />
                <div>
                  <h4>Award-Winning Service</h4>
                  <p>Recognized for outstanding customer service</p>
                </div>
              </div>
            </div>

            <div className="about-actions">
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>

          <div className="about-images">
            <div className="image-grid">
              <img src="/assets/about-1.png" alt="Our Team" className="about-img-1" />
              <img src="/assets/about-2.png" alt="Office" className="about-img-2" />
              <img src="/assets/about-3.png" alt="Meeting" className="about-img-3" />
            </div>
            <div className="experience-badge">
              <span className="experience-number">15+</span>
              <span className="experience-text">Years of Excellence</span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="achievements">
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">
                  <img src={achievement.icon} alt={achievement.title} />
                </div>
                <div className="achievement-content">
                  <span className="achievement-number">{achievement.number}</span>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="values-section">
          <div className="values-header text-center">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide us in serving our clients with excellence
            </p>
          </div>

          <div className="values-grid">
            {teamValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <img src={value.icon} alt={value.title} />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-choose-us">
          <div className="why-content">
            <h2 className="section-title">Why Choose Advensys?</h2>
            <div className="why-reasons">
              <div className="reason">
                <img src="/assets/strengths-11.svg" alt="Expertise" />
                <div>
                  <h4>Expert Knowledge</h4>
                  <p>Our certified professionals have deep industry expertise to guide you to the best solutions.</p>
                </div>
              </div>
              <div className="reason">
                <img src="/assets/strengths-12.svg" alt="Personalized" />
                <div>
                  <h4>Personalized Service</h4>
                  <p>We take time to understand your unique needs and provide tailored insurance solutions.</p>
                </div>
              </div>
              <div className="reason">
                <img src="/assets/strengths-13.svg" alt="Competitive" />
                <div>
                  <h4>Competitive Rates</h4>
                  <p>We work with top insurers to find you the best coverage at the most competitive prices.</p>
                </div>
              </div>
              <div className="reason">
                <img src="/assets/strengths-14.svg" alt="Support" />
                <div>
                  <h4>Ongoing Support</h4>
                  <p>Our relationship doesn't end at the sale. We provide ongoing support for all your needs.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="why-image">
            <img src="/assets/about.png" alt="Why Choose Us" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About