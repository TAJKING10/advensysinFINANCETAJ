import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import News from '../components/sections/News'
import Contact from '../components/sections/Contact'

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Advensys in Finance",
    "url": "https://advensys-in-finance.com",
    "logo": "https://advensys-in-finance.com/logo.png",
    "description": "Expert insurance and financial advisory services in Luxembourg, including health insurance, life insurance, pension plans, and corporate insurance advisory.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Luxembourg City",
      "addressCountry": "LU"
    },
    "telephone": "+352-XX-XXX-XXX",
    "areaServed": {
      "@type": "Country",
      "name": "Luxembourg"
    },
    "serviceType": [
      "Health Insurance",
      "Life Insurance",
      "Pension Plans",
      "Corporate Insurance Advisory",
      "Investment Advisory",
      "Banking Services"
    ],
    "sameAs": [
      "https://advensys-in-finance.com"
    ]
  }

  return (
    <div className="home-page">
      <Helmet>
        <title>Advensys in Finance – Luxembourg Insurance & Advisory</title>
        <meta
          name="description"
          content="Advensys in Finance provides expert insurance and financial advisory services in Luxembourg, including health insurance, life insurance, pension plans, and corporate advisory."
        />
        <meta
          name="keywords"
          content="Luxembourg insurance company, insurance advisory Luxembourg, health insurance Luxembourg, corporate insurance Luxembourg"
        />
        <link rel="canonical" href="https://advensys-in-finance.com/" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Advensys in Finance – Luxembourg Insurance & Advisory" />
        <meta property="og:description" content="Expert insurance and financial advisory services in Luxembourg, including health insurance, life insurance, pension plans, and corporate advisory." />
        <meta property="og:url" content="https://advensys-in-finance.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Advensys in Finance – Luxembourg Insurance & Advisory" />
        <meta name="twitter:description" content="Expert insurance and financial advisory services in Luxembourg, including health insurance, life insurance, pension plans, and corporate advisory." />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Hero />
      <Services />
      <About />
      <News />
      <Contact />
    </div>
  )
}

export default Home