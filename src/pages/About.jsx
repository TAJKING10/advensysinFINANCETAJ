import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './About.css'

const About = () => {
  const { t } = useLanguage()
  
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-title">{t('aboutPage.title')}</h1>
            <p className="page-subtitle">
              {t('aboutPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">{t('aboutPage.ourStory.title')}</h2>
              <p className="story-paragraph">
                {t('aboutPage.ourStory.paragraph1')}
              </p>
              <p className="story-paragraph">
                {t('aboutPage.ourStory.paragraph2')}
              </p>
              <p className="story-paragraph">
                {t('aboutPage.ourStory.paragraph3')}
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
              <h3 className="mvv-title">{t('about.mission.title')}</h3>
              <p className="mvv-description">
                {t('about.mission.description')}
              </p>
            </div>

            <div className="mvv-card">
              <div className="mvv-icon">
                <img src="/assets/strengths-2.svg" alt="Vision" />
              </div>
              <h3 className="mvv-title">{t('about.vision.title')}</h3>
              <p className="mvv-description">
                {t('about.vision.description')}
              </p>
            </div>

            <div className="mvv-card">
              <div className="mvv-icon">
                <img src="/assets/strengths-3.svg" alt="Values" />
              </div>
              <h3 className="mvv-title">{t('about.values.title')}</h3>
              <p className="mvv-description">
                {t('aboutPage.ourValues.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('aboutPage.team.title')}</h2>
            <p className="section-subtitle">
              {t('aboutPage.team.subtitle')}
            </p>
          </div>

          <div className="team-grid">
            <div className="team-member">
              <div className="team-photo">
                <img src="/assets/hero-1.png" alt="John Smith" />
              </div>
              <div className="team-info">
                <h3 className="team-name">{t('aboutPage.team.ceo.name')}</h3>
                <p className="team-position">{t('aboutPage.team.ceo.position')}</p>
                <p className="team-bio">
                  {t('aboutPage.team.ceo.bio')}
                </p>
              </div>
            </div>

            <div className="team-member">
              <div className="team-photo">
                <img src="/assets/hero-2.png" alt="Sarah Johnson" />
              </div>
              <div className="team-info">
                <h3 className="team-name">{t('aboutPage.team.director.name')}</h3>
                <p className="team-position">{t('aboutPage.team.director.position')}</p>
                <p className="team-bio">
                  {t('aboutPage.team.director.bio')}
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
              <h2 className="section-title">{t('aboutPage.licenses.title')}</h2>
              <p className="section-description">
                {t('aboutPage.licenses.description')}
              </p>
              
              <div className="licenses-list">
                <div className="license-item">
                  <img src="/assets/strengths-4.svg" alt="State Licensed" />
                  <span>{t('aboutPage.licenses.items.stateLicensed')}</span>
                </div>
                <div className="license-item">
                  <img src="/assets/strengths-5.svg" alt="Certified" />
                  <span>{t('aboutPage.licenses.items.certified')}</span>
                </div>
                <div className="license-item">
                  <img src="/assets/strengths-6.svg" alt="Bonded" />
                  <span>{t('aboutPage.licenses.items.bonded')}</span>
                </div>
                <div className="license-item">
                  <img src="/assets/strengths-7.svg" alt="Accredited" />
                  <span>{t('aboutPage.licenses.items.accredited')}</span>
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