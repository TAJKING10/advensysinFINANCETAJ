import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import './Legal.css'

const Legal = () => {
  const { t } = useLanguage()
  
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1 className="legal-title">{t('legal.title')}</h1>
          
          <section className="legal-section">
            <h2>{t('legal.termsConditions')}</h2>
            <h3>{t('legal.privacyPolicy')}</h3>
            
            <h4>{t('legal.identification.title')}</h4>
            <div className="legal-info">
              <p><strong>{t('legal.identification.legalStatus')}:</strong> Advensys Insurance Finance SARL</p>
              <p><strong>{t('legal.identification.socialCapital')}:</strong> 20 000EUR</p>
              <p><strong>{t('legal.identification.address')}:</strong> 66 avenue des Champs Elysées, 75008 Paris</p>
              <p><strong>{t('legal.identification.phone')}:</strong> +33 6 98 21 44 46</p>
              <p><strong>{t('legal.identification.email')}:</strong> contact@advensys-in-finance.com – www.advensys-in-finance.com</p>
              <p><strong>SIRET:</strong> 89511129200010</p>
              <p><strong>APE:</strong> 6622Z</p>
              <p><strong>{t('legal.identification.vatNumber')}:</strong> FR50895111292</p>
              <p><strong>{t('legal.identification.registration')}:</strong> {t('legal.identification.registrationText')}</p>
              <ul>
                <li>{t('legal.identification.services.investment')}</li>
                <li>{t('legal.identification.services.insurance')}</li>
                <li>{t('legal.identification.services.banking')}</li>
              </ul>
              <p><strong>{t('legal.identification.civilLiability')}:</strong> {t('legal.identification.civilLiabilityText')}</p>
              <p><em>{t('legal.identification.disclaimer')}</em></p>
            </div>
          </section>

          <section className="legal-section">
            <h4>{t('legal.identification.contactInfo.title')}</h4>
            <div className="legal-info">
              <p><strong>{t('legal.identification.contactInfo.nameLabel')}:</strong> {t('legal.identification.contactInfo.name')}</p>
              <p><strong>{t('legal.identification.contactInfo.addressLabel')}:</strong> {t('legal.identification.contactInfo.address')}</p>
              <p><strong>{t('legal.identification.contactInfo.phoneLabel')}:</strong> {t('legal.identification.contactInfo.phone')}</p>
              <p><strong>{t('legal.identification.contactInfo.emailLabel')}:</strong> {t('legal.identification.contactInfo.email')}</p>
            </div>
          </section>

          <section className="legal-section">
            <h4>{t('legal.identification.property.title')}</h4>
            <div className="legal-info">
              <p>{t('legal.identification.property.trademark')}</p>
              <p>{t('legal.identification.property.website')}</p>
            </div>
          </section>

          <section className="legal-section">
            <h4>{t('legal.generalConditions.title')}</h4>
            <div className="legal-info">
              <p>{t('legal.generalConditions.information')}</p>
              <p>{t('legal.generalConditions.responsibility')}</p>
              <p>{t('legal.generalConditions.changes')}</p>
              <p>{t('legal.generalConditions.direction')}</p>
            </div>
          </section>

          <section className="legal-section">
            <h4>{t('legal.gdpr.title')}</h4>
            <div className="legal-info">
              <p>{t('legal.gdpr.rights')}</p>
              <p>{t('legal.gdpr.exercise')}</p>
            </div>
          </section>

          <section className="legal-section">
            <h4>{t('legal.designHost.title')}</h4>
            <div className="legal-info">
              <p><strong>{t('legal.designHost.design')}:</strong> Advensys Insurance Finance S.A.R.L. – 66 Avenue des Champs Elysées, F-75008 Paris – SIRET: 89511129200010</p>
              <p><strong>{t('legal.designHost.webDesign')}:</strong> Advensys Insurance Finance S.A.R.L. – 66 Avenue des Champs Elysées, F-75008 Paris – SIRET: 89511129200010</p>
              <p><strong>{t('legal.designHost.host')}:</strong> OVH SAS – 2 rue Kellermann – 59100 Roubaix – France – SIRET: 424 761 419 00045</p>
            </div>
          </section>

          <section className="legal-section">
            <h4>{t('legal.dataProtection.title')}</h4>
            <div className="legal-info">
              <p>{t('legal.dataProtection.commitment')}</p>
            </div>
          </section>

          <section className="legal-section">
            <h4>{t('legal.dataController.title')}</h4>
            <div className="legal-info">
              <p>{t('legal.dataController.definition')}</p>
              <p>{t('legal.dataController.processing')}</p>
            </div>
          </section>

          <section className="legal-section">
            <h4>{t('legal.dataCollection.title')}</h4>
            <div className="legal-info">
              <p>{t('legal.dataCollection.definition')}</p>
              <p>{t('legal.dataCollection.consent')}</p>
            </div>
          </section>

          <section className="legal-section">
            <h4>{t('legal.dataTypes.title')}</h4>
            <div className="legal-info">
              <p>{t('legal.dataTypes.collected')}</p>
              <p>{t('legal.dataTypes.purpose')}</p>
              <p>{t('legal.dataTypes.legitimateInterest')}</p>
              <ul>
                <li>{t('legal.dataTypes.services.news')}</li>
                <li>{t('legal.dataTypes.services.wealth')}</li>
              </ul>
              <p>{t('legal.dataTypes.location')}</p>
            </div>
          </section>

          <section className="legal-section">
            <h4>{t('legal.dataRetention.title')}</h4>
            <div className="legal-info">
              <p>{t('legal.dataRetention.purpose')}</p>
              <ul>
                <li>{t('legal.dataRetention.navigation')}</li>
                <li>{t('legal.dataRetention.membership')}</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Legal