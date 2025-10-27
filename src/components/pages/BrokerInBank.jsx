import React from 'react'
import { Link } from 'react-router-dom'
import './ServicePages.css'
import SEOHead from '../ui/SEOHead'

const BrokerInBank = () => {
  return (
    <div className="service-page">
      <SEOHead
        title="Broker in Bank Luxembourg | Loan Brokerage & Banking Services"
        description="Professional banking intermediary services in Luxembourg: mortgage loans, business lending, commercial banking, trade finance. Expert negotiation, best terms, 24h response."
        keywords="loan broker Luxembourg, banking services Luxembourg, mortgage broker, business loans Luxembourg, commercial banking, trade finance Luxembourg"
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
          <h1>Broker in Bank</h1>
          <p className="service-intro">
            Professional banking intermediary services to help you find the best banking solutions and financial products
          </p>
        </header>

        {/* Main Content */}
        <article className="service-content">
          <section className="service-overview">
            <h2>Your Banking Solutions Partner</h2>
            <p>
              As licensed banking intermediaries, we bridge the gap between you and financial institutions to secure 
              the best banking products and services for your needs. Our extensive network of banking partners and 
              deep industry knowledge ensure you get optimal terms and conditions for all your banking requirements.
            </p>
          </section>

          <section className="service-details">
            <h2>Banking Intermediary Services</h2>
            
            <div className="detail-grid">
              <div className="detail-item">
                <h3>Loan Brokerage</h3>
                <ul>
                  <li>Mortgage loans and refinancing</li>
                  <li>Personal and consumer loans</li>
                  <li>Business and commercial lending</li>
                  <li>Auto and equipment financing</li>
                  <li>Construction and bridge loans</li>
                </ul>
              </div>

              <div className="detail-item">
                <h3>Banking Services</h3>
                <ul>
                  <li>Business and corporate banking</li>
                  <li>International banking solutions</li>
                  <li>Treasury and cash management</li>
                  <li>Letters of credit and trade finance</li>
                  <li>Merchant services and payment processing</li>
                </ul>
              </div>

              <div className="detail-item">
                <h3>Credit Solutions</h3>
                <ul>
                  <li>Lines of credit and overdraft facilities</li>
                  <li>Credit cards and corporate cards</li>
                  <li>Asset-based lending</li>
                  <li>Invoice financing and factoring</li>
                  <li>Equipment and vehicle financing</li>
                </ul>
              </div>

              <div className="detail-item">
                <h3>Specialized Banking</h3>
                <ul>
                  <li>Private banking services</li>
                  <li>Offshore banking solutions</li>
                  <li>Multi-currency accounts</li>
                  <li>Investment banking services</li>
                  <li>Trust and fiduciary services</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="service-benefits">
            <h2>Why Use Our Banking Brokerage Services</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Extensive Network</h3>
                <p>Access to a wide network of banks and financial institutions, including traditional banks, credit unions, and alternative lenders.</p>
              </div>
              <div className="benefit-card">
                <h3>Best Terms</h3>
                <p>We negotiate on your behalf to secure the most favorable interest rates, terms, and conditions available in the market.</p>
              </div>
              <div className="benefit-card">
                <h3>Expert Guidance</h3>
                <p>Professional guidance through complex banking processes, documentation, and regulatory requirements.</p>
              </div>
              <div className="benefit-card">
                <h3>Time Saving</h3>
                <p>Save time and effort by letting us handle the research, comparison, and application process across multiple institutions.</p>
              </div>
            </div>
          </section>

          <section className="banking-solutions">
            <h2>Specialized Banking Solutions</h2>
            <div className="solutions-list">
              <div className="solution">
                <h3>Commercial Banking</h3>
                <p>Complete commercial banking solutions for businesses of all sizes, from startups to large corporations, including cash management and trade finance.</p>
              </div>
              <div className="solution">
                <h3>International Banking</h3>
                <p>Cross-border banking solutions, foreign exchange services, and international payment systems for global business operations.</p>
              </div>
              <div className="solution">
                <h3>Private Banking</h3>
                <p>Exclusive private banking services for high net worth individuals, including personalized relationship management and bespoke financial solutions.</p>
              </div>
              <div className="solution">
                <h3>Digital Banking</h3>
                <p>Modern digital banking platforms and fintech solutions that provide convenience, efficiency, and advanced financial management tools.</p>
              </div>
            </div>
          </section>

          <section className="regulatory-compliance">
            <h2>Regulatory Compliance & Licensing</h2>
            <div className="compliance-info">
              <p>
                As registered banking intermediaries, we operate under strict regulatory oversight and maintain all required 
                licenses and certifications. Our services comply with:
              </p>
              <ul>
                <li>European banking regulations and directives</li>
                <li>Luxembourg financial services legislation</li>
                <li>Anti-money laundering (AML) requirements</li>
                <li>Know Your Customer (KYC) protocols</li>
                <li>Data protection and privacy regulations</li>
              </ul>
            </div>
          </section>

          <section className="service-process">
            <h2>Our Banking Brokerage Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Needs Assessment</h3>
                <p>Detailed analysis of your banking requirements, financial situation, and specific objectives.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Market Research</h3>
                <p>Comprehensive market research to identify the best banking partners and products for your needs.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Negotiation</h3>
                <p>Professional negotiation with banking partners to secure optimal terms and conditions on your behalf.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Implementation</h3>
                <p>Complete assistance with documentation, application processes, and account setup to ensure smooth implementation.</p>
              </div>
            </div>
          </section>

          <section className="service-cta">
            <h2>Find Your Ideal Banking Partner</h2>
            <p>
              Don't settle for standard banking terms. Let us help you find the perfect banking solution tailored to your needs.
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

export default BrokerInBank