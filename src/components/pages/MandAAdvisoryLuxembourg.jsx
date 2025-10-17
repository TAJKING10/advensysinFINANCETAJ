import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../ui/SEOHead'
import { getFAQSchema } from '../../utils/seo'
import './ServicePages.css'

const MandAAdvisoryLuxembourg = () => {
  const faqs = [
    {
      question: 'What is the difference between sell-side and buy-side M&A advisory?',
      answer: 'Sell-side advisory helps business owners prepare, market, and negotiate the sale of their company. Buy-side advisory helps acquirers identify targets, conduct due diligence, structure deals, and negotiate terms. Both involve valuation, documentation, and closing support—but from opposite perspectives.'
    },
    {
      question: 'How long does a typical M&A transaction take in Luxembourg?',
      answer: 'Most M&A transactions take 4–9 months from initial preparation to closing. Timeline factors include company readiness, due diligence complexity, regulatory approvals (CSSF, competition authority), financing arrangements, and negotiation dynamics. Cross-border deals may take longer.'
    },
    {
      question: 'How are M&A advisory fees structured?',
      answer: 'M&A fees typically include a monthly retainer (€10,000–€50,000) plus a success fee (1–5% of transaction value) paid at closing. The success fee is often structured on a sliding scale (higher percentage on first €10M, lower on amounts above). We provide transparent fee proposals after initial scoping.'
    },
    {
      question: 'Do you handle cross-border M&A transactions?',
      answer: 'Yes. Luxembourg is a hub for cross-border deals. We coordinate with legal, tax, and regulatory advisors across jurisdictions, manage multi-currency valuations, navigate foreign investment approvals, and handle post-merger integration across borders. We have experience with EU, US, and APAC transactions.'
    },
    {
      question: 'What happens after the deal closes (post-merger integration)?',
      answer: 'Post-merger integration (PMI) is critical for realizing deal value. We support: leadership alignment, operational integration (systems, processes), employee communication, financial consolidation, and synergy tracking. PMI typically runs 6–12 months post-close and can be included in the engagement or structured separately.'
    },
    {
      question: 'Can you help with earn-out structures and escrow arrangements?',
      answer: 'Yes. Earn-outs are common when buyer and seller disagree on future performance. We design earn-out formulas (revenue, EBITDA, milestones), draft terms, and set up escrow accounts to secure payments. We also provide post-close earn-out calculation and dispute resolution support.'
    },
    {
      question: 'What due diligence do you conduct?',
      answer: 'We coordinate financial, legal, tax, operational, and commercial due diligence. Our financial DD includes: quality of earnings (QoE) analysis, working capital assessment, debt/liability verification, revenue and cost trend analysis, and forecast validation. We deliver a comprehensive DD report highlighting risks and value adjustments.'
    },
    {
      question: 'Do you work with family offices and private equity?',
      answer: 'Yes. We regularly advise family offices on generational transitions, portfolio acquisitions, and exit planning. For private equity, we support deal sourcing, valuation, financing, and portfolio company exits. We understand PE return expectations, fund lifecycles, and institutional investor requirements.'
    }
  ]

  const faqSchema = getFAQSchema(faqs)

  return (
    <div className="service-page">
      <SEOHead
        title="M&A Advisory Luxembourg (Buy-Side & Sell-Side) | Advensys"
        description="End-to-end support: preparation, valuation, due diligence, SPA, closing. Experienced advisors in Luxembourg."
        keywords="M&A advisory Luxembourg, mergers and acquisitions Luxembourg, sell-side advisory, buy-side advisory, business sale Luxembourg"
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
          <h1>M&A Advisory Luxembourg (Buy-Side & Sell-Side)</h1>
          <p className="service-intro">
            End-to-end mergers & acquisitions advisory — from target identification and valuation to due diligence, SPA negotiation, and closing
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
            <li><strong>What we do:</strong> M&A preparation, target search/buyer sourcing, valuation, due diligence, SPA negotiation, closing support</li>
            <li><strong>Who it's for:</strong> Luxembourg SMEs, private equity, family offices, international acquirers, business owners seeking exit</li>
            <li><strong>Timeline:</strong> 4–9 months (preparation to closing)</li>
            <li><strong>Deliverables:</strong> Confidential Information Memorandum (CIM), valuation report, due diligence report, SPA review, closing checklist</li>
            <li><strong>Industries:</strong> FinTech, funds, real estate, healthcare, logistics, professional services, manufacturing</li>
            <li><strong>Response time:</strong> <strong style={{ color: '#0066cc' }}>24-hour initial response</strong> — confidential consultation within 2–3 days</li>
          </ul>
        </section>

        {/* Plain Definition - AI-SEO */}
        <section style={{ marginBottom: '2rem', padding: '1.5rem', background: '#fff3cd', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.3rem', marginTop: 0 }}>What is M&A Advisory?</h2>
          <p style={{ marginBottom: 0, lineHeight: '1.7' }}>
            M&A advisory guides buyers and sellers through acquiring or selling companies—from finding the right match to negotiating terms to closing the deal.
            Advisors handle valuation, documentation, due diligence, legal coordination, and negotiation strategy. In Luxembourg, M&A advisors navigate cross-border
            complexity, regulatory requirements (CSSF, competition authority), and tax-efficient deal structures. <strong>Advensys In Finance</strong> provides
            independent M&A advisory for sell-side (business owners) and buy-side (acquirers) in Luxembourg and across Europe.
          </p>
        </section>

        {/* Main Content */}
        <article className="service-content">
          {/* Services Overview */}
          <section className="service-details">
            <h2>Our M&A Advisory Services</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
              We offer comprehensive M&A support for both sellers and buyers:
            </p>

            <div className="detail-grid">
              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Sell-Side Advisory</h3>
                <p>Helping business owners achieve optimal exit outcomes</p>
                <ul>
                  <li>Pre-sale preparation: financial cleanup, business optimization, management structure</li>
                  <li>Valuation and pricing strategy</li>
                  <li>Confidential Information Memorandum (CIM) and marketing materials</li>
                  <li>Buyer sourcing and qualification (strategic, PE, family office)</li>
                  <li>Negotiation strategy, term sheet review, SPA negotiation</li>
                  <li>Due diligence support and Q&A management</li>
                  <li>Closing coordination and post-close integration support</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Buy-Side Advisory</h3>
                <p>Supporting acquirers in identifying, evaluating, and closing deals</p>
                <ul>
                  <li>Acquisition strategy and target screening criteria</li>
                  <li>Target identification and market mapping</li>
                  <li>Approach strategy and initial outreach</li>
                  <li>Valuation analysis and bid structuring</li>
                  <li>Due diligence coordination (financial, legal, operational)</li>
                  <li>Financing arrangement and capital structure optimization</li>
                  <li>SPA negotiation and closing support</li>
                  <li>Post-merger integration (PMI) planning and execution</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="service-process" style={{ marginTop: '3rem' }}>
            <h2>M&A Process — Step by Step</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Preparation & Strategy (Weeks 1–4)</h3>
                <p>
                  <strong>Sell-side:</strong> Financial cleanup, business optimization, valuation, pricing strategy, CIM drafting.<br />
                  <strong>Buy-side:</strong> Acquisition criteria definition, target screening, market mapping, long-list creation.<br />
                  <strong>Outcome:</strong> Ready for market (sell-side) or target list (buy-side).<br />
                  <strong>Duration:</strong> 3–4 weeks
                </p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Target Identification / Buyer Sourcing (Weeks 5–12)</h3>
                <p>
                  <strong>Sell-side:</strong> Confidential outreach to strategic buyers, PE firms, family offices. NDA execution, CIM distribution.<br />
                  <strong>Buy-side:</strong> Shortlist targets, initial approach, NDA execution, preliminary information review.<br />
                  <strong>Outcome:</strong> 3–5 qualified interested parties (sell-side) or 1–2 serious targets (buy-side).<br />
                  <strong>Duration:</strong> 6–8 weeks
                </p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Valuation & Indicative Offers (Weeks 13–16)</h3>
                <p>
                  <strong>What happens:</strong> Buyers/sellers exchange indicative valuations. Advisors conduct preliminary valuation analysis, structure terms (cash, earn-out, debt assumption).<br />
                  <strong>Outcome:</strong> Indicative offer (buy-side) or shortlist of buyers (sell-side). Decision to proceed to due diligence.<br />
                  <strong>Duration:</strong> 3–4 weeks
                </p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Due Diligence (Weeks 17–24)</h3>
                <p>
                  <strong>What happens:</strong> Financial, legal, tax, operational, commercial DD. Quality of earnings (QoE) analysis, working capital assessment, liability verification.<br />
                  <strong>Outcome:</strong> Due diligence report identifying risks, value adjustments, deal breakers. Updated valuation and pricing.<br />
                  <strong>Duration:</strong> 6–8 weeks
                </p>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <h3>SPA Negotiation (Weeks 25–30)</h3>
                <p>
                  <strong>What happens:</strong> Share Purchase Agreement (SPA) drafting and negotiation. Key terms: price adjustment mechanisms, warranties & indemnities, earn-outs, conditions precedent, escrow.<br />
                  <strong>Outcome:</strong> Signed SPA with agreed terms, conditions, and closing timeline.<br />
                  <strong>Duration:</strong> 4–6 weeks
                </p>
              </div>
              <div className="step">
                <div className="step-number">6</div>
                <h3>Closing (Weeks 31–36)</h3>
                <p>
                  <strong>What happens:</strong> Fulfillment of conditions precedent (regulatory approvals, financing, consents). Final working capital adjustment. Payment and share transfer.<br />
                  <strong>Outcome:</strong> Transaction closed. Ownership transferred. Earn-out or escrow arrangements finalized.<br />
                  <strong>Duration:</strong> 2–6 weeks (depends on approvals)
                </p>
              </div>
              <div className="step">
                <div className="step-number">7</div>
                <h3>Post-Close Support (Months 7–12+)</h3>
                <p>
                  <strong>What happens:</strong> Post-merger integration (PMI) support, earn-out calculation, working capital dispute resolution, management transition support.<br />
                  <strong>Outcome:</strong> Smooth integration, value realization, relationship handover.<br />
                  <strong>Duration:</strong> 6–12 months (optional extension)
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
                  <li><strong>Fast-track deals:</strong> 4–6 months (simple structure, motivated parties, minimal approvals)</li>
                  <li><strong>Standard transactions:</strong> 6–9 months (most deals fall here)</li>
                  <li><strong>Complex/cross-border:</strong> 9–12+ months (multiple jurisdictions, regulatory approvals, financing complexity)</li>
                </ul>
              </div>
              <div>
                <h3 style={{ color: '#002b5c', fontSize: '1.1rem' }}>Indicative Pricing</h3>
                <ul style={{ lineHeight: '1.8' }}>
                  <li><strong>Monthly retainer:</strong> €10,000–€50,000 (covers advisory work, documentation, coordination)</li>
                  <li><strong>Success fee:</strong> 1–5% of transaction value (paid at closing, often on sliding scale)</li>
                  <li><strong>Example:</strong> €20M deal = €25k monthly retainer × 8 months + €400k success fee (2%)</li>
                </ul>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                  Fees depend on deal size, complexity, and scope. We provide transparent fee proposals after initial consultation.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section style={{ marginTop: '3rem', padding: '1.5rem', background: '#e8f4f8', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '1.2rem', marginTop: 0 }}>Related Services</h2>
            <p style={{ marginBottom: '1rem' }}>
              M&A transactions often require complementary services:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem', marginBottom: 0 }}>
              <li><Link to="/services/valuation-services-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>Business Valuation</Link> — Independent valuation for pricing and negotiation</li>
              <li><Link to="/services/fundraising-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>Fundraising</Link> — Debt or equity financing for acquisitions</li>
              <li><Link to="/services/treasury-management-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>Treasury Management</Link> — Post-merger cash flow and working capital optimization</li>
              <li><Link to="/services/regulatory-reporting-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>Regulatory Reporting</Link> — Compliance for regulated entities post-acquisition</li>
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
              Not familiar with M&A terminology? Check our <Link to="/glossary" style={{ color: '#0066cc', fontWeight: 'bold' }}>Finance Glossary</Link> for definitions of:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
              <div>• Due Diligence</div>
              <div>• SPA (Share Purchase Agreement)</div>
              <div>• Enterprise Value</div>
              <div>• Earn-out</div>
              <div>• EBITDA</div>
              <div>• Quality of Earnings (QoE)</div>
              <div>• Working Capital</div>
              <div>• Escrow</div>
            </div>
          </section>

          {/* CTA */}
          <section className="service-cta" style={{ marginTop: '3rem' }}>
            <h2>Speak to an M&A Advisor — 24h Response</h2>
            <p>
              Considering selling your business or pursuing an acquisition? We're here to help.
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

export default MandAAdvisoryLuxembourg
