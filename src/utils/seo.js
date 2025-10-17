/**
 * SEO Utilities for Advensys In Finance
 * Handles meta tags, structured data, and IndexNow API
 */

// IndexNow configuration
export const INDEXNOW_KEY = 'f8c3de3d798f4fba8e5a2d85b3c9c4e1'; // Replace with your actual key
export const INDEXNOW_KEY_LOCATION = `https://advensys-in-finance.com/${INDEXNOW_KEY}.txt`;

/**
 * Get canonical URL for current page
 */
export const getCanonicalUrl = (path = '') => {
  const baseUrl = 'https://advensys-in-finance.com';
  return `${baseUrl}${path}`;
};

/**
 * Get hreflang URLs for multilingual pages
 */
export const getHreflangTags = (path = '', languages = ['en', 'fr']) => {
  const baseUrl = 'https://advensys-in-finance.com';
  return languages.map(lang => ({
    rel: 'alternate',
    hreflang: lang,
    href: `${baseUrl}/${lang}${path}`
  }));
};

/**
 * Organization structured data (site-wide)
 */
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "FinancialService", "InsuranceAgency"],
  "name": "Advensys In Finance",
  "legalName": "Advensys Insurance Finance S.A.R.L.",
  "url": "https://advensys-in-finance.com",
  "logo": "https://advensys-in-finance.com/assets/logo.svg",
  "description": "Corporate finance advisory, investment management, insurance brokerage, and pension planning services in Luxembourg and France.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "66 avenue des Champs Elysées",
    "addressLocality": "Paris",
    "postalCode": "75008",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-6-98-21-44-46",
    "contactType": "Customer Service",
    "email": "contact@advensys-in-finance.com",
    "availableLanguage": ["English", "French"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/advensys-in-finance"
  ],
  "foundingDate": "2020",
  "areaServed": ["FR", "LU", "EU"],
  "knowsAbout": [
    "Corporate Finance",
    "M&A Advisory",
    "Fundraising",
    "Valuation Services",
    "Treasury Management",
    "Investment Advisory",
    "Pension Planning",
    "Insurance Brokerage"
  ]
});

/**
 * LocalBusiness structured data (AccountingService for financial services)
 */
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "Advensys In Finance",
  "image": "https://advensys-in-finance.com/assets/hero.png",
  "telephone": "+33-6-98-21-44-46",
  "email": "contact@advensys-in-finance.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "66 avenue des Champs Elysées",
    "addressLocality": "Paris",
    "postalCode": "75008",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "48.8698",
    "longitude": "2.3076"
  },
  "url": "https://advensys-in-finance.com",
  "priceRange": "€€€",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:30"
    }
  ]
});

/**
 * FAQ Page schema for service pages
 */
export const getFAQSchema = (faqs = []) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

/**
 * Service schema for individual service pages
 */
export const getServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.type,
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "Advensys In Finance"
  },
  "areaServed": service.areaServed || ["FR", "LU"],
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": service.url,
    "servicePhone": {
      "@type": "ContactPoint",
      "telephone": "+33-6-98-21-44-46"
    }
  }
});

/**
 * Submit URL to IndexNow API
 */
export const submitToIndexNow = async (urls = []) => {
  if (!Array.isArray(urls) || urls.length === 0) {
    console.warn('No URLs provided for IndexNow submission');
    return false;
  }

  const payload = {
    host: 'advensys-in-finance.com',
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urls.map(url =>
      url.startsWith('http') ? url : `https://advensys-in-finance.com${url}`
    )
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 202) {
      console.log('Successfully submitted to IndexNow:', urls);
      return true;
    } else {
      console.error('IndexNow submission failed:', response.status);
      return false;
    }
  } catch (error) {
    console.error('IndexNow submission error:', error);
    return false;
  }
};

/**
 * Generate sitemap.xml content
 */
export const generateSitemap = (pages = []) => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq || 'weekly'}</changefreq>
    <priority>${page.priority || '0.8'}</priority>${page.alternates ? `
${page.alternates.map(alt => `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.url}"/>`).join('\n')}` : ''}
  </url>`).join('\n')}
</urlset>`;
  return xml;
};

/**
 * Default sitemap pages
 */
export const getSitemapPages = () => {
  const baseUrl = 'https://advensys-in-finance.com';
  const languages = ['en', 'fr'];

  const pages = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/about', priority: '0.9' },
    { path: '/services', priority: '0.9' },
    { path: '/contact', priority: '0.9' },
    { path: '/news', priority: '0.8' },
    { path: '/glossary', priority: '0.7' },
    // Service pages
    { path: '/services/corporate-finance-luxembourg', priority: '0.9' },
    { path: '/services/fundraising-luxembourg', priority: '0.8' },
    { path: '/services/m-and-a-advisory-luxembourg', priority: '0.8' },
    { path: '/services/valuation-services-luxembourg', priority: '0.8' },
    { path: '/services/treasury-management-luxembourg', priority: '0.8' },
    { path: '/services/regulatory-reporting-luxembourg', priority: '0.8' },
    { path: '/services/insurance', priority: '0.8' },
    { path: '/services/dedicated-life-insurance', priority: '0.8' },
    { path: '/services/investment-adviser', priority: '0.8' },
    { path: '/services/broker-in-bank', priority: '0.8' },
    { path: '/services/private-pension-plan', priority: '0.8' },
    { path: '/legal', priority: '0.5', changefreq: 'monthly' }
  ];

  return pages.map(page => ({
    url: `${baseUrl}${page.path}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: page.changefreq || 'weekly',
    priority: page.priority,
    alternates: languages.map(lang => ({
      lang,
      url: `${baseUrl}/${lang}${page.path}`
    }))
  }));
};

export default {
  getCanonicalUrl,
  getHreflangTags,
  getOrganizationSchema,
  getLocalBusinessSchema,
  getFAQSchema,
  getServiceSchema,
  submitToIndexNow,
  generateSitemap,
  getSitemapPages,
  INDEXNOW_KEY
};
