import React from 'react'
import { Link } from 'react-router-dom'
import './ServicePages.css'
import SEOHead from '../ui/SEOHead'

const PrivatePensionPlan = () => {
  return (
    <div className="service-page">
      <SEOHead
        title="Private Pension Plan Luxembourg | SEPCAV, Life Insurance Pension"
        description="Luxembourg private pension plans: SEPCAV funds, life insurance pensions, corporate schemes. Tax advantages, EU portability, asset protection. Expert guidance, 24h response."
        keywords="private pension Luxembourg, SEPCAV Luxembourg, pension plan Luxembourg, retirement planning Luxembourg, Luxembourg life insurance pension, tax-efficient pension"
      />
      <div className="container">
        {/* Back Navigation */}
        <div className="back-navigation">
          <Link to="/services" className="back-link">
            ← Back to Services
          </Link>
        </div>

        {/* Page Header */}
        <header className="service-header">
          <h1>Private Pension Plan</h1>
          <p className="service-intro">
            Comprehensive retirement planning solutions with Luxembourg advantages, offering exceptional tax benefits and security features
          </p>
        </header>

        {/* Main Content */}
        <article className="service-content">
          <section className="service-overview">
            <h2>Secure Your Retirement with Luxembourg Excellence</h2>
            <p>
              Luxembourg's private pension plans offer unparalleled advantages for retirement planning, combining political stability, 
              robust regulatory framework, and significant tax benefits. Our expertise in Luxembourg pension legislation ensures you 
              maximize these advantages while building a secure financial future.
            </p>
          </section>

          <section className="luxembourg-advantages">
            <h2>Luxembourg Private Pension Advantages</h2>
            
            <div className="advantage-grid">
              <div className="advantage-item">
                <h3>Tax Optimization</h3>
                <ul>
                  <li>Tax-deferred growth on investments</li>
                  <li>Significant tax deductions on contributions</li>
                  <li>Favorable taxation on retirement withdrawals</li>
                  <li>No withholding tax on investment returns</li>
                  <li>Double taxation treaty benefits</li>
                </ul>
              </div>

              <div className="advantage-item">
                <h3>Regulatory Security</h3>
                <ul>
                  <li>Strict Luxembourg financial regulation (CSSF)</li>
                  <li>Investor protection schemes</li>
                  <li>Segregated asset protection</li>
                  <li>European Union regulatory framework</li>
                  <li>Political and economic stability</li>
                </ul>
              </div>

              <div className="advantage-item">
                <h3>Investment Flexibility</h3>
                <ul>
                  <li>Wide range of investment options</li>
                  <li>Access to international markets</li>
                  <li>Multi-currency capabilities</li>
                  <li>Professional fund management</li>
                  <li>Risk-adjusted portfolio strategies</li>
                </ul>
              </div>

              <div className="advantage-item">
                <h3>Portability Benefits</h3>
                <ul>
                  <li>EU-wide pension portability</li>
                  <li>Cross-border worker advantages</li>
                  <li>International mobility support</li>
                  <li>Simplified administration</li>
                  <li>Multi-jurisdictional planning</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="pension-types">
            <h2>Luxembourg Pension Plan Types</h2>
            
            <div className="pension-options">
              <div className="pension-option">
                <h3>SEPCAV (Specialized Investment Fund)</h3>
                <p>
                  Dedicated pension investment vehicle offering maximum flexibility and tax efficiency for retirement savings, 
                  with professional management and institutional-grade investment opportunities.
                </p>
                <ul>
                  <li>Professional investment management</li>
                  <li>Institutional investment access</li>
                  <li>Tax-efficient structure</li>
                  <li>Flexible contribution schedules</li>
                </ul>
              </div>

              <div className="pension-option">
                <h3>Luxembourg Life Insurance Pension</h3>
                <p>
                  Life insurance-based pension plans combining retirement savings with life insurance protection, 
                  offering capital guarantees and bonus participation.
                </p>
                <ul>
                  <li>Capital protection guarantees</li>
                  <li>Life insurance coverage</li>
                  <li>Profit participation rights</li>
                  <li>Flexible premium payments</li>
                </ul>
              </div>

              <div className="pension-option">
                <h3>Corporate Pension Schemes</h3>
                <p>
                  Employer-sponsored pension plans designed for businesses operating in Luxembourg or with Luxembourg subsidiaries, 
                  offering significant tax advantages for both employer and employees.
                </p>
                <ul>
                  <li>Employer tax deductions</li>
                  <li>Employee benefit optimization</li>
                  <li>Group insurance advantages</li>
                  <li>Administrative efficiency</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="tax-benefits">
            <h2>Luxembourg Tax Benefits</h2>
            <div className="tax-details">
              <div className="tax-benefit">
                <h3>Contribution Phase</h3>
                <ul>
                  <li>Tax deductible contributions up to legal limits</li>
                  <li>Corporate tax benefits for employer contributions</li>
                  <li>No VAT on pension plan management fees</li>
                  <li>Investment growth free from income tax</li>
                </ul>
              </div>
              <div className="tax-benefit">
                <h3>Accumulation Phase</h3>
                <ul>
                  <li>No taxation on investment gains</li>
                  <li>No withholding tax on dividends and interest</li>
                  <li>Compound growth advantages</li>
                  <li>Currency hedging benefits</li>
                </ul>
              </div>
              <div className="tax-benefit">
                <h3>Distribution Phase</h3>
                <ul>
                  <li>Favorable taxation on retirement benefits</li>
                  <li>Lump sum distribution options</li>
                  <li>Annuity payment alternatives</li>
                  <li>Inheritance tax advantages</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="security-features">
            <h2>Security & Protection Features</h2>
            <div className="security-grid">
              <div className="security-feature">
                <h3>Asset Protection</h3>
                <p>Luxembourg law provides strong creditor protection for pension assets, ensuring your retirement savings are safeguarded against potential claims.</p>
              </div>
              <div className="security-feature">
                <h3>Regulatory Oversight</h3>
                <p>Strict supervision by the Commission de Surveillance du Secteur Financier (CSSF) ensures the highest standards of investor protection.</p>
              </div>
              <div className="security-feature">
                <h3>Fund Segregation</h3>
                <p>Pension assets are held separately from the provider's own assets, providing additional security in case of provider insolvency.</p>
              </div>
              <div className="security-feature">
                <h3>Investor Compensation</h3>
                <p>Luxembourg investor compensation scheme provides additional protection for pension plan participants up to legal limits.</p>
              </div>
            </div>
          </section>

          <section className="service-process">
            <h2>Our Private Pension Planning Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Retirement Planning Analysis</h3>
                <p>Comprehensive assessment of your retirement goals, current financial situation, and tax planning opportunities.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Luxembourg Strategy Design</h3>
                <p>Development of a customized Luxembourg pension strategy optimized for tax efficiency and regulatory advantages.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Implementation</h3>
                <p>Professional setup and implementation of your Luxembourg pension plan with ongoing compliance management.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Ongoing Management</h3>
                <p>Regular reviews, performance monitoring, and adjustments to ensure your pension plan remains optimized.</p>
              </div>
            </div>
          </section>

          <section className="service-cta">
            <h2>Maximize Your Retirement Potential with Luxembourg</h2>
            <p>
              Take advantage of Luxembourg's exceptional pension planning opportunities. Contact us to explore how a Luxembourg private pension plan can enhance your retirement security.
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

export default PrivatePensionPlan