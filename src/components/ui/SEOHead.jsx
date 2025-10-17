import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import {
  getCanonicalUrl,
  getOrganizationSchema,
  getLocalBusinessSchema
} from '../../utils/seo'

/**
 * SEO Head Component
 * Manages meta tags, canonical URLs, hreflang, and structured data
 *
 * @param {Object} props
 * @param {string} props.title - Page title (will append "| Advensys In Finance")
 * @param {string} props.description - Meta description
 * @param {string} props.keywords - Meta keywords
 * @param {Object} props.schema - Additional structured data (FAQ, Service, etc.)
 * @param {string} props.ogImage - Open Graph image URL
 * @param {string} props.canonical - Custom canonical URL (optional)
 * @param {boolean} props.noindex - Whether to noindex the page (default: false)
 */
const SEOHead = ({
  title = 'Corporate Finance Advisory Luxembourg',
  description = 'Corporate finance advisory in Luxembourg: fundraising, M&A, valuation, treasury. Advensys In Finance — expert advisors, clear process, 24h response.',
  keywords = 'corporate finance Luxembourg, M&A advisory, fundraising, valuation, treasury management, pension planning, investment advisory',
  schema = null,
  ogImage = '/assets/hero.png',
  canonical = null,
  noindex = false
}) => {
  const location = useLocation()
  const fullTitle = title.includes('Advensys') ? title : `${title} | Advensys In Finance`
  const canonicalUrl = canonical || getCanonicalUrl(location.pathname)
  const imageUrl = ogImage.startsWith('http') ? ogImage : `https://advensys-in-finance.com${ogImage}`

  // Get site-wide schemas
  const organizationSchema = getOrganizationSchema()
  const localBusinessSchema = getLocalBusinessSchema()

  // Combine all schemas
  const allSchemas = [organizationSchema, localBusinessSchema]
  if (schema) {
    allSchemas.push(schema)
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Advensys In Finance" />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang Tags for Multilingual */}
      <link rel="alternate" hreflang="en" href={`https://advensys-in-finance.com/en${location.pathname}`} />
      <link rel="alternate" hreflang="fr" href={`https://advensys-in-finance.com/fr${location.pathname}`} />
      <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:site_name" content="Advensys In Finance" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data (JSON-LD) */}
      {allSchemas.map((schemaObj, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schemaObj)}
        </script>
      ))}
    </Helmet>
  )
}

export default SEOHead
