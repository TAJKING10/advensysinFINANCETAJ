import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../ui/SEOHead'
import { getFAQSchema } from '../../utils/seo'
import './ServicePages.css'

const ValuationServicesLuxembourg = () => {
  const faqs = [
    {
      question: 'What valuation methods do you use?',
      answer: 'We use three primary methods: (1) Discounted Cash Flow (DCF) — projects future cash flows and discounts to present value; (2) Market multiples — compares your company to similar transactions (EV/EBITDA, P/E ratios); (3) Asset-based — values tangible and intangible assets. We select the most appropriate method based on business type, stage, and valuation purpose.'
    },
    {
      question: 'How long does a business valuation take?',
      answer: 'Standard valuations take 2–4 weeks from data collection to final report. Timeline depends on: business complexity, data availability, method selected, and review cycles. For urgent needs (active M&A deals), we can deliver in 1–2 weeks. For complex multi-entity valuations, allow 4–6 weeks.'
    },
    {
      question: 'How much does a business valuation cost in Luxembourg?',
      answer: 'Valuation fees range from €5,000 to €25,000 depending on: company size, complexity, valuation method, and purpose. Simple SME valuations: €5,000–€10,000. Mid-market companies: €10,000–€20,000. Complex multi-entity or IFRS-compliant valuations: €20,000–€25,000+. We provide fixed-fee quotes after scoping.'
    },
    {
      question: 'When do I need a formal business valuation?',
      answer: 'Common scenarios: (1) M&A transactions (buy-side or sell-side); (2) Tax planning (restructuring, transfers, estate planning); (3) Shareholder disputes or buyouts; (4) IFRS compliance (impairment testing, purchase price allocation); (5) Fundraising (equity rounds); (6) Employee stock options (ESOP); (7) Regulatory requirements (CSSF, tax authority).'
    },
    {
      question: 'What is the difference between equity value and enterprise value?',
      answer: 'Enterprise Value (EV) represents the total value of the business operations (equity + debt - cash). Equity Value represents the value attributable to shareholders only. EV is used for comparing companies with different capital structures. Equity Value is what shareholders receive in a sale. We calculate both and explain the difference in our reports.'
    },
    {
      question: 'Are your valuations IFRS-compliant?',
      answer: 'Yes. We prepare IFRS-compliant valuations for: purchase price allocation (PPA), impairment testing (IAS 36), fair value measurement (IFRS 13), and financial reporting. Our reports meet auditor requirements and include detailed methodology, assumptions, sensitivity analysis, and supporting documentation.'
    },
    {
      question: 'Can you provide a fairness opinion?',
      answer: 'Yes. A fairness opinion is an independent assessment that a transaction price is fair from a financial perspective. We issue fairness opinions for: M&A deals, management buyouts (MBOs), related-party transactions, and shareholder approvals. Opinions are supported by detailed valuation analysis and delivered as a formal written report.'
    },
    {
      question: 'What data do you need to conduct a valuation?',
      answer: 'We require: (1) Historical financials (3 years: P&L, balance sheet, cash flow); (2) Management projections (3–5 years); (3) Cap table and shareholder structure; (4) Business plan and market analysis; (5) Key contracts (customers, suppliers, leases); (6) Debt schedules and material liabilities. We provide a detailed data request list at engagement.'
    }
  ]

  const faqSchema = getFAQSchema(faqs)

  return (
    <div className="service-page">
      <SEOHead
        title="Valuation Services Luxembourg | Advensys"
        description="DCF, multiples, asset-based valuations for M&A, tax, compliance. Independent, IFRS-compliant reports."
        keywords="business valuation Luxembourg, company valuation, DCF valuation, enterprise value, IFRS valuation"
        schema={faqSchema}
      />

      <div className="container">
        {/* Back Navigation */}
        <div className="back-navigation">
          <Link to="/services/corporate-finance-luxembourg" className="back-link">
            ← Back to Corporate Finance
          </Link>
        </div>

        {/* Page Header */}
        <header className="service-header">
          <h1>Valuation Services Luxembourg</h1>
          <p className="service-intro">
            Independent business valuations for M&A, tax planning, compliance, and shareholder matters — DCF, multiples, asset-based
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
            <li><strong>What we do:</strong> Business valuation using DCF, market multiples, asset-based methods for transactions, tax, compliance</li>
            <li><strong>Who it's for:</strong> Companies in M&A, tax planning, shareholder disputes, IFRS compliance, fundraising, ESOP</li>
            <li><strong>Timeline:</strong> 2–4 weeks (scoping to final report)</li>
            <li><strong>Deliverables:</strong> Detailed valuation report, methodology explanation, sensitivity analysis, executive summary</li>
            <li><strong>Industries:</strong> FinTech, funds, real estate, healthcare, logistics, manufacturing, professional services</li>
            <li><strong>Response time:</strong> <strong style={{ color: '#0066cc' }}>24-hour initial response</strong> — scoping call within 2–3 days</li>
          </ul>
        </section>

        {/* Plain Definition - AI-SEO */}
        <section style={{ marginBottom: '2rem', padding: '1.5rem', background: '#fff3cd', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.3rem', marginTop: 0 }}>What is Business Valuation?</h2>
          <p style={{ marginBottom: 0, lineHeight: '1.7' }}>
            Business valuation is the process of determining the economic value of a company or business unit. Valuations are used for M&A transactions, tax planning,
            shareholder disputes, financial reporting (IFRS), fundraising, and employee stock options. In Luxembourg, independent valuations must comply with IFRS standards
            and tax authority requirements. <strong>Advensys In Finance</strong> provides independent, defensible valuations using internationally recognized methods:
            Discounted Cash Flow (DCF), market multiples, and asset-based approaches.
          </p>
        </section>

        {/* Main Content */}
        <article className="service-content">
          {/* Valuation Methods */}
          <section className="service-details">
            <h2>Our Valuation Methods</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
              We select the most appropriate valuation method based on your business type, stage, and valuation purpose:
            </p>

            <div className="detail-grid">
              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Discounted Cash Flow (DCF)</h3>
                <p>Projects future cash flows and discounts to present value</p>
                <ul>
                  <li>Build 5–10 year financial projections</li>
                  <li>Calculate free cash flow (FCF) for each year</li>
                  <li>Determine weighted average cost of capital (WACC)</li>
                  <li>Discount future cash flows to present value</li>
                  <li>Add terminal value for years beyond projection period</li>
                  <li><strong>Best for:</strong> Stable, profitable businesses with predictable cash flows</li>
                  <li><strong>Pros:</strong> Forward-looking, reflects growth potential</li>
                  <li><strong>Cons:</strong> Sensitive to assumptions (growth, discount rate)</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Market Multiples (Comparable Transactions)</h3>
                <p>Compares your company to similar businesses or transactions</p>
                <ul>
                  <li>Identify comparable companies or transactions</li>
                  <li>Calculate multiples: EV/Revenue, EV/EBITDA, P/E ratio</li>
                  <li>Apply multiples to your company's metrics</li>
                  <li>Adjust for size, growth, profitability differences</li>
                  <li><strong>Common multiples:</strong> EV/EBITDA (3–12x), EV/Revenue (0.5–5x), P/E (8–25x)</li>
                  <li><strong>Best for:</strong> Established businesses in active M&A markets</li>
                  <li><strong>Pros:</strong> Market-based, easy to understand</li>
                  <li><strong>Cons:</strong> Limited comparables in niche industries</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Asset-Based Valuation</h3>
                <p>Values tangible and intangible assets on the balance sheet</p>
                <ul>
                  <li>Inventory, property, equipment at fair market value</li>
                  <li>Intangible assets: patents, trademarks, customer relationships</li>
                  <li>Less liabilities and debt obligations</li>
                  <li>Adjusted net asset value (NAV)</li>
                  <li><strong>Best for:</strong> Asset-heavy businesses (real estate, manufacturing) or liquidation scenarios</li>
                  <li><strong>Pros:</strong> Conservative, tangible</li>
                  <li><strong>Cons:</strong> Ignores future earnings potential, goodwill</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="service-process" style={{ marginTop: '3rem' }}>
            <h2>Valuation Process — Step by Step</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Scoping & Data Request (Days 1–3)</h3>
                <p>
                  <strong>What happens:</strong> Understand valuation purpose (M&A, tax, compliance), define scope, select methodology, provide data request list.<br />
                  <strong>Outcome:</strong> Engagement letter, fixed-fee quote, data request template, project timeline.<br />
                  <strong>Duration:</strong> 2–3 days
                </p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Financial Analysis (Days 4–10)</h3>
                <p>
                  <strong>What happens:</strong> Analyze historical financials (3 years), normalize earnings (adjust for one-offs), assess working capital trends, identify value drivers.<br />
                  <strong>Outcome:</strong> Quality of earnings (QoE) summary, normalized EBITDA, financial trends analysis.<br />
                  <strong>Duration:</strong> 5–7 days
                </p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Methodology Selection (Days 11–12)</h3>
                <p>
                  <strong>What happens:</strong> Select primary method (DCF, multiples, asset-based) and cross-check method. Identify comparable companies/transactions.<br />
                  <strong>Outcome:</strong> Methodology framework, comparable company set, preliminary assumptions.<br />
                  <strong>Duration:</strong> 1–2 days
                </p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Valuation Modeling (Days 13–18)</h3>
                <p>
                  <strong>What happens:</strong> Build financial model (DCF, multiples, asset valuation), run sensitivity analysis (optimistic, base, pessimistic), calculate enterprise value and equity value.<br />
                  <strong>Outcome:</strong> Valuation range (low, mid, high), key assumptions documented, sensitivity scenarios.<br />
                  <strong>Duration:</strong> 4–6 days
                </p>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <h3>Draft Report Review (Days 19–22)</h3>
                <p>
                  <strong>What happens:</strong> Prepare draft valuation report (executive summary, methodology, assumptions, results, appendices). Internal quality review.<br />
                  <strong>Outcome:</strong> Draft report shared with client for factual review and feedback.<br />
                  <strong>Duration:</strong> 3–4 days
                </p>
              </div>
              <div className="step">
                <div className="step-number">6</div>
                <h3>Final Report Delivery (Days 23–28)</h3>
                <p>
                  <strong>What happens:</strong> Incorporate client feedback, finalize report, sign-off by senior advisor, deliver final PDF and Excel model.<br />
                  <strong>Outcome:</strong> Final valuation report ready for M&A, tax filing, auditor review, or regulatory submission.<br />
                  <strong>Duration:</strong> 3–5 days
                </p>
              </div>
              <div className="step">
                <div className="step-number">7</div>
                <h3>Q&A Support (30 days post-delivery)</h3>
                <p>
                  <strong>What happens:</strong> Answer questions from auditors, tax advisors, investors, or counterparties. Provide clarifications on methodology or assumptions.<br />
                  <strong>Outcome:</strong> Support for successful transaction, tax filing, or compliance requirement.<br />
                  <strong>Duration:</strong> 30-day support window included
                </p>
              </div>
            </div>
          </section>

          {/* Timeline & Pricing */}
          <section style={{ marginTop: '3rem', padding: '2rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <h2>Timeline & Pricing</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
              <div>
                <h3 style={{ color: '#002b5c', fontSize: '1.1rem' }}>Typical Timeline</h3>
                <ul style={{ lineHeight: '1.8' }}>
                  <li><strong>Express valuation:</strong> 1–2 weeks (urgent M&A, simple structure)</li>
                  <li><strong>Standard valuation:</strong> 2–4 weeks (most engagements)</li>
                  <li><strong>Complex valuation:</strong> 4–6 weeks (multi-entity, IFRS compliance, multiple methods)</li>
                  <li><strong>Fairness opinion:</strong> 3–5 weeks (additional legal review and board presentation)</li>
                </ul>
              </div>
              <div>
                <h3 style={{ color: '#002b5c', fontSize: '1.1rem' }}>Indicative Pricing</h3>
                <ul style={{ lineHeight: '1.8' }}>
                  <li><strong>Simple SME valuation:</strong> €5,000–€10,000</li>
                  <li><strong>Mid-market company:</strong> €10,000–€20,000</li>
                  <li><strong>Complex/IFRS-compliant:</strong> €20,000–€25,000+</li>
                  <li><strong>Fairness opinion:</strong> €15,000–€30,000</li>
                </ul>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                  Pricing depends on company size, complexity, method, and urgency. We provide fixed-fee quotes after scoping call.
                </p>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section style={{ marginTop: '3rem' }}>
            <h2>When Do You Need a Business Valuation?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ border: '1px solid #e0e0e0', padding: '1.25rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#002b5c' }}>M&A Transactions</h3>
                <p>Independent valuation for pricing, negotiation, and fairness opinions in buy-side or sell-side deals.</p>
              </div>
              <div style={{ border: '1px solid #e0e0e0', padding: '1.25rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#002b5c' }}>Tax Planning</h3>
                <p>Valuations for restructuring, share transfers, estate planning, or gift tax compliance.</p>
              </div>
              <div style={{ border: '1px solid #e0e0e0', padding: '1.25rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#002b5c' }}>Shareholder Disputes</h3>
                <p>Independent valuation for buyouts, divorce settlements, or shareholder agreement triggers.</p>
              </div>
              <div style={{ border: '1px solid #e0e0e0', padding: '1.25rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#002b5c' }}>IFRS Compliance</h3>
                <p>Fair value measurement (IFRS 13), purchase price allocation (IFRS 3), impairment testing (IAS 36).</p>
              </div>
              <div style={{ border: '1px solid #e0e0e0', padding: '1.25rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#002b5c' }}>Fundraising</h3>
                <p>Independent valuation to support equity rounds or justify pricing to investors.</p>
              </div>
              <div style={{ border: '1px solid #e0e0e0', padding: '1.25rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#002b5c' }}>Employee Stock Options (ESOP)</h3>
                <p>Fair market value for ESOP grants, strike price determination, and tax compliance.</p>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section style={{ marginTop: '3rem', padding: '1.5rem', background: '#e8f4f8', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '1.2rem', marginTop: 0 }}>Related Services</h2>
            <p style={{ marginBottom: '1rem' }}>
              Valuations are often part of larger corporate finance engagements:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem', marginBottom: 0 }}>
              <li><Link to="/services/m-and-a-advisory-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>M&A Advisory</Link> — Valuation is a key component of M&A transactions</li>
              <li><Link to="/services/fundraising-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>Fundraising</Link> — Independent valuation supports equity fundraising</li>
              <li><Link to="/services/treasury-management-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>Treasury Management</Link> — Cash flow forecasting for DCF valuations</li>
              <li><Link to="/services/regulatory-reporting-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>Regulatory Reporting</Link> — IFRS-compliant valuations for financial reporting</li>
            </ul>
            <p style={{ marginTop: '1rem', marginBottom: 0 }}>
              <Link to="/services/corporate-finance-luxembourg" style={{ color: '#0066cc' }}>← View all Corporate Finance services</Link>
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
              Not familiar with valuation terminology? Check our <Link to="/glossary" style={{ color: '#0066cc', fontWeight: 'bold' }}>Finance Glossary</Link> for definitions of:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
              <div>• DCF (Discounted Cash Flow)</div>
              <div>• EBITDA</div>
              <div>• Enterprise Value</div>
              <div>• Valuation Multiples</div>
              <div>• WACC (Weighted Average Cost of Capital)</div>
              <div>• Terminal Value</div>
              <div>• Free Cash Flow</div>
              <div>• Equity Value</div>
            </div>
          </section>

          {/* CTA */}
          <section className="service-cta" style={{ marginTop: '3rem' }}>
            <h2>Speak to a Valuation Expert — 24h Response</h2>
            <p>
              Need an independent business valuation? We're here to help.
              Contact us today for a scoping consultation.
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

export default ValuationServicesLuxembourg
