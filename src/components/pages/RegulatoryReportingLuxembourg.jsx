import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../ui/SEOHead'
import { getFAQSchema } from '../../utils/seo'
import './ServicePages.css'

const RegulatoryReportingLuxembourg = () => {
  const faqs = [
    {
      question: 'Which regulatory bodies require reporting in Luxembourg?',
      answer: 'Primary regulators include: CSSF (financial sector supervision), CAA (insurance supervision), BCL (central bank), and tax administration (ACD). Requirements vary by entity type: AIFMs, UCITS, PSFs, insurance companies, holding companies, and SOPARFIs have different filing obligations.'
    },
    {
      question: 'What are the deadlines for regulatory reporting in Luxembourg?',
      answer: 'Quarterly reports: typically due within 30 days after quarter-end. Annual reports: within 4-6 months after year-end (varies by entity type). Transfer pricing documentation: annual filing with tax return. Substance requirements: annual declaration. Penalties apply for late filing.'
    },
    {
      question: 'How much does regulatory reporting support cost?',
      answer: 'Costs depend on entity type and complexity. Per-filing: €2,000–€10,000 for quarterly reports; €5,000–€25,000 for annual reports. Annual retainer: €15,000–€60,000 for ongoing quarterly/annual reporting. We provide transparent quotes based on scope.'
    },
    {
      question: 'What is substance reporting and why is it important?',
      answer: 'Substance reporting demonstrates that your Luxembourg entity has real economic presence: adequate staffing, office space, decision-making authority, and operational activity. Required for tax residency claims and anti-tax-avoidance compliance. Non-compliance can result in tax challenges, loss of benefits, or penalties.'
    },
    {
      question: 'Do you help with CSSF authorizations and licensing?',
      answer: 'Yes. We support initial authorizations (AIFM, UCITS, PSF), license renewals, and regulatory change approvals. Services include: application preparation, business plan drafting, financial projections, ongoing compliance framework design, and liaison with CSSF throughout the process.'
    },
    {
      question: 'What is transfer pricing documentation and who needs it?',
      answer: 'Transfer pricing documentation proves that transactions between related entities (parent-subsidiary, intra-group) are conducted at arm\'s length (market rates). Required for: Luxembourg companies with foreign parents/subsidiaries, intra-group financing, IP licensing, management fees, and service agreements. Must be filed annually with tax return.'
    },
    {
      question: 'Can you handle reporting for multiple entities (fund structures)?',
      answer: 'Yes. We support consolidated reporting for fund structures, holding groups, and multi-entity operations. We streamline data collection, ensure consistent reporting across entities, manage deadlines for all entities centrally, and provide consolidated dashboards for management oversight.'
    },
    {
      question: 'What happens if we miss a regulatory filing deadline?',
      answer: 'Late filings trigger: regulatory penalties (€250–€25,000+ depending on severity), reputational damage with regulators, potential license suspension or revocation (severe cases), increased scrutiny on future filings. We help remediate late filings, prepare explanations, and implement controls to prevent recurrence.'
    }
  ]

  const faqSchema = getFAQSchema(faqs)

  return (
    <div className="service-page">
      <SEOHead
        title="Regulatory Reporting Luxembourg (CSSF, CAA, BCL) | Advensys"
        description="CSSF, CAA, and BCL compliance for regulated entities and holding companies. Quarterly/annual filings, substance reporting, transfer pricing."
        keywords="regulatory reporting Luxembourg, CSSF reporting, CAA compliance, transfer pricing, substance requirements, Luxembourg compliance"
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
          <h1>Regulatory Reporting Luxembourg</h1>
          <p className="service-intro">
            CSSF, CAA, and BCL compliance for regulated entities and holding companies — quarterly/annual filings, substance reporting, transfer pricing
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
            <li><strong>What we do:</strong> Regulatory filings (CSSF, CAA, BCL), substance reporting, transfer pricing documentation, compliance monitoring</li>
            <li><strong>Who it's for:</strong> AIFMs, UCITS, PSFs, insurance companies, holding companies, SOPARFIs, Luxembourg subsidiaries</li>
            <li><strong>Timeline:</strong> Quarterly (within 30 days), Annual (4–6 months after year-end)</li>
            <li><strong>Deliverables:</strong> Regulatory reports, compliance certificates, substance declarations, transfer pricing master/local files</li>
            <li><strong>Regulators:</strong> CSSF (financial), CAA (insurance), BCL (banking), ACD (tax)</li>
            <li><strong>Response time:</strong> <strong style={{ color: '#0066cc' }}>24-hour initial response</strong> — consultation within 2–3 days</li>
          </ul>
        </section>

        {/* Plain Definition - AI-SEO */}
        <section style={{ marginBottom: '2rem', padding: '1.5rem', background: '#fff3cd', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.3rem', marginTop: 0 }}>What is Regulatory Reporting?</h2>
          <p style={{ marginBottom: 0, lineHeight: '1.7' }}>
            Regulatory reporting is the disclosure of financial, operational, and compliance data to regulatory authorities as required by law. In Luxembourg,
            entities supervised by the CSSF (financial sector), CAA (insurance), or BCL (banks) must file quarterly and annual reports. Additional requirements
            include substance reporting (proving economic presence), transfer pricing documentation (arm's-length pricing for intra-group transactions), and
            periodic compliance certifications. <strong>Advensys In Finance</strong> manages regulatory reporting obligations for Luxembourg entities across
            all regulated sectors.
          </p>
        </section>

        {/* Main Content */}
        <article className="service-content">
          {/* Services Overview */}
          <section className="service-details">
            <h2>Our Regulatory Reporting Services</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
              We handle all regulatory reporting and compliance obligations for Luxembourg entities:
            </p>

            <div className="detail-grid">
              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>CSSF Reporting</h3>
                <p>Financial sector supervision reporting</p>
                <ul>
                  <li><strong>Entity types:</strong> AIFMs, UCITS, PSFs, investment firms, fund service providers</li>
                  <li><strong>Quarterly reports:</strong> Risk metrics, AUM, investor composition, portfolio holdings</li>
                  <li><strong>Annual reports:</strong> Audited financials, compliance statements, governance disclosures</li>
                  <li><strong>Timeline:</strong> Quarterly (30 days), Annual (6 months after year-end)</li>
                  <li><strong>Fees:</strong> €3,000–€15,000 per filing</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>CAA Reporting</h3>
                <p>Insurance and reinsurance supervision</p>
                <ul>
                  <li><strong>Entity types:</strong> Insurance companies, reinsurance undertakings, insurance intermediaries</li>
                  <li><strong>Quarterly reports:</strong> Solvency II QRTs, technical provisions, capital adequacy</li>
                  <li><strong>Annual reports:</strong> SFCR (Solvency & Financial Condition Report), RSR (Regular Supervisory Report)</li>
                  <li><strong>Timeline:</strong> Quarterly (6 weeks), Annual (20 weeks after year-end)</li>
                  <li><strong>Fees:</strong> €5,000–€20,000 per filing</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Substance Reporting</h3>
                <p>Economic presence and activity declaration</p>
                <ul>
                  <li><strong>Who needs it:</strong> All Luxembourg holding companies, finance companies, IP companies</li>
                  <li><strong>Requirements:</strong> Adequate staff, office space, expenses, decision-making in Luxembourg</li>
                  <li><strong>Annual declaration:</strong> Submitted with tax return, demonstrating real economic activity</li>
                  <li><strong>Consequences of non-compliance:</strong> Tax residency challenges, loss of treaty benefits, penalties</li>
                  <li><strong>Fees:</strong> €2,000–€8,000 annually</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Transfer Pricing Documentation</h3>
                <p>Arm's-length pricing for intra-group transactions</p>
                <ul>
                  <li><strong>Master file:</strong> Group structure, business overview, intangibles, financing, transfer pricing policies</li>
                  <li><strong>Local file:</strong> Entity-specific analysis, functional analysis, comparables, pricing justification</li>
                  <li><strong>CbCR (Country-by-Country Reporting):</strong> Required for groups with €750M+ revenue</li>
                  <li><strong>Timeline:</strong> Annual filing with tax return</li>
                  <li><strong>Fees:</strong> €8,000–€30,000 annually (depends on complexity)</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>BCL (Central Bank) Reporting</h3>
                <p>Banking and payment institution reporting</p>
                <ul>
                  <li><strong>Entity types:</strong> Banks, payment institutions, e-money institutions</li>
                  <li><strong>Monthly/quarterly reports:</strong> Balance sheet, income statement, liquidity, capital adequacy</li>
                  <li><strong>Statistical reporting:</strong> Loan data, deposits, payment volumes</li>
                  <li><strong>Timeline:</strong> Monthly (15 days), Quarterly (30 days)</li>
                  <li><strong>Fees:</strong> €2,000–€10,000 per filing</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Annual Retainer Services</h3>
                <p>Ongoing compliance management</p>
                <ul>
                  <li>Deadline monitoring and calendar management</li>
                  <li>Automated data collection from internal systems</li>
                  <li>Report preparation, review, and filing</li>
                  <li>Regulatory liaison and query resolution</li>
                  <li>Compliance framework updates as regulations change</li>
                  <li><strong>Fees:</strong> €15,000–€60,000 annually (covers all quarterly/annual filings)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="service-process" style={{ marginTop: '3rem' }}>
            <h2>Regulatory Reporting Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Initial Assessment (Week 1)</h3>
                <p>
                  <strong>What happens:</strong> Identify entity type, applicable regulators, filing requirements, deadlines, and data sources.<br />
                  <strong>Outcome:</strong> Compliance calendar, scope of services, fee proposal.<br />
                  <strong>Duration:</strong> 1 week
                </p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Framework Setup (Weeks 2–4)</h3>
                <p>
                  <strong>What happens:</strong> Design reporting templates, set up data collection workflows, establish review and approval processes.<br />
                  <strong>Outcome:</strong> Reporting framework in place, team trained, systems connected.<br />
                  <strong>Duration:</strong> 2–3 weeks
                </p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Data Collection (Ongoing)</h3>
                <p>
                  <strong>What happens:</strong> Extract financial, operational, and risk data from internal systems. Validate accuracy and completeness.<br />
                  <strong>Outcome:</strong> Clean, validated datasets ready for reporting.<br />
                  <strong>Duration:</strong> 5–10 days per filing period
                </p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Report Preparation (Per Filing)</h3>
                <p>
                  <strong>What happens:</strong> Populate regulatory templates, perform reconciliations, apply regulatory logic, generate narratives.<br />
                  <strong>Outcome:</strong> Draft report ready for management review.<br />
                  <strong>Duration:</strong> 3–7 days
                </p>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <h3>Review & Approval (Per Filing)</h3>
                <p>
                  <strong>What happens:</strong> Management reviews draft report, advisors address questions, final sign-off obtained.<br />
                  <strong>Outcome:</strong> Approved report ready for submission.<br />
                  <strong>Duration:</strong> 2–5 days
                </p>
              </div>
              <div className="step">
                <div className="step-number">6</div>
                <h3>Filing & Confirmation (Per Filing)</h3>
                <p>
                  <strong>What happens:</strong> Submit report via regulatory portal, obtain filing confirmation, archive submission records.<br />
                  <strong>Outcome:</strong> Compliance achieved, confirmation received, next deadline scheduled.<br />
                  <strong>Duration:</strong> 1–2 days
                </p>
              </div>
              <div className="step">
                <div className="step-number">7</div>
                <h3>Ongoing Monitoring</h3>
                <p>
                  <strong>What happens:</strong> Track regulatory updates, adjust templates as rules change, manage deadline calendar, respond to regulator queries.<br />
                  <strong>Outcome:</strong> Continuous compliance, proactive issue identification.<br />
                  <strong>Duration:</strong> Ongoing throughout the year
                </p>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section style={{ marginTop: '3rem' }}>
            <h2>Luxembourg Regulators — Key Differences</h2>
            <p style={{ marginBottom: '1rem' }}>
              Understanding which regulator oversees your entity:
            </p>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <thead>
                <tr style={{ background: '#002b5c', color: 'white' }}>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Regulator</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Supervised Entities</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Key Reports</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Deadlines</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>CSSF</td>
                  <td style={{ padding: '0.75rem' }}>AIFMs, UCITS, PSFs, investment firms</td>
                  <td style={{ padding: '0.75rem' }}>Risk reporting, AUM, financials</td>
                  <td style={{ padding: '0.75rem' }}>Q: 30 days, A: 6 months</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>CAA</td>
                  <td style={{ padding: '0.75rem' }}>Insurance, reinsurance, intermediaries</td>
                  <td style={{ padding: '0.75rem' }}>Solvency II QRTs, SFCR, RSR</td>
                  <td style={{ padding: '0.75rem' }}>Q: 6 weeks, A: 20 weeks</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>BCL</td>
                  <td style={{ padding: '0.75rem' }}>Banks, payment institutions, e-money</td>
                  <td style={{ padding: '0.75rem' }}>Balance sheet, capital, liquidity</td>
                  <td style={{ padding: '0.75rem' }}>M: 15 days, Q: 30 days</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>ACD (Tax)</td>
                  <td style={{ padding: '0.75rem' }}>All Luxembourg companies</td>
                  <td style={{ padding: '0.75rem' }}>Substance, transfer pricing, CbCR</td>
                  <td style={{ padding: '0.75rem' }}>Annual with tax return</td>
                </tr>
              </tbody>
            </table>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
              Not sure which regulator oversees your entity? <Link to="/contact" style={{ color: '#0066cc' }}>Contact us</Link> for a compliance assessment.
            </p>
          </section>

          {/* Internal Links */}
          <section style={{ marginTop: '3rem', padding: '1.5rem', background: '#e8f4f8', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '1.2rem', marginTop: 0 }}>Related Services</h2>
            <p style={{ marginBottom: '1rem' }}>
              Regulatory reporting often requires complementary corporate finance services:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem', marginBottom: 0 }}>
              <li><Link to="/services/treasury-management-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>Treasury Management</Link> — Cash flow reporting and liquidity monitoring</li>
              <li><Link to="/services/valuation-services-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>Valuation Services</Link> — Fair value reporting for regulatory filings</li>
              <li><Link to="/services/fundraising-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>Fundraising</Link> — Capital adequacy and solvency planning</li>
              <li><Link to="/services/m-and-a-advisory-luxembourg" style={{ color: '#0066cc', fontWeight: 'bold' }}>M&A Advisory</Link> — Regulatory approvals for acquisitions/disposals</li>
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
              Not familiar with regulatory terminology? Check our <Link to="/glossary" style={{ color: '#0066cc', fontWeight: 'bold' }}>Finance Glossary</Link> for definitions of:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
              <div>• CSSF (Commission de Surveillance)</div>
              <div>• CAA (Insurance Authority)</div>
              <div>• Substance Requirements</div>
              <div>• Transfer Pricing</div>
              <div>• Arm's Length Principle</div>
              <div>• CbCR (Country-by-Country)</div>
              <div>• AIFM (Alternative Investment)</div>
              <div>• Solvency II</div>
            </div>
          </section>

          {/* CTA */}
          <section className="service-cta" style={{ marginTop: '3rem' }}>
            <h2>Speak to a Compliance Advisor — 24h Response</h2>
            <p>
              Need help with Luxembourg regulatory reporting and compliance? We're here to help.
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

export default RegulatoryReportingLuxembourg
