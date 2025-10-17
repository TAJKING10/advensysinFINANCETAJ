import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/ui/SEOHead'
import '../components/pages/ServicePages.css'

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const glossaryTerms = [
    {
      term: 'Corporate Finance',
      definition: 'The division of finance dealing with funding, capital structuring, and investment decisions for businesses. Corporate finance activities include fundraising, M&A, valuation, and treasury management.',
      category: 'general',
      relatedServices: ['/services/corporate-finance-luxembourg']
    },
    {
      term: 'M&A (Mergers and Acquisitions)',
      definition: 'The process of combining companies through various types of financial transactions, including mergers, acquisitions, consolidations, tender offers, purchase of assets, and management acquisitions.',
      category: 'ma',
      relatedServices: ['/services/m-and-a-advisory-luxembourg']
    },
    {
      term: 'Enterprise Value (EV)',
      definition: 'A measure of a company\'s total value, calculated as market capitalization plus debt, minority interest and preferred shares, minus total cash and cash equivalents.',
      category: 'valuation',
      relatedServices: ['/services/valuation-services-luxembourg']
    },
    {
      term: 'DCF (Discounted Cash Flow)',
      definition: 'A valuation method that estimates the value of an investment based on its expected future cash flows, adjusted for the time value of money.',
      category: 'valuation',
      relatedServices: ['/services/valuation-services-luxembourg']
    },
    {
      term: 'EBITDA',
      definition: 'Earnings Before Interest, Taxes, Depreciation, and Amortization. A measure of a company\'s operating performance and profitability.',
      category: 'valuation',
      relatedServices: ['/services/valuation-services-luxembourg']
    },
    {
      term: 'Due Diligence',
      definition: 'A comprehensive investigation and analysis of a business undertaken by a prospective buyer, especially to establish its assets and liabilities and evaluate its commercial potential.',
      category: 'ma',
      relatedServices: ['/services/m-and-a-advisory-luxembourg']
    },
    {
      term: 'SPA (Share Purchase Agreement)',
      definition: 'A legal contract between a buyer and seller that outlines the terms and conditions for the sale and purchase of shares in a company.',
      category: 'ma',
      relatedServices: ['/services/m-and-a-advisory-luxembourg']
    },
    {
      term: 'Equity Financing',
      definition: 'The process of raising capital through the sale of shares in a company. Investors receive ownership stakes in exchange for their capital.',
      category: 'fundraising',
      relatedServices: ['/services/fundraising-luxembourg']
    },
    {
      term: 'Debt Financing',
      definition: 'Raising capital by borrowing money that must be repaid over time with interest. Common forms include bank loans, bonds, and credit facilities.',
      category: 'fundraising',
      relatedServices: ['/services/fundraising-luxembourg']
    },
    {
      term: 'Working Capital',
      definition: 'The difference between a company\'s current assets and current liabilities. It measures a company\'s short-term financial health and operational efficiency.',
      category: 'treasury',
      relatedServices: ['/services/treasury-management-luxembourg']
    },
    {
      term: 'Treasury Management',
      definition: 'The corporate handling of all financial matters, the generation of external and internal funds for business, the management of currencies and cash flows, and risk management.',
      category: 'treasury',
      relatedServices: ['/services/treasury-management-luxembourg']
    },
    {
      term: 'Cash Flow Forecasting',
      definition: 'The process of estimating the flow of cash in and out of a business over a specified period, used for liquidity planning and financial management.',
      category: 'treasury',
      relatedServices: ['/services/treasury-management-luxembourg']
    },
    {
      term: 'Financial Covenants',
      definition: 'Conditions in loan agreements that require the borrower to maintain certain financial ratios or meet specific conditions. Breach of covenants can trigger default.',
      category: 'fundraising',
      relatedServices: ['/services/fundraising-luxembourg']
    },
    {
      term: 'Valuation Multiples',
      definition: 'Ratios used to value companies by comparing them to similar businesses. Common multiples include P/E ratio, EV/EBITDA, and Price-to-Sales.',
      category: 'valuation',
      relatedServices: ['/services/valuation-services-luxembourg']
    },
    {
      term: 'Term Sheet',
      definition: 'A non-binding agreement outlining the terms and conditions of a business agreement, commonly used in investment and M&A transactions.',
      category: 'ma',
      relatedServices: ['/services/m-and-a-advisory-luxembourg', '/services/fundraising-luxembourg']
    },
    {
      term: 'Cap Table (Capitalization Table)',
      definition: 'A spreadsheet or table showing the equity ownership capitalization for a company, including shareholders, percentage ownership, equity dilution, and value of equity.',
      category: 'fundraising',
      relatedServices: ['/services/fundraising-luxembourg']
    },
    {
      term: 'Earn-out',
      definition: 'A contractual provision in M&A deals where the seller receives additional future compensation based on the business achieving certain financial goals post-acquisition.',
      category: 'ma',
      relatedServices: ['/services/m-and-a-advisory-luxembourg']
    },
    {
      term: 'SEPCAV',
      definition: 'Specialized Investment Fund in Luxembourg. A pension vehicle offering maximum investment flexibility and tax efficiency for retirement savings.',
      category: 'pension',
      relatedServices: ['/services/private-pension-plan']
    },
    {
      term: 'Regulatory Reporting',
      definition: 'The disclosure of financial and operational data to regulatory bodies as required by law. Essential for compliance in regulated industries.',
      category: 'compliance',
      relatedServices: ['/services/regulatory-reporting-luxembourg']
    },
    {
      term: 'Asset Allocation',
      definition: 'An investment strategy that aims to balance risk and reward by apportioning a portfolio\'s assets according to an individual\'s goals, risk tolerance, and investment horizon.',
      category: 'investment',
      relatedServices: ['/services/investment-adviser']
    }
  ]

  const categories = [
    { id: 'all', name: 'All Terms' },
    { id: 'general', name: 'General Finance' },
    { id: 'ma', name: 'M&A' },
    { id: 'valuation', name: 'Valuation' },
    { id: 'fundraising', name: 'Fundraising' },
    { id: 'treasury', name: 'Treasury' },
    { id: 'pension', name: 'Pension' },
    { id: 'compliance', name: 'Compliance' },
    { id: 'investment', name: 'Investment' }
  ]

  const filteredTerms = glossaryTerms.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": glossaryTerms.slice(0, 10).map(term => ({
      "@type": "Question",
      "name": `What is ${term.term}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": term.definition
      }
    }))
  }

  return (
    <div className="service-page">
      <SEOHead
        title="Finance Glossary — Corporate Finance Terms Explained"
        description="Essential corporate finance terms explained: M&A, valuation (DCF, EBITDA), fundraising (equity vs debt), treasury, due diligence, SPA, working capital, and more."
        keywords="finance glossary, corporate finance terms, M&A definitions, valuation methods, DCF, EBITDA, enterprise value, due diligence, equity financing, debt financing"
        schema={faqSchema}
      />

      <div className="container">
        {/* Header */}
        <header className="service-header">
          <h1>Finance Glossary</h1>
          <p className="service-intro">
            Essential corporate finance terms and definitions. From M&A to valuation, fundraising to treasury — explained in plain language.
          </p>
        </header>

        {/* At a Glance - AI-SEO Critical */}
        <section className="at-a-glance" style={{
          background: '#f8f9fa',
          padding: '2rem',
          borderRadius: '8px',
          marginBottom: '2rem'
        }}>
          <h2>At a Glance</h2>
          <ul style={{ marginBottom: 0 }}>
            <li><strong>What it is:</strong> A comprehensive reference for corporate finance terminology</li>
            <li><strong>Who it's for:</strong> Business owners, investors, CFOs, entrepreneurs, and finance professionals</li>
            <li><strong>Coverage:</strong> 20+ essential terms across M&A, valuation, fundraising, treasury, pensions</li>
            <li><strong>Format:</strong> Plain-language definitions with links to related services</li>
            <li><strong>Updated:</strong> Regularly reviewed and expanded</li>
          </ul>
        </section>

        {/* Search and Filter */}
        <div style={{ marginBottom: '2rem' }}>
          <input
            type="text"
            placeholder="Search terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginBottom: '1rem'
            }}
          />

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  background: selectedCategory === cat.id ? '#002b5c' : 'white',
                  color: selectedCategory === cat.id ? 'white' : '#002b5c',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Glossary Terms */}
        <article className="service-content">
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {filteredTerms.length === 0 ? (
              <p>No terms found matching your search.</p>
            ) : (
              filteredTerms.map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: '1.5rem',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    background: 'white'
                  }}
                >
                  <h3 style={{ marginTop: 0, color: '#002b5c' }}>{item.term}</h3>
                  <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>{item.definition}</p>
                  {item.relatedServices && item.relatedServices.length > 0 && (
                    <div style={{ fontSize: '0.9rem', color: '#666' }}>
                      <strong>Related services:</strong>{' '}
                      {item.relatedServices.map((service, idx) => (
                        <span key={idx}>
                          <Link to={service} style={{ color: '#0066cc' }}>
                            {service.split('/').pop().replace(/-/g, ' ').replace(/luxembourg/g, 'Luxembourg')}
                          </Link>
                          {idx < item.relatedServices.length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Internal Links */}
          <section style={{ marginTop: '3rem', padding: '2rem', background: '#f0f8ff', borderRadius: '8px' }}>
            <h2>Explore Our Services</h2>
            <p>Understanding these terms is the first step. See how we apply them:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              <Link to="/services/corporate-finance-luxembourg" className="btn btn-secondary">Corporate Finance Advisory</Link>
              <Link to="/services/m-and-a-advisory-luxembourg" className="btn btn-secondary">M&A Advisory</Link>
              <Link to="/services/fundraising-luxembourg" className="btn btn-secondary">Fundraising</Link>
              <Link to="/services/valuation-services-luxembourg" className="btn btn-secondary">Valuation Services</Link>
              <Link to="/services/treasury-management-luxembourg" className="btn btn-secondary">Treasury Management</Link>
              <Link to="/services/investment-adviser" className="btn btn-secondary">Investment Advisory</Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}

export default Glossary
