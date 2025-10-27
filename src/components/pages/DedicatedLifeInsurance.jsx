import React from 'react'
import { Link } from 'react-router-dom'
import './ServicePages.css'
import { useLanguage } from '../../contexts/LanguageContext'
import SEOHead from '../ui/SEOHead'

const DedicatedLifeInsurance = () => {
  const { t } = useLanguage()
  return (
    <div className="service-page">
      <SEOHead
        title="Dedicated Life Insurance Luxembourg | Term, Whole, Universal Life"
        description="Specialized life insurance solutions in Luxembourg: term life, whole life, universal life, and variable life insurance. Expert advice, personalized coverage, 24h response."
        keywords="life insurance Luxembourg, term life insurance, whole life insurance, universal life insurance, variable life insurance, life insurance advisor"
      />
      <div className="container">
        {/* Back Navigation */}
        <div className="back-navigation">
          <Link to="/services" className="back-link">
            ← {t('services.backToServices')}
          </Link>
        </div>

        {/* Page Header */}
        <header className="service-header">
          <h1>{t('services.mainServices.dedicatedLifeInsurance.title')}</h1>
          <p className="service-intro">
            {t('services.mainServices.dedicatedLifeInsurance.shortDescription')}
          </p>
        </header>

        {/* Main Content */}
        <article className="service-content">
          <section className="service-overview">
            <h2>{t('services.protectingFamily')}</h2>
            <p>
              {t('services.mainServices.dedicatedLifeInsurance.overview')}
            </p>
          </section>

          <section className="service-details">
            <h2>{t('services.specializedProducts')}</h2>
            
            <div className="detail-grid">
              <div className="detail-item">
                <h3>{t('services.insuranceTypes.lifeInsurance.term')}</h3>
                <ul>
                  <li>10, 20, or 30-year term options</li>
                  <li>Level premium guarantee</li>
                  <li>Conversion options to permanent coverage</li>
                  <li>Affordable protection for growing families</li>
                  <li>High coverage amounts available</li>
                </ul>
              </div>

              <div className="detail-item">
                <h3>{t('services.insuranceTypes.lifeInsurance.whole')}</h3>
                <ul>
                  <li>Lifetime coverage guarantee</li>
                  <li>Cash value accumulation</li>
                  <li>Fixed premiums that never increase</li>
                  <li>Dividend potential with participating policies</li>
                  <li>Tax-advantaged wealth building</li>
                </ul>
              </div>

              <div className="detail-item">
                <h3>{t('services.insuranceTypes.lifeInsurance.universal')}</h3>
                <ul>
                  <li>Flexible premium payments</li>
                  <li>Adjustable death benefit options</li>
                  <li>Competitive interest crediting rates</li>
                  <li>Tax-deferred cash value growth</li>
                  <li>Partial withdrawal options</li>
                </ul>
              </div>

              <div className="detail-item">
                <h3>{t('services.insuranceTypes.lifeInsurance.variable')}</h3>
                <ul>
                  <li>Investment-linked cash value growth</li>
                  <li>Multiple investment options</li>
                  <li>Professional investment oversight</li>
                  <li>Tax-advantaged investment growth</li>
                  <li>Flexible death benefit options</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="service-benefits">
            <h2>{t('services.whyChooseService')}</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Specialized Expertise</h3>
                <p>Our team focuses exclusively on life insurance, ensuring deep knowledge and specialized expertise in all life insurance products and strategies.</p>
              </div>
              <div className="benefit-card">
                <h3>Personalized Solutions</h3>
                <p>We design life insurance strategies tailored to your specific financial goals, family situation, and budget requirements.</p>
              </div>
              <div className="benefit-card">
                <h3>Comprehensive Analysis</h3>
                <p>We conduct thorough needs analysis to determine the optimal type and amount of life insurance coverage for your situation.</p>
              </div>
              <div className="benefit-card">
                <h3>Ongoing Support</h3>
                <p>From application to claims, we provide continuous support and regular policy reviews to ensure your coverage remains optimal.</p>
              </div>
            </div>
          </section>

          <section className="service-features">
            <h2>{t('services.advancedFeatures')}</h2>
            <div className="features-list">
              <div className="feature">
                <h3>Living Benefits</h3>
                <p>Access to policy benefits while living through terminal illness, chronic illness, or critical illness riders.</p>
              </div>
              <div className="feature">
                <h3>Estate Planning Integration</h3>
                <p>Coordinate life insurance with your estate planning goals to minimize taxes and maximize wealth transfer.</p>
              </div>
              <div className="feature">
                <h3>Business Applications</h3>
                <p>Key person insurance, buy-sell agreements, and executive benefit plans for business owners and professionals.</p>
              </div>
              <div className="feature">
                <h3>Tax Optimization</h3>
                <p>Leverage life insurance for tax-efficient wealth accumulation and retirement income planning.</p>
              </div>
            </div>
          </section>

          <section className="service-process">
            <h2>{t('services.lifeInsuranceProcess')}</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Needs Analysis</h3>
                <p>Comprehensive evaluation of your financial situation, family needs, and life insurance requirements.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Product Selection</h3>
                <p>Careful selection of the most appropriate life insurance products based on your specific needs and goals.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Application Process</h3>
                <p>Streamlined application and underwriting process with our support throughout every step.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Policy Management</h3>
                <p>Ongoing policy management, regular reviews, and adjustments as your life circumstances change.</p>
              </div>
            </div>
          </section>

          <section className="service-cta">
            <h2>{t('services.secureFamily')}</h2>
            <p>
              {t('services.takeAction')}
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                {t('services.applyNow')}
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                {t('services.askQuestion')}
              </Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}

export default DedicatedLifeInsurance