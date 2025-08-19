import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import './About.css'

const About = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  
  const achievements = [
    {
      icon: '/assets/strengths-1.svg',
      number: '18+',
      title: t('about.achievements.experience.title'),
      description: t('about.achievements.experience.description')
    },
    {
      icon: '/assets/strengths-2.svg',
      number: '10K+',
      title: t('about.achievements.clients.title'),
      description: t('about.achievements.clients.description')
    },
    {
      icon: '/assets/strengths-3.svg',
      number: '50+',
      title: t('about.achievements.partners.title'),
      description: t('about.achievements.partners.description')
    },
    {
      icon: '/assets/strengths-4.svg',
      number: '24/7',
      title: t('about.achievements.support.title'),
      description: t('about.achievements.support.description')
    }
  ]

  const teamValues = [
    {
      icon: '/assets/strengths-5.svg',
      title: t('about.values.integrity'),
      description: t('about.values.integrityDesc')
    },
    {
      icon: '/assets/strengths-6.svg',
      title: t('about.values.excellence'),
      description: t('about.values.excellenceDesc')
    },
    {
      icon: '/assets/strengths-7.svg',
      title: t('about.values.customerFocus'),
      description: t('about.values.customerFocusDesc')
    },
    {
      icon: '/assets/strengths-8.svg',
      title: t('about.values.innovation'),
      description: t('about.values.innovationDesc')
    }
  ]

  return (
    <section className="about-section section">
      <div className="container">
        {/* Main About Content */}
        <div className="about-main">
          <div className="about-content">
            <div className="section-badge">{t('about.title')}</div>
            <h2 className="section-title">
              {t('about.heroTitle')} 
              <span className="text-primary">{t('about.heroTitleHighlight')}</span>
            </h2>
            <p className="section-description">
              {t('about.heroDescription')}
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <img src="/assets/strengths-9.svg" alt="Licensed" />
                <div>
                  <h4>{t('about.highlights.licensed.title')}</h4>
                  <p>{t('about.highlights.licensed.description')}</p>
                </div>
              </div>
              <div className="highlight-item">
                <img src="/assets/strengths-10.svg" alt="Award" />
                <div>
                  <h4>{t('about.highlights.award.title')}</h4>
                  <p>{t('about.highlights.award.description')}</p>
                </div>
              </div>
            </div>

            <div className="about-actions">
              <button onClick={() => { navigate('/about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                {t('about.learnMoreBtn')}
              </button>
              <button onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn btn-secondary" style={{ border: 'none', cursor: 'pointer' }}>
                {t('common.contactUs')}
              </button>
            </div>
          </div>

          <div className="about-images">
            <div className="image-grid">
              <img src="/assets/about-1.png" alt="Our Team" className="about-img-1" />
              <img src="/assets/about-2.png" alt="Office" className="about-img-2" />
              <img src="/assets/about-3.png" alt="Meeting" className="about-img-3" />
            </div>
            <div className="experience-badge">
              <span className="experience-number">18+</span>
              <span className="experience-text">{t('about.experienceBadge')}</span>
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
            <h2 className="section-title">{t('about.values.title')}</h2>
            <p className="section-subtitle">
              {t('about.values.subtitle')}
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
            <h2 className="section-title">{t('about.whyChoose.title')}</h2>
            <div className="why-reasons">
              <div className="reason">
                <div className="reason-icon">
                  <span>🎯</span>
                </div>
                <div>
                  <h4>{t('about.whyChoose.expertise.title')}</h4>
                  <p>{t('about.whyChoose.expertise.description')}</p>
                </div>
              </div>
              <div className="reason">
                <div className="reason-icon">
                  <span>👤</span>
                </div>
                <div>
                  <h4>{t('about.whyChoose.personalized.title')}</h4>
                  <p>{t('about.whyChoose.personalized.description')}</p>
                </div>
              </div>
              <div className="reason">
                <div className="reason-icon">
                  <span>💰</span>
                </div>
                <div>
                  <h4>{t('about.whyChoose.competitive.title')}</h4>
                  <p>{t('about.whyChoose.competitive.description')}</p>
                </div>
              </div>
              <div className="reason">
                <div className="reason-icon">
                  <span>🛡️</span>
                </div>
                <div>
                  <h4>{t('about.whyChoose.support.title')}</h4>
                  <p>{t('about.whyChoose.support.description')}</p>
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