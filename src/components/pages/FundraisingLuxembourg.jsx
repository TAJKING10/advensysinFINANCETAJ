import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../ui/SEOHead'
import { getFAQSchema } from '../../utils/seo'
import './ServicePages.css'

const FundraisingLuxembourg = () => {
  const faqs = [
    {
      question: 'What is the difference between debt and equity financing?',
      answer: 'Debt financing (loans, bonds) means borrowing money that must be repaid with interest—you keep ownership but have repayment obligations. Equity financing (selling shares) means giving investors ownership in exchange for capital—no repayment required, but you dilute ownership and share control. Debt is best for stable cash flows; equity for high-growth startups.'
    },
    {
      question: 'How long does a fundraising process typically take?',
      answer: 'Most fundraising rounds take 3–6 months from preparation to closing. Early-stage equity (seed, Series A) can take 4–6 months. Debt financing (bank loans, bonds) typically takes 2–4 months. Timeline depends on investor/lender readiness, due diligence complexity, documentation, and negotiation dynamics.'
    },
    {
      question: 'How are fundraising advisory fees structured?',
      answer: 'Fundraising fees are typically success-based: 2–5% of capital raised, paid at closing. Some advisors charge a small monthly retainer (€5,000–€15,000) plus success fee. For large deals (>€10M), fees may be on a sliding scale. We discuss fee structure transparently during initial consultation.'
    },
    {
      question: 'What documents are needed for fundraising?',
      answer: 'Core documents include: pitch deck (10–15 slides), financial model (3–5 year projections), data room (financials, contracts, legal docs), executive summary, cap table, and term sheet template. For debt, lenders also require: business plan, historical financials (3 years), cash flow forecasts, and collateral documentation.'
    },
    {
      question: 'Can you help with investor introductions?',
      answer: 'Yes. We maintain relationships with PE funds, family offices, VCs, business angels, banks, and alternative lenders in Luxembourg and Europe. We qualify investors/lenders based on your sector, stage, and capital needs—then arrange introductions, manage outreach, and coordinate meetings.'
    },
    {
      question: 'What is a term sheet and how do I negotiate it?',
      answer: 'A term sheet is a non-binding document outlining key deal terms: valuation, investment amount, equity stake, board seats, liquidation preferences, anti-dilution protection, and exit rights. We help review and negotiate term sheets to balance founder control, investor protection, and future fundraising flexibility.'
    },
    {
      question: 'Do you work with early-stage startups or only established companies?',
      answer: 'We work with businesses at all stages. For early-stage startups (seed, pre-seed), we focus on angel and VC fundraising, pitch deck refinement, and financial modeling. For growth-stage and mature companies, we structure debt, mezzanine, private equity, or bond offerings. Each stage requires different preparation and investor targeting.'
    },
    {
      question: 'What ongoing reporting is required after fundraising?',
      answer: 'Investors and lenders require regular reporting. Equity investors typically want: monthly management accounts, quarterly board reports, annual audited financials, and KPI dashboards. Debt lenders require: quarterly financial statements, covenant compliance certificates, and annual business reviews. We help set up reporting systems and templates.'
    }
  ]

  const faqSchema = getFAQSchema(faqs)

  return (
    <div className="service-page">
      <SEOHead
        title="Fundraising in Luxembourg (Debt & Equity) | Advensys"
        description="Structure, documentation, and investor/lender process. Timelines, deliverables, and ongoing reporting."
        keywords="fundraising Luxembourg, debt financing Luxembourg, equity financing Luxembourg, capital raising, investor relations"
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
          <h1>Fundraising in Luxembourg (Debt & Equity)</h1>
          <p className="service-intro">
            Structure, documentation, and investor/lender process for debt and equity capital raises — from pitch deck to closing
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
            <li><strong>What we do:</strong> Fundraising strategy, pitch deck, financial model, investor/lender outreach, term sheet negotiation, closing support</li>
            <li><strong>Who it's for:</strong> Startups (seed, Series A/B), growth companies, SMEs, established firms seeking debt or equity capital</li>
            <li><strong>Timeline:</strong> 3–6 months (preparation to closing)</li>
            <li><strong>Deliverables:</strong> Pitch deck, financial model, data room, investor shortlist, term sheet, closing checklist</li>
            <li><strong>Industries:</strong> FinTech, SaaS, funds, real estate, healthcare, logistics, professional services</li>
            <li><strong>Response time:</strong> <strong style={{ color: '#0066cc' }}>24-hour initial response</strong> — consultation within 2–3 days</li>
          </ul>
        </section>

        {/* Plain Definition - AI-SEO */}
        <section style={{ marginBottom: '2rem', padding: '1.5rem', background: '#fff3cd', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.3rem', marginTop: 0 }}>What is Fundraising Advisory?</h2>
          <p style={{ marginBottom: 0, lineHeight: '1.7' }}>
            Fundraising advisory helps businesses raise capital through debt (loans, bonds) or equity (selling shares to investors). Advisors structure the offering,
            prepare documentation (pitch decks, financial models), identify and approach investors/lenders, negotiate terms, and support closing. In Luxembourg,
            fundraising advisors connect businesses to European and global capital sources while navigating regulatory frameworks (CSSF for regulated entities).
            <strong> Advensys In Finance</strong> provides end-to-end fundraising support for debt and equity capital raises.
          </p>
        </section>

        {/* Main Content */}
        <article className="service-content">
          {/* Services Overview */}
          <section className="service-details">
            <h2>Our Fundraising Services</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
              We offer comprehensive fundraising support for debt and equity capital raises:
            </p>

            <div className="detail-grid">
              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Equity Fundraising</h3>
                <p>Raising capital by selling shares to investors</p>
                <ul>
                  <li><strong>Seed & Pre-seed:</strong> Angel investors, early-stage VCs, accelerators</li>
                  <li><strong>Series A/B/C:</strong> Venture capital, growth equity funds</li>
                  <li><strong>Growth capital:</strong> Private equity, family offices, strategic investors</li>
                  <li><strong>Deliverables:</strong> Pitch deck, financial model, cap table, data room, term sheet</li>
                  <li><strong>Pros:</strong> No repayment obligation, access to investor expertise</li>
                  <li><strong>Cons:</strong> Ownership dilution, loss of some control</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Debt Financing</h3>
                <p>Borrowing capital with repayment obligations</p>
                <ul>
                  <li><strong>Bank loans:</strong> Term loans, revolving credit facilities</li>
                  <li><strong>Mezzanine:</strong> Subordinated debt with equity kicker</li>
                  <li><strong>Bonds:</strong> Corporate bonds, private placements</li>
                  <li><strong>Asset-based lending:</strong> Secured by receivables, inventory, property</li>
                  <li><strong>Pros:</strong> No ownership dilution, tax-deductible interest</li>
                  <li><strong>Cons:</strong> Repayment obligations, covenants, default risk</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="service-process" style={{ marginTop: '3rem' }}>
            <h2>Fundraising Process — Step by Step</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Needs Assessment (Week 1)</h3>
                <p>
                  <strong>What happens:</strong> We assess capital needs, use of funds, growth strategy, financial position, and optimal structure (debt vs equity).<br />
                  <strong>Outcome:</strong> Fundraising strategy, target amount, investor/lender profile, timeline.<br />
                  <strong>Duration:</strong> 1 week
                </p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Strategy & Structure (Weeks 2–3)</h3>
                <p>
                  <strong>What happens:</strong> Define offering terms (valuation, amount, structure), identify target investors/lenders, create outreach strategy.<br />
                  <strong>Outcome:</strong> Fundraising roadmap, long-list of 30–50 potential investors/lenders.<br />
                  <strong>Duration:</strong> 1–2 weeks
                </p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Documentation (Weeks 4–8)</h3>
                <p>
                  <strong>What happens:</strong> Create pitch deck (10–15 slides), financial model (3–5 year projections), executive summary, data room (legal, financial, operational docs).<br />
                  <strong>Outcome:</strong> Investment-ready materials approved by management and ready for distribution.<br />
                  <strong>Duration:</strong> 3–5 weeks
                </p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Investor/Lender Outreach (Weeks 9–16)</h3>
                <p>
                  <strong>What happens:</strong> Confidential outreach to target list, NDA execution, pitch deck distribution, initial meetings, management presentations.<br />
                  <strong>Outcome:</strong> 3–5 interested parties expressing serious interest and requesting additional information.<br />
                  <strong>Duration:</strong> 6–8 weeks
                </p>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <h3>Term Sheet Negotiation (Weeks 17–20)</h3>
                <p>
                  <strong>What happens:</strong> Review indicative offers, negotiate term sheets (valuation, amount, equity %, liquidation preference, board seats, covenants).<br />
                  <strong>Outcome:</strong> Signed term sheet with lead investor/lender. Commitment to proceed to due diligence and closing.<br />
                  <strong>Duration:</strong> 3–4 weeks
                </p>
              </div>
              <div className="step">
                <div className="step-number">6</div>
                <h3>Due Diligence Support (Weeks 21–26)</h3>
                <p>
                  <strong>What happens:</strong> Investor/lender conducts financial, legal, operational DD. We manage Q&A process, provide additional documentation, address concerns.<br />
                  <strong>Outcome:</strong> DD complete with no major issues. Ready for final documentation and closing.<br />
                  <strong>Duration:</strong> 4–6 weeks
                </p>
              </div>
              <div className="step">
                <div className="step-number">7</div>
                <h3>Closing & Ongoing Reporting (Weeks 27+)</h3>
                <p>
                  <strong>What happens:</strong> Final investment/loan agreements signed, funds transferred, cap table updated. Set up ongoing investor/lender reporting (monthly, quarterly).<br />
                  <strong>Outcome:</strong> Capital received. Reporting systems in place. Relationship management ongoing.<br />
                  <strong>Duration:</strong> 1–2 weeks for closing, ongoing reporting thereafter
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
                  <li><strong>Debt financing:</strong> 2–4 months (bank loans, established relationships)</li>
                  <li><strong>Equity (early-stage):</strong> 4–6 months (seed, Series A with multiple investor meetings)</li>
                  <li><strong>Equity (growth-stage):</strong> 3–5 months (Series B+ with established metrics)</li>
                  <li><strong>Complex structures:</strong> 6+ months (multiple tranches, syndicated, cross-border)</li>
                </ul>
              </div>
              <div>
                <h3 style={{ color: '#002b5c', fontSize: '1.1rem' }}>Indicative Pricing</h3>
                <ul style={{ lineHeight: '1.8' }}>
                  <li><strong>Success fee:</strong> 2–5% of capital raised (paid at closing)</li>
                  <li><strong>Monthly retainer:</strong> €5,000–€15,000 (optional, credited against success fee)</li>
                  <li><strong>Example:</strong> €5M equity raise = €150k–€250k success fee (3–5%)</li>
                  <li><strong>Sliding scale:</strong> Higher % on first €2M, lower % on amounts above</li>
                </ul>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                  Fees depend on capital amount, complexity, and stage. We provide transparent proposals after initial consultation.
                </p>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section style={{ marginTop: '3rem' }}>
            <h2>Debt vs Equity Fundraising — Which is Right for You?</h2>
            <p style={{ marginBottom: '1rem' }}>
              Deciding between debt and equity? Here's a detailed comparison:
            </p>
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
                  <td style={{ padding: '0.75rem' }}>No dilution — you keep 100% ownership</td>
                  <td style={{ padding: '0.75rem' }}>Dilution — investors own shares (typically 10–40%)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Repayment</td>
                  <td style={{ padding: '0.75rem' }}>Fixed schedule with principal + interest</td>
                  <td style={{ padding: '0.75rem' }}>No repayment obligation</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Control</td>
                  <td style={{ padding: '0.75rem' }}>Full control (subject to covenants)</td>
                  <td style={{ padding: '0.75rem' }}>Shared control (board seats, voting rights)</td>
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
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Exit requirement</td>
                  <td style={{ padding: '0.75rem' }}>None (just repay on schedule)</td>
                  <td style={{ padding: '0.75rem' }}>Investors expect exit in 5–10 years</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Best for</td>
                  <td style={{ padding: '0.75rem' }}>Stable cash flow, asset-backed, profitable companies</td>
                  <td style={{ padding: '0.75rem' }}>High growth, negative cash flow, startups, scalable models</td>
                </tr>
              </tbody>
            </table>
            <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: '#666' }}>
              Need help deciding? <Link to="/contact" style={{ color: '#0066cc' }}>Speak to an advisor</Link> — we'll analyze your situation and recommend the optimal structure.
            </p>
          </section>

          {/* Internal Links */}
          <section style={{ marginTop: '3rem', padding: '1.5rem', background: '#e8f4f8', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '1.2rem', marginTop: 0 }}>Related Services</h2>
            <p style={{ marginBottom: '1rem' }}>
              Fundraising often requires complementary services:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem', marginBottom: 0 }}>
              <li><Link to="/services/valuation-services-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>Business Valuation</Link> — Independent valuation for equity fundraising</li>
              <li><Link to="/services/treasury-management-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>Treasury Management</Link> — Cash flow forecasting and working capital optimization</li>
              <li><Link to="/services/m-and-a-advisory-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>M&A Advisory</Link> — Alternative exit route for investors</li>
              <li><Link to="/services/regulatory-reporting-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>Regulatory Reporting</Link> — Investor reporting and compliance</li>
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
              Not familiar with fundraising terminology? Check our <Link to="/glossary" style={{ color: '#0066cc', fontWeight: 'bold' }}>Finance Glossary</Link> for definitions of:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
              <div>• Equity Financing</div>
              <div>• Debt Financing</div>
              <div>• Term Sheet</div>
              <div>• Cap Table</div>
              <div>• Covenants</div>
              <div>• Valuation</div>
              <div>• Liquidation Preference</div>
              <div>• Anti-dilution Protection</div>
            </div>
          </section>

          {/* CTA */}
          <section className="service-cta" style={{ marginTop: '3rem' }}>
            <h2>Speak to a Fundraising Advisor — 24h Response</h2>
            <p>
              Planning to raise capital for your business? We're here to help.
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

export default FundraisingLuxembourg
