import React from 'react'
import { Link } from 'react-router-dom'
import './ServicePages.css'

const InvestmentAdviser = () => {
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
          <h1>Investment Adviser</h1>
          <p className="service-intro">
            Professional investment advisory services to help you build, manage, and grow your wealth for long-term financial success
          </p>
        </header>

        {/* Main Content */}
        <article className="service-content">
          <section className="service-overview">
            <h2>Your Partner in Wealth Building</h2>
            <p>
              As registered investment advisers, we provide personalized investment guidance 
              designed to help you achieve your financial goals. Our disciplined approach combines comprehensive financial 
              planning with sophisticated investment strategies to build and preserve your wealth over time.
            </p>
          </section>

          <section className="service-details">
            <h2>Comprehensive Investment Services</h2>
            
            <div className="detail-grid">
              <div className="detail-item">
                <h3>Investment Planning</h3>
                <ul>
                  <li>Goal-based investment strategies</li>
                  <li>Retirement planning and 401(k) management</li>
                  <li>Education funding strategies</li>
                  <li>Tax-efficient investing</li>
                  <li>Estate planning integration</li>
                </ul>
              </div>

              <div className="detail-item">
                <h3>Research & Analysis</h3>
                <ul>
                  <li>Market research and analysis</li>
                  <li>Investment due diligence</li>
                  <li>Economic outlook and trends</li>
                  <li>Sector and industry analysis</li>
                  <li>Alternative investment evaluation</li>
                </ul>
              </div>

              <div className="detail-item">
                <h3>Wealth Management</h3>
                <ul>
                  <li>High net worth client services</li>
                  <li>Family office solutions</li>
                  <li>Institutional investment management</li>
                  <li>Private equity and hedge fund access</li>
                  <li>Charitable giving strategies</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="service-benefits">
            <h2>Why Choose Our Investment Advisory Services</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Fiduciary Standard</h3>
                <p>As registered investment advisers, we are legally bound to act in your best interests at all times, providing unbiased advice.</p>
              </div>
              <div className="benefit-card">
                <h3>Personalized Approach</h3>
                <p>Every investment strategy is tailored to your unique financial situation, risk tolerance, and long-term objectives.</p>
              </div>
              <div className="benefit-card">
                <h3>Transparent Fees</h3>
                <p>Clear, straightforward fee structure with no hidden costs or commissions that could compromise our advice.</p>
              </div>
              <div className="benefit-card">
                <h3>Continuous Monitoring</h3>
                <p>Ongoing portfolio oversight and regular adjustments to keep your investments aligned with your goals.</p>
              </div>
            </div>
          </section>

          <section className="investment-philosophy">
            <h2>Our Investment Philosophy</h2>
            <div className="philosophy-points">
              <div className="philosophy-point">
                <h3>Disciplined Approach</h3>
                <p>We follow a systematic, research-driven investment process that removes emotion from investment decisions and focuses on long-term results.</p>
              </div>
              <div className="philosophy-point">
                <h3>Risk Management</h3>
                <p>Effective risk management is fundamental to successful investing. We implement comprehensive risk controls and diversification strategies.</p>
              </div>
              <div className="philosophy-point">
                <h3>Cost Efficiency</h3>
                <p>We believe that minimizing investment costs is crucial to maximizing returns. We focus on low-cost, tax-efficient investment solutions.</p>
              </div>
              <div className="philosophy-point">
                <h3>Long-term Focus</h3>
                <p>Successful investing requires patience and discipline. We maintain a long-term perspective that helps navigate market volatility.</p>
              </div>
            </div>
          </section>

          <section className="service-process">
            <h2>Our Investment Advisory Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Discovery</h3>
                <p>Comprehensive assessment of your financial situation, investment experience, and long-term objectives.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Strategy Development</h3>
                <p>Creation of a customized investment strategy and asset allocation plan aligned with your goals and risk tolerance.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Implementation</h3>
                <p>Careful implementation of your investment strategy with ongoing monitoring and portfolio management.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Review & Adjust</h3>
                <p>Regular reviews and adjustments to ensure your investment strategy remains aligned with your evolving needs.</p>
              </div>
            </div>
          </section>

          <section className="service-cta">
            <h2>Start Building Your Wealth Today</h2>
            <p>
              Take control of your financial future with professional investment advisory services. Contact us to schedule your consultation.
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

export default InvestmentAdviser