import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import SEOHead from '../ui/SEOHead'
import { getFAQSchema } from '../../utils/seo'
import './ServicePages.css'

const InsuranceService = () => {
  const { t } = useLanguage()

  const faqs = [
    {
      question: 'What types of insurance does Advensys In Finance offer in Luxembourg?',
      answer: 'We offer comprehensive insurance solutions: Life Insurance (term, whole, universal, variable), Health Insurance (individual, family, group, international), Property Insurance (homeowners, renters, commercial), Business Insurance (liability, professional indemnity, cyber), and Auto Insurance. All policies are tailored to Luxembourg regulations and EU directives.'
    },
    {
      question: 'How much does insurance cost in Luxembourg?',
      answer: 'Costs vary by coverage type and individual circumstances. Life insurance: €50–€500/month depending on coverage amount and age. Health insurance: €200–€800/month for comprehensive coverage. Property insurance: €300–€1,500/year for homeowners. Business insurance: €500–€5,000/year depending on business size and sector. We provide free quotes within 24 hours.'
    },
    {
      question: 'Can I get international health insurance coverage through Advensys?',
      answer: 'Yes. We specialize in international health insurance for expats, cross-border workers, and frequent travelers. Coverage includes EU-wide portability, emergency medical evacuation, repatriation, and access to private hospitals across Europe. Plans comply with Luxembourg social security requirements and Schengen visa regulations.'
    },
    {
      question: 'What is the difference between term life and whole life insurance?',
      answer: 'Term life provides coverage for a specific period (10, 20, or 30 years) with fixed premiums—no cash value, purely protection. Whole life covers you for life with guaranteed death benefit and cash value accumulation that grows tax-deferred. Term is cheaper for pure protection; whole life builds wealth while protecting your family.'
    },
    {
      question: 'How quickly can I get insurance coverage?',
      answer: 'Timeline depends on policy type. Health insurance: 2–4 weeks (medical underwriting required). Life insurance: 3–6 weeks (medical exam, underwriting). Property insurance: 1–2 weeks (property inspection). Auto insurance: 1–3 days (immediate coverage possible). We expedite applications and provide temporary coverage when available.'
    },
    {
      question: 'Do you help with insurance claims?',
      answer: 'Yes. We provide comprehensive claims support: documentation assistance, claim filing, liaison with insurance carriers, negotiation for fair settlements, and appeals if claims are denied. We work as your advocate throughout the entire claims process to ensure you receive the full benefits you're entitled to.'
    },
    {
      question: 'Can I bundle multiple insurance policies for better rates?',
      answer: 'Absolutely. Multi-policy bundling typically saves 15–25% on premiums. Common bundles: Home + Auto (20% discount), Life + Health (15% discount), Business + Professional Liability (25% discount). We negotiate package deals with carriers to maximize your savings while ensuring comprehensive coverage.'
    },
    {
      question: 'What happens if I move out of Luxembourg?',
      answer: 'Policy portability depends on type. Health insurance: EU-wide portability available with international plans. Life insurance: policies remain valid regardless of residence (premiums may adjust). Property/Auto: coverage typically ends when you leave, but we can transition you to new policies in your destination country through our international network.'
    }
  ]

  const faqSchema = getFAQSchema(faqs)

  return (
    <div className="service-page">
      <SEOHead
        title="Insurance Services Luxembourg | Life, Health, Property Insurance"
        description="Comprehensive insurance solutions in Luxembourg: life, health, property, business insurance. Licensed advisors, competitive rates, 24h response. Advensys In Finance."
        keywords="insurance Luxembourg, life insurance Luxembourg, health insurance Luxembourg, property insurance, business insurance, expat insurance"
        schema={faqSchema}
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
          <h1>Insurance Services Luxembourg</h1>
          <p className="service-intro">
            Comprehensive insurance solutions for individuals, families, and businesses in Luxembourg — life, health, property, and business insurance
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
            <li><strong>What we do:</strong> Life, health, property, business, and auto insurance — policy comparison, application, claims support</li>
            <li><strong>Who it's for:</strong> Luxembourg residents, expats, cross-border workers, families, SMEs, corporations</li>
            <li><strong>Timeline:</strong> Health (2–4 weeks), Life (3–6 weeks), Property (1–2 weeks), Auto (1–3 days)</li>
            <li><strong>Coverage:</strong> Luxembourg-compliant policies, EU-wide portability, international health insurance</li>
            <li><strong>Pricing:</strong> Life (€50–€500/month), Health (€200–€800/month), Property (€300–€1,500/year)</li>
            <li><strong>Response time:</strong> <strong style={{ color: '#0066cc' }}>24-hour quote response</strong> — free consultation</li>
          </ul>
        </section>

        {/* Plain Definition - AI-SEO */}
        <section style={{ marginBottom: '2rem', padding: '1.5rem', background: '#fff3cd', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.3rem', marginTop: 0 }}>What is Insurance Brokerage?</h2>
          <p style={{ marginBottom: 0, lineHeight: '1.7' }}>
            Insurance brokers act as independent intermediaries between clients and insurance carriers. Unlike captive agents who sell for one company,
            brokers compare policies from multiple insurers to find the best coverage and rates for clients. In Luxembourg, licensed insurance brokers
            must comply with CAA (Commissariat aux Assurances) regulations and EU Insurance Distribution Directive (IDD). <strong>Advensys In Finance</strong>
            is a licensed insurance broker providing life, health, property, and business insurance solutions for Luxembourg residents and international clients.
          </p>
        </section>

        {/* Main Content */}
        <article className="service-content">
          {/* Services Overview */}
          <section className="service-details">
            <h2>Our Insurance Solutions</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
              We offer comprehensive insurance coverage across all major categories:
            </p>

            <div className="detail-grid">
              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Life Insurance</h3>
                <p>Financial protection for your family's future</p>
                <ul>
                  <li><strong>Term Life:</strong> 10, 20, or 30-year coverage with fixed premiums (€50–€200/month)</li>
                  <li><strong>Whole Life:</strong> Lifetime coverage with cash value accumulation (€150–€500/month)</li>
                  <li><strong>Universal Life:</strong> Flexible premiums and adjustable death benefits</li>
                  <li><strong>Variable Life:</strong> Investment-linked cash value growth</li>
                  <li><strong>Group Life:</strong> Employer-sponsored coverage for employees</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Health Insurance</h3>
                <p>Comprehensive medical coverage in Luxembourg and abroad</p>
                <ul>
                  <li><strong>CNS Complementary:</strong> Top-up coverage for Luxembourg state health system</li>
                  <li><strong>Private Health:</strong> Access to private hospitals, no waiting lists (€300–€800/month)</li>
                  <li><strong>International Health:</strong> EU-wide and global coverage for expats (€400–€1,200/month)</li>
                  <li><strong>Dental & Vision:</strong> Supplemental coverage for dental, optical, and specialist care</li>
                  <li><strong>Group Health:</strong> Employer-sponsored plans for companies</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Property Insurance</h3>
                <p>Protection for your home and personal belongings</p>
                <ul>
                  <li><strong>Homeowners:</strong> Structure, contents, liability coverage (€500–€1,500/year)</li>
                  <li><strong>Renters:</strong> Personal property and liability for tenants (€200–€500/year)</li>
                  <li><strong>Condominium:</strong> Unit coverage for co-ownership properties</li>
                  <li><strong>Landlord:</strong> Rental property protection and loss of rent coverage</li>
                  <li><strong>High-Value Items:</strong> Jewelry, art, antiques with scheduled coverage</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Business Insurance</h3>
                <p>Comprehensive protection for Luxembourg businesses</p>
                <ul>
                  <li><strong>General Liability:</strong> Protection against third-party claims (€500–€3,000/year)</li>
                  <li><strong>Professional Indemnity:</strong> Errors & omissions coverage for service providers</li>
                  <li><strong>Commercial Property:</strong> Office, warehouse, and equipment coverage</li>
                  <li><strong>Cyber Insurance:</strong> Data breach, ransomware, and cyber liability protection</li>
                  <li><strong>Workers Compensation:</strong> Employee injury and illness coverage (mandatory in Luxembourg)</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Auto Insurance</h3>
                <p>Vehicle coverage for Luxembourg drivers</p>
                <ul>
                  <li><strong>Third-Party Liability:</strong> Mandatory coverage for damage to others (€300–€600/year)</li>
                  <li><strong>Comprehensive:</strong> Full coverage including theft, fire, vandalism (€600–€1,200/year)</li>
                  <li><strong>Collision:</strong> Damage to your vehicle in accidents</li>
                  <li><strong>International Coverage:</strong> Green card for EU travel</li>
                  <li><strong>Fleet Insurance:</strong> Multi-vehicle coverage for businesses</li>
                </ul>
              </div>

              <div className="detail-item" style={{ border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <h3>Specialized Insurance</h3>
                <p>Tailored coverage for unique needs</p>
                <ul>
                  <li><strong>Travel Insurance:</strong> Trip cancellation, medical emergencies, lost luggage</li>
                  <li><strong>Expat Insurance:</strong> International packages for Luxembourg expats</li>
                  <li><strong>Directors & Officers:</strong> D&O liability for corporate leadership</li>
                  <li><strong>Key Person Insurance:</strong> Business protection if critical employee dies/disabled</li>
                  <li><strong>Credit Protection:</strong> Loan repayment coverage in case of job loss or disability</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="service-process" style={{ marginTop: '3rem' }}>
            <h2>How We Work — Insurance Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Needs Assessment (Day 1)</h3>
                <p>
                  <strong>What happens:</strong> Free consultation to understand your coverage needs, budget, family situation, and risk profile.<br />
                  <strong>Outcome:</strong> Clear understanding of required coverage types and amounts.<br />
                  <strong>Duration:</strong> 30–60 minute consultation (phone, video, or in-person)
                </p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Market Comparison (Days 2–3)</h3>
                <p>
                  <strong>What happens:</strong> We request quotes from 5–10 insurance carriers, compare coverage, premiums, deductibles, and exclusions.<br />
                  <strong>Outcome:</strong> Comparison table with 3–5 best options ranked by value.<br />
                  <strong>Duration:</strong> 1–2 business days
                </p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Recommendation (Day 4)</h3>
                <p>
                  <strong>What happens:</strong> Present top recommendations with pros/cons, pricing, and coverage details. Answer questions, clarify terms.<br />
                  <strong>Outcome:</strong> You select preferred policy and carrier.<br />
                  <strong>Duration:</strong> 30–45 minute review meeting
                </p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Application (Week 2)</h3>
                <p>
                  <strong>What happens:</strong> Complete application forms, submit documentation (ID, medical records if needed, property appraisal, etc.).<br />
                  <strong>Outcome:</strong> Application submitted to underwriting.<br />
                  <strong>Duration:</strong> 1–3 days for application completion
                </p>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <h3>Underwriting (Weeks 3–4)</h3>
                <p>
                  <strong>What happens:</strong> Insurer reviews application, may request medical exam (life/health), property inspection, or additional documents.<br />
                  <strong>Outcome:</strong> Policy approval with final premium quote.<br />
                  <strong>Duration:</strong> 1–4 weeks depending on complexity
                </p>
              </div>
              <div className="step">
                <div className="step-number">6</div>
                <h3>Policy Issuance (Week 5)</h3>
                <p>
                  <strong>What happens:</strong> Review policy documents, confirm coverage details, set up payment (monthly, quarterly, or annual).<br />
                  <strong>Outcome:</strong> Active coverage with policy certificate.<br />
                  <strong>Duration:</strong> 2–5 days
                </p>
              </div>
              <div className="step">
                <div className="step-number">7</div>
                <h3>Ongoing Support</h3>
                <p>
                  <strong>What happens:</strong> Annual policy reviews, premium optimization, claims support, coverage adjustments as life changes.<br />
                  <strong>Outcome:</strong> Continuous protection and cost optimization.<br />
                  <strong>Duration:</strong> Annual reviews + support as needed
                </p>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section style={{ marginTop: '3rem' }}>
            <h2>Term Life vs Whole Life vs Universal Life — Which is Right for You?</h2>
            <p style={{ marginBottom: '1rem' }}>
              Understanding the differences between life insurance types:
            </p>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <thead>
                <tr style={{ background: '#002b5c', color: 'white' }}>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Feature</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Term Life</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Whole Life</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Universal Life</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Coverage Duration</td>
                  <td style={{ padding: '0.75rem' }}>10, 20, or 30 years</td>
                  <td style={{ padding: '0.75rem' }}>Lifetime (until death)</td>
                  <td style={{ padding: '0.75rem' }}>Lifetime (flexible)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Premiums</td>
                  <td style={{ padding: '0.75rem' }}>Fixed, lowest cost</td>
                  <td style={{ padding: '0.75rem' }}>Fixed, higher cost</td>
                  <td style={{ padding: '0.75rem' }}>Flexible, adjustable</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Cash Value</td>
                  <td style={{ padding: '0.75rem' }}>None</td>
                  <td style={{ padding: '0.75rem' }}>Yes (guaranteed growth)</td>
                  <td style={{ padding: '0.75rem' }}>Yes (variable growth)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Best For</td>
                  <td style={{ padding: '0.75rem' }}>Young families, temporary needs</td>
                  <td style={{ padding: '0.75rem' }}>Estate planning, wealth transfer</td>
                  <td style={{ padding: '0.75rem' }}>Flexible income, changing needs</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Typical Premium (€500k coverage, age 35)</td>
                  <td style={{ padding: '0.75rem' }}>€50–€100/month</td>
                  <td style={{ padding: '0.75rem' }}>€300–€500/month</td>
                  <td style={{ padding: '0.75rem' }}>€200–€400/month</td>
                </tr>
              </tbody>
            </table>
            <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: '#666' }}>
              Need help deciding? <Link to="/contact" style={{ color: '#0066cc' }}>Contact us</Link> for a personalized recommendation based on your age, health, family situation, and financial goals.
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
            <h2 style={{ fontSize: '1.2rem', marginTop: 0 }}>Key Insurance Terms</h2>
            <p style={{ marginBottom: '1rem' }}>
              Not familiar with insurance terminology? Check our <Link to="/glossary" style={{ color: '#0066cc', fontWeight: 'bold' }}>Finance Glossary</Link> for definitions of:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
              <div>• Premium</div>
              <div>• Deductible</div>
              <div>• Underwriting</div>
              <div>• Cash Value</div>
              <div>• Death Benefit</div>
              <div>• Policy Rider</div>
              <div>• Exclusions</div>
              <div>• Term vs Whole Life</div>
            </div>
          </section>

          {/* CTA */}
          <section className="service-cta" style={{ marginTop: '3rem' }}>
            <h2>Get Your Free Insurance Quote — 24h Response</h2>
            <p>
              Protect your family, health, property, or business. Contact us today for a free, no-obligation quote.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Free Quote
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

export default InsuranceService
