import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../ui/SEOHead'
import { getFAQSchema } from '../../utils/seo'
import './ServicePages.css'

const TreasuryManagementLuxembourg = () => {
  const faqs = [
    {
      question: 'What is treasury management and why do SMEs need it?',
      answer: 'Treasury management optimizes cash flow, working capital, and financial risk. SMEs need it to: forecast cash accurately, avoid liquidity crises, reduce idle cash, optimize payment terms, hedge currency/interest rate risk, and improve financial decision-making. Good treasury management prevents cash shortages and maximizes returns on surplus cash.'
    },
    {
      question: 'What is a 13-week cash flow forecast?',
      answer: 'A 13-week (rolling quarterly) cash flow forecast projects cash inflows and outflows week-by-week for the next 13 weeks. It includes: customer payments, supplier payments, payroll, taxes, debt service, and capex. Updated weekly, it provides early warning of cash shortfalls and helps prioritize payments. Essential for SMEs in growth or turnaround situations.'
    },
    {
      question: 'How can I improve my company\'s working capital?',
      answer: 'Working capital improvements focus on: (1) Accounts receivable — accelerate collections, offer early payment discounts, tighten credit terms; (2) Inventory — reduce excess stock, improve turnover, just-in-time procurement; (3) Accounts payable — extend payment terms without damaging relationships, prioritize supplier payments strategically. We analyze your cash conversion cycle and implement quick wins.'
    },
    {
      question: 'What is FX hedging and when do I need it?',
      answer: 'FX (foreign exchange) hedging protects against currency fluctuations when you have foreign revenue or costs. Common tools: forward contracts (lock in exchange rate), options (protect downside, keep upside), natural hedging (match currency of revenues and costs). You need FX hedging if >20% of revenue/costs are in foreign currency or margins are tight.'
    },
    {
      question: 'How much does treasury management cost?',
      answer: 'Treasury management is typically structured as a monthly retainer: €2,000–€10,000/month depending on company size and complexity. Includes: weekly cash forecasts, monthly reporting, working capital analysis, and ad-hoc advisory. One-time projects (cash flow model setup, hedging strategy) are €5,000–€15,000. We tailor scope to your needs and budget.'
    },
    {
      question: 'What is the cash conversion cycle?',
      answer: 'The cash conversion cycle (CCC) measures how long cash is tied up in operations. Formula: Days Inventory Outstanding + Days Sales Outstanding - Days Payable Outstanding. Example: If you hold inventory for 30 days, collect from customers in 45 days, and pay suppliers in 30 days, your CCC is 45 days. Shorter is better—means faster cash recovery.'
    },
    {
      question: 'Can you help set up a treasury management system?',
      answer: 'Yes. We help implement treasury systems: (1) Manual: Excel-based cash forecast templates and dashboards; (2) Semi-automated: Integration with accounting software (QuickBooks, Xero, SAP); (3) Fully automated: Treasury management software (Kyriba, GTreasury) for large enterprises. We select and implement the right solution for your size and complexity.'
    },
    {
      question: 'What is interest rate hedging?',
      answer: 'Interest rate hedging protects against rising borrowing costs. Common tools: interest rate swaps (convert variable to fixed rate), caps (set maximum rate), collars (set floor and ceiling). You need hedging if you have variable-rate debt (EURIBOR + margin) and rising rates would hurt profitability. We model scenarios and recommend optimal hedging strategy.'
    }
  ]

  const faqSchema = getFAQSchema(faqs)

  return (
    <div className="service-page">
      <SEOHead
        title="Treasury Management for SMEs Luxembourg | Advensys"
        description="Cash forecasting, working capital optimization, FX hedging, liquidity planning for Luxembourg companies."
        keywords="treasury management Luxembourg, cash flow forecasting, working capital, FX hedging, liquidity management"
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
          <h1>Treasury Management for SMEs Luxembourg</h1>
          <p className="service-intro">
            Cash flow forecasting, working capital optimization, FX hedging, and liquidity planning for Luxembourg companies
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
            <li><strong>What we do:</strong> 13-week cash forecasts, working capital improvement, FX/interest rate hedging, liquidity planning</li>
            <li><strong>Who it's for:</strong> Luxembourg SMEs, international groups, growth companies, turnaround situations</li>
            <li><strong>Timeline:</strong> Ongoing monthly retainer (setup: 2–4 weeks)</li>
            <li><strong>Deliverables:</strong> Weekly cash forecasts, monthly treasury reports, annual cash planning, hedging recommendations</li>
            <li><strong>Industries:</strong> FinTech, logistics, manufacturing, real estate, healthcare, professional services</li>
            <li><strong>Response time:</strong> <strong style={{ color: '#0066cc' }}>24-hour initial response</strong> — setup call within 2–3 days</li>
          </ul>
        </section>

        {/* Plain Definition - AI-SEO */}
        <section style={{ marginBottom: '2rem', padding: '1.5rem', background: '#fff3cd', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.3rem', marginTop: 0 }}>What is Treasury Management?</h2>
          <p style={{ marginBottom: 0, lineHeight: '1.7' }}>
            Treasury management optimizes a company's cash flow, working capital, and financial risk. It includes cash flow forecasting (predicting inflows/outflows),
            working capital management (receivables, inventory, payables), liquidity planning (ensuring sufficient cash), and risk management (FX and interest rate hedging).
            In Luxembourg, treasury management helps companies navigate multi-currency operations, cross-border cash pooling, and regulatory requirements.
            <strong> Advensys In Finance</strong> provides outsourced treasury services for SMEs and mid-market companies.
          </p>
        </section>

        {/* Main Content */}
        <article className="service-content">
          {/* Services Overview */}
          <section className="service-details">
            <h2>Our Treasury Management Services</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
              We offer comprehensive treasury solutions tailored to Luxembourg SMEs:
            </p>

            <div className="detail-grid">
              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Cash Flow Forecasting</h3>
                <p>Predict cash inflows and outflows to prevent shortages</p>
                <ul>
                  <li><strong>13-week rolling forecast:</strong> Weekly view of next 3 months</li>
                  <li><strong>Annual cash budget:</strong> Monthly view for 12-month planning</li>
                  <li><strong>Scenario modeling:</strong> Best/base/worst case scenarios</li>
                  <li>Track: customer payments, supplier payments, payroll, taxes, debt service, capex</li>
                  <li>Update weekly with actuals vs. forecast variance analysis</li>
                  <li><strong>Outcome:</strong> Early warning of cash gaps, better payment prioritization</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Working Capital Optimization</h3>
                <p>Free up cash tied up in operations</p>
                <ul>
                  <li><strong>Accounts receivable:</strong> Faster collections, credit term negotiation, early payment discounts</li>
                  <li><strong>Inventory management:</strong> Reduce excess stock, improve turnover, JIT procurement</li>
                  <li><strong>Accounts payable:</strong> Extend payment terms, prioritize supplier payments strategically</li>
                  <li><strong>Cash conversion cycle:</strong> Analyze and reduce DIO + DSO - DPO</li>
                  <li><strong>Outcome:</strong> Reduced working capital needs, improved liquidity</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>FX & Interest Rate Hedging</h3>
                <p>Protect against currency and interest rate volatility</p>
                <ul>
                  <li><strong>FX hedging:</strong> Forward contracts, options, natural hedging for multi-currency exposure</li>
                  <li><strong>Interest rate hedging:</strong> Swaps, caps, collars for variable-rate debt</li>
                  <li>Hedge ratio analysis (% of exposure to hedge)</li>
                  <li>Bank/broker selection and execution support</li>
                  <li>Mark-to-market reporting and accounting treatment</li>
                  <li><strong>Outcome:</strong> Predictable costs, reduced earnings volatility</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Liquidity Planning & Banking</h3>
                <p>Ensure sufficient cash and optimize banking relationships</p>
                <ul>
                  <li>Minimum cash buffer determination</li>
                  <li>Credit facility sizing and negotiation (revolving credit, overdraft)</li>
                  <li>Cash pooling structures for multi-entity groups</li>
                  <li>Bank relationship management and fee optimization</li>
                  <li>Short-term investment of surplus cash</li>
                  <li><strong>Outcome:</strong> Never run out of cash, optimize borrowing costs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="service-process" style={{ marginTop: '3rem' }}>
            <h2>Treasury Management Process — How We Work</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Current State Assessment (Week 1)</h3>
                <p>
                  <strong>What happens:</strong> Analyze current cash position, working capital metrics, banking relationships, currency/interest rate exposure.<br />
                  <strong>Outcome:</strong> Treasury health check, key risks identified, improvement opportunities prioritized.<br />
                  <strong>Duration:</strong> 1 week
                </p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Cash Flow Forecasting Setup (Weeks 2–3)</h3>
                <p>
                  <strong>What happens:</strong> Build 13-week cash forecast model, integrate with accounting system, establish weekly update process.<br />
                  <strong>Outcome:</strong> Live cash forecast with weekly updates, variance analysis, early warning system.<br />
                  <strong>Duration:</strong> 1–2 weeks
                </p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Working Capital Improvement Plan (Weeks 3–4)</h3>
                <p>
                  <strong>What happens:</strong> Analyze AR aging, inventory turnover, AP terms. Identify quick wins (faster collections, reduced stock, extended terms).<br />
                  <strong>Outcome:</strong> Working capital action plan with target reductions (e.g., reduce DSO by 10 days = €X cash freed).<br />
                  <strong>Duration:</strong> 1–2 weeks
                </p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>FX & Interest Rate Hedging (Weeks 4–6)</h3>
                <p>
                  <strong>What happens:</strong> Quantify currency and interest rate exposure, model impact scenarios, design hedging strategy, execute hedges with banks.<br />
                  <strong>Outcome:</strong> Hedging policy, executed forward contracts/swaps, ongoing mark-to-market monitoring.<br />
                  <strong>Duration:</strong> 2–3 weeks
                </p>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <h3>Ongoing Monitoring & Reporting (Monthly)</h3>
                <p>
                  <strong>What happens:</strong> Weekly cash forecast updates, monthly treasury dashboard (cash position, working capital KPIs, hedge performance), quarterly reviews.<br />
                  <strong>Outcome:</strong> Proactive cash management, no surprises, continuous optimization.<br />
                  <strong>Duration:</strong> Ongoing monthly retainer
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
                  <li><strong>Setup phase:</strong> 2–4 weeks (assessment, forecast model, initial recommendations)</li>
                  <li><strong>Ongoing service:</strong> Monthly retainer (weekly updates, monthly reporting, quarterly reviews)</li>
                  <li><strong>Project-based:</strong> 4–8 weeks (one-time working capital improvement, hedging strategy)</li>
                </ul>
              </div>
              <div>
                <h3 style={{ color: '#002b5c', fontSize: '1.1rem' }}>Indicative Pricing</h3>
                <ul style={{ lineHeight: '1.8' }}>
                  <li><strong>Monthly retainer:</strong> €2,000–€10,000/month (depends on company size and complexity)</li>
                  <li><strong>Setup fee:</strong> €5,000–€15,000 (one-time for model build and initial assessment)</li>
                  <li><strong>Project-based:</strong> €5,000–€20,000 (working capital optimization, hedging strategy)</li>
                </ul>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                  Scope and pricing tailored to your needs. We offer flexible arrangements for startups and SMEs.
                </p>
              </div>
            </div>
          </section>

          {/* Key Metrics */}
          <section style={{ marginTop: '3rem' }}>
            <h2>Key Treasury Metrics We Track</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ border: '1px solid #e0e0e0', padding: '1.25rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#002b5c' }}>Days Sales Outstanding (DSO)</h3>
                <p><strong>Formula:</strong> (Accounts Receivable / Revenue) × 365<br />
                <strong>Target:</strong> 30–45 days<br />
                <strong>Meaning:</strong> How long it takes to collect from customers</p>
              </div>
              <div style={{ border: '1px solid #e0e0e0', padding: '1.25rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#002b5c' }}>Days Inventory Outstanding (DIO)</h3>
                <p><strong>Formula:</strong> (Inventory / COGS) × 365<br />
                <strong>Target:</strong> 30–60 days (varies by industry)<br />
                <strong>Meaning:</strong> How long inventory sits before being sold</p>
              </div>
              <div style={{ border: '1px solid #e0e0e0', padding: '1.25rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#002b5c' }}>Days Payable Outstanding (DPO)</h3>
                <p><strong>Formula:</strong> (Accounts Payable / COGS) × 365<br />
                <strong>Target:</strong> 30–60 days<br />
                <strong>Meaning:</strong> How long you take to pay suppliers</p>
              </div>
              <div style={{ border: '1px solid #e0e0e0', padding: '1.25rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#002b5c' }}>Cash Conversion Cycle (CCC)</h3>
                <p><strong>Formula:</strong> DSO + DIO - DPO<br />
                <strong>Target:</strong> &lt;30 days (shorter is better)<br />
                <strong>Meaning:</strong> How long cash is tied up in operations</p>
              </div>
              <div style={{ border: '1px solid #e0e0e0', padding: '1.25rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#002b5c' }}>Current Ratio</h3>
                <p><strong>Formula:</strong> Current Assets / Current Liabilities<br />
                <strong>Target:</strong> 1.5–2.0<br />
                <strong>Meaning:</strong> Ability to pay short-term obligations</p>
              </div>
              <div style={{ border: '1px solid #e0e0e0', padding: '1.25rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#002b5c' }}>Cash Runway</h3>
                <p><strong>Formula:</strong> Cash Balance / Monthly Cash Burn<br />
                <strong>Target:</strong> &gt;6 months<br />
                <strong>Meaning:</strong> How long until you run out of cash</p>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section style={{ marginTop: '3rem', padding: '1.5rem', background: '#e8f4f8', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '1.2rem', marginTop: 0 }}>Related Services</h2>
            <p style={{ marginBottom: '1rem' }}>
              Treasury management often complements other corporate finance services:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem', marginBottom: 0 }}>
              <li><Link to="/services/fundraising-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>Fundraising</Link> — Cash forecasting supports fundraising documentation</li>
              <li><Link to="/services/valuation-services-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>Valuation Services</Link> — DCF valuations require cash flow projections</li>
              <li><Link to="/services/m-and-a-advisory-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>M&A Advisory</Link> — Post-merger working capital integration</li>
              <li><Link to="/services/regulatory-reporting-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>Regulatory Reporting</Link> — Cash flow reporting for regulated entities</li>
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
              Not familiar with treasury terminology? Check our <Link to="/glossary" style={{ color: '#0066cc', fontWeight: 'bold' }}>Finance Glossary</Link> for definitions of:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
              <div>• Working Capital</div>
              <div>• Cash Flow Forecasting</div>
              <div>• FX Hedging</div>
              <div>• Cash Conversion Cycle</div>
              <div>• Days Sales Outstanding (DSO)</div>
              <div>• Current Ratio</div>
              <div>• Liquidity</div>
              <div>• Interest Rate Swap</div>
            </div>
          </section>

          {/* CTA */}
          <section className="service-cta" style={{ marginTop: '3rem' }}>
            <h2>Speak to a Treasury Expert — 24h Response</h2>
            <p>
              Need help managing cash flow or optimizing working capital? We're here to help.
              Contact us today for a treasury health check.
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

export default TreasuryManagementLuxembourg
