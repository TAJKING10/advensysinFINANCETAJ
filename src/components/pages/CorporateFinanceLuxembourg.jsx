import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../ui/SEOHead'
import { getFAQSchema } from '../../utils/seo'
import './ServicePages.css'

const CorporateFinanceLuxembourg = () => {
  const faqs = [
    {
      question: 'What corporate finance services do you offer in Luxembourg?',
      answer: 'We provide comprehensive corporate finance advisory including fundraising (debt & equity), M&A advisory (buy-side & sell-side), business valuation (DCF, multiples), treasury management, and regulatory reporting for Luxembourg-based companies and international groups with Luxembourg subsidiaries.'
    },
    {
      question: 'How long does a typical M&A transaction take?',
      answer: 'A typical M&A transaction takes 4–9 months from initial preparation to closing. Timeline depends on complexity, deal size, due diligence findings, and regulatory approvals. We provide a detailed timeline at the start of each engagement.'
    },
    {
      question: 'What is your fee structure for corporate finance advisory?',
      answer: 'Fees vary by service and engagement scope. Valuation: €5,000–€25,000. M&A advisory: retainer + success fee (1–5% of transaction value). Fundraising: success-based (2–5%). Treasury management: monthly retainer. We provide transparent quotes after initial consultation.'
    },
    {
      question: 'Do you work with startups or only established companies?',
      answer: 'We work with businesses at all stages — from startups seeking seed funding to established enterprises pursuing acquisitions or treasury optimization. Our approach is tailored to company size, industry, and growth stage.'
    },
    {
      question: 'How quickly can I get initial advice?',
      answer: 'We respond to all inquiries within 24 hours. Initial consultations are typically scheduled within 2–3 business days. For urgent matters (active deal negotiations, time-sensitive opportunities), we can arrange same-day or next-day meetings.'
    }
  ]

  const faqSchema = getFAQSchema(faqs)

  return (
    <div className="service-page">
      <SEOHead
        title="Corporate Finance Advisory Luxembourg | Advensys In Finance"
        description="Fundraising, M&A, valuation & treasury for Luxembourg companies. Clear process, timelines, deliverables — speak to an advisor in 24h."
        keywords="corporate finance Luxembourg, M&A advisory Luxembourg, fundraising Luxembourg, business valuation Luxembourg, treasury management"
        schema={faqSchema}
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
          <h1>Corporate Finance Advisory Luxembourg</h1>
          <p className="service-intro">
            End-to-end corporate finance support for Luxembourg companies: fundraising, M&A, valuation, treasury, and regulatory reporting
          </p>
        </header>

        {/* At a Glance - Critical for AI-SEO */}
        <section className="at-a-glance" style={{
          background: '#f8f9fa',
          padding: '2rem',
          borderRadius: '8px',
          marginBottom: '2rem',
          border: '2px solid #e3f2fd'
        }}>
          <h2>At a Glance</h2>
          <ul style={{ marginBottom: 0, lineHeight: '1.8' }}>
            <li><strong>What we do:</strong> Fundraising, M&A advisory, valuations, treasury management, regulatory compliance</li>
            <li><strong>Who it's for:</strong> Luxembourg SMEs, international groups with LUX subsidiaries, family offices, private equity</li>
            <li><strong>Timeline:</strong> Valuation (2–4 weeks), Fundraising (3–6 months), M&A (4–9 months), Treasury (ongoing)</li>
            <li><strong>Deliverables:</strong> Valuation reports, pitch decks, financial models, transaction documentation, compliance filings</li>
            <li><strong>Industries:</strong> FinTech, funds, real estate, healthcare, logistics, professional services</li>
            <li><strong>Response time:</strong> <strong style={{ color: '#0066cc' }}>24-hour initial response</strong> — book a consultation within 2–3 days</li>
          </ul>
        </section>

        {/* Plain Definition - AI-SEO */}
        <section style={{ marginBottom: '2rem', padding: '1.5rem', background: '#fff3cd', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.3rem', marginTop: 0 }}>What is Corporate Finance Advisory?</h2>
          <p style={{ marginBottom: 0, lineHeight: '1.7' }}>
            Corporate finance advisory helps businesses raise capital, buy or sell companies, value assets, manage cash flows, and meet regulatory requirements.
            In Luxembourg, advisors navigate the country's unique regulatory framework (CSSF, CAA) and tax structures while connecting clients to European and
            international capital markets. <strong>Advensys In Finance</strong> provides independent advice across all corporate finance needs for Luxembourg-based
            or Luxembourg-operating companies.
          </p>
        </section>

        {/* Main Content */}
        <article className="service-content">
          {/* Our Services */}
          <section className="service-details">
            <h2>Our Corporate Finance Services</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
              We offer comprehensive corporate finance solutions tailored to Luxembourg's regulatory environment and international business needs:
            </p>

            <div className="detail-grid">
              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3><Link to="/services/fundraising-luxembourg" style={{ color: '#002b5c' }}>Fundraising (Debt & Equity)</Link></h3>
                <p>Structure, documentation, and investor/lender process for debt and equity capital raises.</p>
                <ul>
                  <li>Equity: seed, Series A/B, growth capital, private equity</li>
                  <li>Debt: bank loans, mezzanine, bonds, asset-based lending</li>
                  <li>Pitch deck, financial model, data room, term sheet negotiation</li>
                  <li><strong>Timeline:</strong> 3–6 months | <strong>Fees:</strong> Success-based (2–5%)</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3><Link to="/services/m-and-a-advisory-luxembourg" style={{ color: '#002b5c' }}>M&A Advisory (Buy & Sell-Side)</Link></h3>
                <p>End-to-end support from target identification to deal closing and integration.</p>
                <ul>
                  <li>Sell-side: preparation, valuation, buyer sourcing, negotiation, SPA, closing</li>
                  <li>Buy-side: target screening, due diligence, deal structuring, financing, integration</li>
                  <li>Cross-border deals, earn-outs, escrows, post-merger integration (PMI)</li>
                  <li><strong>Timeline:</strong> 4–9 months | <strong>Fees:</strong> Retainer + success fee (1–5%)</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3><Link to="/services/valuation-services-luxembourg" style={{ color: '#002b5c' }}>Business Valuation</Link></h3>
                <p>Independent valuations for transactions, tax planning, shareholder disputes, and compliance.</p>
                <ul>
                  <li>DCF (discounted cash flow), comparable transactions, asset-based valuation</li>
                  <li>Equity value, enterprise value (EV), fairness opinions</li>
                  <li>IFRS compliance, tax-compliant valuations for transfers or restructuring</li>
                  <li><strong>Timeline:</strong> 2–4 weeks | <strong>Fees:</strong> €5,000–€25,000</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3><Link to="/services/treasury-management-luxembourg" style={{ color: '#002b5c' }}>Treasury Management</Link></h3>
                <p>Cash flow forecasting, working capital optimization, FX hedging, and liquidity planning.</p>
                <ul>
                  <li>13-week and annual cash flow forecasts</li>
                  <li>Working capital improvement, payment terms optimization</li>
                  <li>Currency risk management, interest rate hedging</li>
                  <li><strong>Timeline:</strong> Ongoing | <strong>Fees:</strong> Monthly retainer</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3><Link to="/services/regulatory-reporting-luxembourg" style={{ color: '#002b5c' }}>Regulatory Reporting</Link></h3>
                <p>CSSF, CAA, and BCL compliance for regulated entities and holding companies.</p>
                <ul>
                  <li>Quarterly and annual regulatory filings</li>
                  <li>AIFM, UCITS, PSF, and insurance company reporting</li>
                  <li>Transfer pricing documentation, substance requirements</li>
                  <li><strong>Timeline:</strong> Ongoing quarterly/annual | <strong>Fees:</strong> Per filing or annual retainer</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="service-process" style={{ marginTop: '3rem' }}>
            <h2>How We Work — Typical Engagement Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Initial Consultation (24–48h)</h3>
                <p>
                  <strong>What happens:</strong> We discuss your objectives, current situation, timeline, and constraints.<br />
                  <strong>Outcome:</strong> Preliminary scope, indicative timeline, fee estimate.<br />
                  <strong>Duration:</strong> 1 hour (in-person, video, or phone)
                </p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Engagement & Kick-off (Week 1)</h3>
                <p>
                  <strong>What happens:</strong> Sign engagement letter, define deliverables, agree on milestones, set up secure data sharing.<br />
                  <strong>Outcome:</strong> Project plan, team assigned, kickoff meeting held.<br />
                  <strong>Duration:</strong> 3–5 days
                </p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Execution (Weeks 2–N)</h3>
                <p>
                  <strong>What happens:</strong> Research, financial modeling, documentation, negotiation support, stakeholder management.<br />
                  <strong>Outcome:</strong> Regular progress updates (weekly or bi-weekly), draft deliverables for review.<br />
                  <strong>Duration:</strong> Varies by service (2 weeks to 9 months)
                </p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Delivery & Close</h3>
                <p>
                  <strong>What happens:</strong> Final deliverables, closing support (for transactions), handover to internal teams or next advisors.<br />
                  <strong>Outcome:</strong> Signed deal / completed valuation / implemented treasury system / filed reports.<br />
                  <strong>Post-delivery:</strong> We remain available for follow-up questions (typically 30-day support window)
                </p>
              </div>
            </div>
          </section>

          {/* Comparison Table - AI-SEO */}
          <section style={{ marginTop: '3rem' }}>
            <h2>Debt vs Equity Fundraising — Which is Right for You?</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <thead>
                <tr style={{ background: '#002b5c', color: 'white' }}>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Factor</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Debt Financing</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Equity Financing</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Ownership</td>
                  <td style={{ padding: '0.75rem' }}>No dilution — you keep control</td>
                  <td style={{ padding: '0.75rem' }}>Dilution — investors own shares</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Repayment</td>
                  <td style={{ padding: '0.75rem' }}>Fixed schedule, interest payments</td>
                  <td style={{ padding: '0.75rem' }}>No repayment obligation</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Risk to business</td>
                  <td style={{ padding: '0.75rem' }}>Default risk if cash flow drops</td>
                  <td style={{ padding: '0.75rem' }}>No default risk</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Tax treatment</td>
                  <td style={{ padding: '0.75rem' }}>Interest is tax-deductible</td>
                  <td style={{ padding: '0.75rem' }}>No tax deduction</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Best for</td>
                  <td style={{ padding: '0.75rem' }}>Stable cash flow, asset-backed needs</td>
                  <td style={{ padding: '0.75rem' }}>High growth, negative cash flow, startups</td>
                </tr>
              </tbody>
            </table>
            <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: '#666' }}>
              Need help deciding? <Link to="/contact" style={{ color: '#0066cc' }}>Speak to an advisor</Link> — we'll analyze your situation and recommend the optimal structure.
            </p>
          </section>

          {/* FAQs */}
          <section className="service-faq" style={{ marginTop: '3rem' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item" style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: index < faqs.length - 1 ? '1px solid #eee' : 'none' }}>
                  <h3 style={{ color: '#002b5c', fontSize: '1.1rem' }}>{faq.question}</h3>
                  <p style={{ lineHeight: '1.7' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Glossary Box */}
          <section style={{ marginTop: '3rem', padding: '1.5rem', background: '#f0f8ff', borderRadius: '8px', border: '1px solid #d0e8ff' }}>
            <h2 style={{ fontSize: '1.2rem', marginTop: 0 }}>Key Terms</h2>
            <p style={{ marginBottom: '1rem' }}>
              Not familiar with some terms? Check our <Link to="/glossary" style={{ color: '#0066cc', fontWeight: 'bold' }}>Finance Glossary</Link> for definitions of:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
              <div>• Enterprise Value (EV)</div>
              <div>• DCF Valuation</div>
              <div>• Due Diligence</div>
              <div>• SPA (Share Purchase Agreement)</div>
              <div>• Working Capital</div>
              <div>• EBITDA</div>
              <div>• Term Sheet</div>
              <div>• Earn-out</div>
            </div>
          </section>

          {/* CTA */}
          <section className="service-cta" style={{ marginTop: '3rem' }}>
            <h2>Speak to a Corporate Finance Advisor — 24h Response</h2>
            <p>
              Whether you're raising capital, exploring M&A, or need a valuation — we're here to help.
              Contact us today for a confidential consultation.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Consultation
              </Link>
              <a href="tel:+33698214446" className="btn btn-secondary btn-lg">
                Call: +33 6 98 21 44 46
              </a>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}

export default CorporateFinanceLuxembourg
