import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import './ServicePages.css'

const InsuranceService = () => {
  const { t } = useLanguage()
  return (
    <div className="service-page">
      <div className="container">
        {/* Back Navigation */}
        <div className="back-navigation">
          <Link to="/services" className="back-link">
            ← {t('services.backToServices')}
          </Link>
        </div>

        {/* Page Header */}
        <header className="service-header">
          <h1>{t('services.mainServices.insurance.title')}</h1>
          <p className="service-intro">
            {t('services.mainServices.insurance.overview')}
          </p>
        </header>

        {/* Main Content */}
        <article className="service-content">
          <section className="service-overview">
            <h2>{t('services.completeProtection')}</h2>
            <p>
              {t('services.insuranceDescription')}
            </p>
          </section>

          <section className="service-details">
            <h2>{t('services.ourInsuranceSolutions')}</h2>
            
            <div className="detail-grid">
              <div className="detail-item">
                <h3>{t('services.insuranceTypes.lifeInsurance.title')}</h3>
                <ul>
                  <li>{t('services.insuranceTypes.lifeInsurance.term')}</li>
                  <li>{t('services.insuranceTypes.lifeInsurance.whole')}</li>
                  <li>{t('services.insuranceTypes.lifeInsurance.universal')}</li>
                  <li>{t('services.insuranceTypes.lifeInsurance.variable')}</li>
                  <li>{t('services.insuranceTypes.lifeInsurance.group')}</li>
                </ul>
              </div>

              <div className="detail-item">
                <h3>{t('services.insuranceTypes.healthInsurance.title')}</h3>
                <ul>
                  <li>{t('services.insuranceTypes.healthInsurance.individual')}</li>
                  <li>{t('services.insuranceTypes.healthInsurance.employer')}</li>
                  <li>{t('services.insuranceTypes.healthInsurance.supplemental')}</li>
                  <li>{t('services.insuranceTypes.healthInsurance.dental')}</li>
                  <li>{t('services.insuranceTypes.healthInsurance.international')}</li>
                </ul>
              </div>

              <div className="detail-item">
                <h3>{t('services.insuranceTypes.propertyInsurance.title')}</h3>
                <ul>
                  <li>{t('services.insuranceTypes.propertyInsurance.homeowners')}</li>
                  <li>{t('services.insuranceTypes.propertyInsurance.renters')}</li>
                  <li>{t('services.insuranceTypes.propertyInsurance.condominium')}</li>
                  <li>{t('services.insuranceTypes.propertyInsurance.personal')}</li>
                  <li>{t('services.insuranceTypes.propertyInsurance.liability')}</li>
                </ul>
              </div>

              <div className="detail-item">
                <h3>{t('services.insuranceTypes.businessInsurance.title')}</h3>
                <ul>
                  <li>{t('services.insuranceTypes.businessInsurance.general')}</li>
                  <li>{t('services.insuranceTypes.businessInsurance.professional')}</li>
                  <li>{t('services.insuranceTypes.businessInsurance.commercial')}</li>
                  <li>{t('services.insuranceTypes.businessInsurance.workers')}</li>
                  <li>{t('services.insuranceTypes.businessInsurance.cyber')}</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="service-benefits">
            <h2>{t('services.whyChooseInsuranceServices')}</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>{t('services.benefits.expertGuidance.title')}</h3>
                <p>{t('services.benefits.expertGuidance.description')}</p>
              </div>
              <div className="benefit-card">
                <h3>{t('services.benefits.competitiveRates.title')}</h3>
                <p>{t('services.benefits.competitiveRates.description')}</p>
              </div>
              <div className="benefit-card">
                <h3>{t('services.benefits.claimsSupport.title')}</h3>
                <p>{t('services.benefits.claimsSupport.description')}</p>
              </div>
              <div className="benefit-card">
                <h3>{t('services.benefits.regularReviews.title')}</h3>
                <p>{t('services.benefits.regularReviews.description')}</p>
              </div>
            </div>
          </section>

          <section className="service-process">
            <h2>{t('services.ourProcess')}</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>{t('services.process.assessment.title')}</h3>
                <p>{t('services.process.assessment.description')}</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>{t('services.process.recommendation.title')}</h3>
                <p>{t('services.process.recommendation.description')}</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>{t('services.process.implementation.title')}</h3>
                <p>{t('services.process.implementation.description')}</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>{t('services.process.ongoingSupport.title')}</h3>
                <p>{t('services.process.ongoingSupport.description')}</p>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <h2>{t('services.readyToProtect')}</h2>
            <p>{t('services.insuranceExpertsHelp')}</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">{t('services.applyNow')}</Link>
              <Link to="/contact" className="cta-button secondary">{t('services.askQuestion')}</Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}

export default InsuranceService