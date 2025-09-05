import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useLocation } from '../contexts/LocationContext'
import './Services.css'

const Services = () => {
  const { t, currentLanguage } = useLanguage()
  const { currentLocationData } = useLocation()
  const [searchParams] = useSearchParams()

  // Helper function to get translated arrays safely
  const getTranslatedArray = (key, fallback = []) => {
    try {
      const result = t(key)
      // If result is an array, return it
      if (Array.isArray(result)) {
        return result
      }
      // If result is a string (meaning translation failed), return fallback
      if (typeof result === 'string') {
        console.log(`Translation key '${key}' returned string instead of array:`, result)
        return fallback
      }
      return fallback
    } catch (error) {
      console.log(`Translation key '${key}' failed:`, error)
      return fallback
    }
  }

  // Fallback content for each service in different languages
  const getFallbackServices = (serviceType) => {
    const fallbacks = {
      insurance: {
        en: [
          'Life Insurance - Term, Whole, Universal, and Variable life options',
          'Health Insurance - Individual, family, and group health plans',
          'Property Insurance - Homeowners, renters, and commercial property',
          'Business Insurance - Liability, workers compensation, and cyber protection',
          'Auto Insurance - Comprehensive vehicle protection and coverage'
        ],
        fr: [
          'Assurance Vie - Options temporaires, entières, universelles et variables',
          'Assurance Santé - Plans individuels, familiaux et de groupe',
          'Assurance Propriété - Propriétaires, locataires et biens commerciaux',
          'Assurance Entreprise - Responsabilité, compensation des travailleurs et protection cyber',
          'Assurance Auto - Protection complète et couverture des véhicules'
        ],
        sv: [
          'Livförsäkring - Termin, Hel, Universell och Variabel livsalternativ',
          'Hälsoförsäkring - Individuella, familje- och grupphälsoplaner',
          'Egendomsförsäkring - Husägare, hyresgäster och kommersiell egendom',
          'Företagsförsäkring - Ansvar, arbetsskadeersättning och cyberskydd',
          'Bilförsäkring - Omfattande fordonsskydd och täckning'
        ]
      },
      dedicatedLifeInsurance: {
        en: [
          'Term Life Insurance - 10, 20, or 30-year term options with level premiums',
          'Whole Life Insurance - Lifetime coverage with cash value accumulation',
          'Universal Life Insurance - Flexible premiums and adjustable death benefits',
          'Variable Life Insurance - Investment-linked cash value growth',
          'Group Life Insurance - Employer-sponsored life insurance plans'
        ],
        fr: [
          'Assurance Vie Temporaire - Options de 10, 20 ou 30 ans avec primes nivelées',
          'Assurance Vie Entière - Couverture à vie avec accumulation de valeur de rachat',
          'Assurance Vie Universelle - Primes flexibles et prestations de décès ajustables',
          'Assurance Vie Variable - Croissance de la valeur de rachat liée aux investissements',
          'Assurance Vie de Groupe - Plans d\'assurance vie parrainés par l\'employeur'
        ],
        sv: [
          'Terminslivförsäkring - 10, 20 eller 30-års terminsalternativ med nivåpremier',
          'Hel Livförsäkring - Livstid täckning med kontantvärdeackumulation',
          'Universell Livförsäkring - Flexibla premier och justerbara dödsförmåner',
          'Variabel Livförsäkring - Investeringslänkad kontantvärdetillväxt',
          'Grupplivförsäkring - Arbetsgivarsponsrade livförsäkringsplaner'
        ]
      },
      investmentAdviser: {
        en: [
          'Portfolio Management - Customized investment portfolios and asset allocation',
          'Investment Planning - Goal-based strategies and retirement planning',
          'Research & Analysis - Market research and investment due diligence',
          'Wealth Management - High net worth and institutional services',
          'Tax-Efficient Investing - Strategies to minimize tax impact'
        ],
        fr: [
          'Gestion de Portefeuille - Portefeuilles d\'investissement personnalisés et allocation d\'actifs',
          'Planification d\'Investissement - Stratégies basées sur les objectifs et planification de retraite',
          'Recherche et Analyse - Recherche de marché et diligence raisonnable d\'investissement',
          'Gestion de Patrimoine - Services pour fortunés et institutionnels',
          'Investissement Fiscalement Efficace - Stratégies pour minimiser l\'impact fiscal'
        ],
        sv: [
          'Portföljförvaltning - Anpassade investeringsportföljer och tillgångsallokering',
          'Investeringsplanering - Målbaserade strategier och pensionsplanering',
          'Forskning & Analys - Marknadsforskning och investeringsdue diligence',
          'Förmögenhetsförvaltning - Högförmögna och institutionella tjänster',
          'Skatteeffektiv Investering - Strategier för att minimera skattepåverkan'
        ]
      },
      brokerInBank: {
        en: [
          'Loan Brokerage - Mortgages, personal, business, and commercial lending',
          'Banking Services - Business banking, international solutions, treasury management',
          'Credit Solutions - Lines of credit, credit cards, asset-based lending',
          'Specialized Banking - Private banking, offshore solutions, multi-currency accounts',
          'Trade Finance - Letters of credit, invoice financing, and factoring'
        ],
        fr: [
          'Courtage de Prêts - Hypothèques, prêts personnels, commerciaux et d\'entreprise',
          'Services Bancaires - Banque d\'affaires, solutions internationales, gestion de trésorerie',
          'Solutions de Crédit - Lignes de crédit, cartes de crédit, prêts sur actifs',
          'Banque Spécialisée - Banque privée, solutions offshore, comptes multi-devises',
          'Financement Commercial - Lettres de crédit, financement de factures et affacturage'
        ],
        sv: [
          'Lånemäkling - Hypotekslån, personliga, affärs- och kommersiella lån',
          'Banktjänster - Affärsbank, internationella lösningar, treasury management',
          'Kreditlösningar - Kreditlinjer, kreditkort, tillgångsbaserade lån',
          'Specialiserad Bank - Privatbank, offshore lösningar, multivalutakonton',
          'Handelsfinansiering - Remburs, fakturafinansiering och factoring'
        ]
      },
      privatePensionPlan: {
        en: [
          'SEPCAV Plans - Specialized investment funds with maximum flexibility',
          'Luxembourg Life Insurance Pension - Combined retirement and life protection',
          'Corporate Pension Schemes - Employer-sponsored plans with tax advantages',
          'International Pension Planning - Cross-border and expat solutions',
          'Pension Optimization - Tax-efficient retirement strategies'
        ],
        fr: [
          'Plans SEPCAV - Fonds d\'investissement spécialisés avec flexibilité maximale',
          'Pension d\'Assurance Vie Luxembourg - Protection retraite et vie combinée',
          'Régimes de Pension d\'Entreprise - Plans parrainés par l\'employeur avec avantages fiscaux',
          'Planification Internationale de Pension - Solutions transfrontalières et expatriés',
          'Optimisation de Pension - Stratégies de retraite fiscalement efficaces'
        ],
        sv: [
          'SEPCAV-planer - Specialiserade investeringsfonder med maximal flexibilitet',
          'Luxemburg Livförsäkringspension - Kombinerad pensions- och livskydd',
          'Företagspensionsscheman - Arbetsgivarsponsrade planer med skattefördelar',
          'Internationell Pensionsplanering - Gränsöverskridande och expat lösningar',
          'Pensionsoptimering - Skatteeffektiva pensionsstrategier'
        ]
      }
    }
    return fallbacks[serviceType]?.[currentLanguage] || fallbacks[serviceType]?.en || []
  }

  const getFallbackBenefits = (serviceType) => {
    const fallbacks = {
      insurance: {
        en: [
          'Expert guidance from licensed insurance professionals',
          'Competitive rates from multiple insurance carriers',
          'Comprehensive claims support and advocacy',
          'Regular policy reviews and updates',
          'Personalized coverage recommendations'
        ],
        fr: [
          'Conseils d\'experts de professionnels d\'assurance agréés',
          'Tarifs compétitifs de multiples compagnies d\'assurance',
          'Support complet pour les réclamations et plaidoyer',
          'Révisions et mises à jour régulières des polices',
          'Recommandations de couverture personnalisées'
        ],
        sv: [
          'Expertvägledning från licensierade försäkringsproffs',
          'Konkurrenskraftiga priser från flera försäkringsbolag',
          'Omfattande skadestöd och försvar',
          'Regelbundna policygenomgångar och uppdateringar',
          'Personliga täckningsrekommendationer'
        ]
      },
      dedicatedLifeInsurance: {
        en: [
          'Specialized expertise in life insurance products',
          'Personalized needs analysis and coverage recommendations',
          'Advanced features like living benefits and estate planning',
          'Tax-advantaged wealth building strategies',
          'Ongoing policy management and support'
        ],
        fr: [
          'Expertise spécialisée dans les produits d\'assurance vie',
          'Analyse personnalisée des besoins et recommandations de couverture',
          'Fonctionnalités avancées comme les prestations de vie et planification successorale',
          'Stratégies de création de richesse avec avantages fiscaux',
          'Gestion et support continus des polices'
        ],
        sv: [
          'Specialiserad expertis inom livförsäkringsprodukter',
          'Personlig behovsanalys och täckningsrekommendationer',
          'Avancerade funktioner som levande förmåner och dödsboplanering',
          'Skattefördelaktiga förmögenhetsbyggande strategier',
          'Pågående policyförvaltning och stöd'
        ]
      },
      investmentAdviser: {
        en: [
          'Fiduciary standard - we act in your best interests',
          'Personalized approach tailored to your goals',
          'Transparent fee structure with no hidden costs',
          'Continuous portfolio monitoring and adjustments',
          'Long-term focus with disciplined investment approach'
        ],
        fr: [
          'Standard fiduciaire - nous agissons dans votre meilleur intérêt',
          'Approche personnalisée adaptée à vos objectifs',
          'Structure de frais transparente sans coûts cachés',
          'Surveillance continue du portefeuille et ajustements',
          'Focus à long terme avec approche d\'investissement disciplinée'
        ],
        sv: [
          'Fiduciary standard - vi agerar i ditt bästa intresse',
          'Personlig approach anpassad till dina mål',
          'Transparent avgiftsstruktur utan dolda kostnader',
          'Kontinuerlig portföljövervakning och justeringar',
          'Långsiktigt fokus med disciplinerad investeringsmetod'
        ]
      },
      brokerInBank: {
        en: [
          'Extensive network of banking partners and institutions',
          'Negotiated best terms and competitive interest rates',
          'Expert guidance through complex banking processes',
          'Time-saving research and comparison services',
          'Regulatory compliance and professional licensing'
        ],
        fr: [
          'Vaste réseau de partenaires bancaires et d\'institutions',
          'Négociation des meilleures conditions et taux d\'intérêt compétitifs',
          'Guidance experte à travers des processus bancaires complexes',
          'Services de recherche et de comparaison qui font gagner du temps',
          'Conformité réglementaire et licence professionnelle'
        ],
        sv: [
          'Omfattande nätverk av bankpartners och institutioner',
          'Förhandlade bästa villkor och konkurrenskraftiga räntor',
          'Expertvägledning genom komplexa bankprocesser',
          'Tidsbesparande forsknings- och jämförelsetjänster',
          'Regulatorisk efterlevnad och professionell licensiering'
        ]
      },
      privatePensionPlan: {
        en: [
          'Luxembourg tax advantages and regulatory security',
          'EU-wide pension portability and international mobility',
          'Investment flexibility with multi-currency options',
          'Strong creditor protection and asset segregation',
          'Professional management and institutional access'
        ],
        fr: [
          'Avantages fiscaux luxembourgeois et sécurité réglementaire',
          'Portabilité de pension à l\'échelle de l\'UE et mobilité internationale',
          'Flexibilité d\'investissement avec options multi-devises',
          'Protection forte des créanciers et ségrégation des actifs',
          'Gestion professionnelle et accès institutionnel'
        ],
        sv: [
          'Luxemburgs skattefördelar och regulatorisk säkerhet',
          'EU-omfattande pensionsportabilitet och internationell mobilitet',
          'Investeringsflexibilitet med multivalutaalternativ',
          'Starkt borgenärsskydd och tillgångsseparation',
          'Professionell förvaltning och institutionell åtkomst'
        ]
      }
    }
    return fallbacks[serviceType]?.[currentLanguage] || fallbacks[serviceType]?.en || []
  }
  const [expandedServices, setExpandedServices] = useState(new Set())

  // Auto-expand service if specified in URL parameters
  useEffect(() => {
    const serviceId = searchParams.get('service')
    if (serviceId) {
      // First expand the service
      setExpandedServices(prev => {
        const newSet = new Set(prev)
        newSet.add(serviceId)
        return newSet
      })
      
      // Then scroll to the service after allowing time for DOM update
      setTimeout(() => {
        const element = document.getElementById(`service-${serviceId}`)
        if (element) {
          // Scroll with more padding from top for better visibility
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          })
        }
      }, 300)
    }
  }, [searchParams])

  const financialEducationVideos = [
    {
      id: 'bpmi-en',
      title: 'Borrower Paid Mortgage Insurance',
      youtubeId: '7ltogxhD6Xs'
    },
    {
      id: 'bpmi-fr',
      title: 'Assurance Solde Restant Dû',
      youtubeId: '1wGVUPcAtaA'
    },
    {
      id: 'mortgage-en',
      title: 'Mortgage Loan',
      youtubeId: '6_2K5tcRfWw'
    },
    {
      id: 'mortgage-fr',
      title: 'Prêt Immobilier',
      youtubeId: 'ohNkwTvkRGU'
    },
    {
      id: 'savings-en',
      title: 'House Savings Plan',
      youtubeId: 'UPXZ5q-XFe0'
    },
    {
      id: 'savings-fr',
      title: 'Épargne Logement',
      youtubeId: 'cVq9gvJN6IE'
    },
    {
      id: 'pension-en',
      title: 'Private Pension Plan',
      youtubeId: 'VIcqJ0WuaoY'
    },
    {
      id: 'pension-fr',
      title: 'Prévoyance Vieillesse',
      youtubeId: '_nxRWgmeFLU'
    },
    {
      id: 'welcome-en',
      title: 'Welcome to Advensys In-Finance',
      youtubeId: 'rrtUkqn9gqo'
    },
    {
      id: 'welcome-fr',
      title: 'Bonjour et Bienvenue chez Advensys In-Finance',
      youtubeId: 'amwQlWwkaMs'
    }
  ]

  // Filter videos based on language selection
  const getFilteredVideos = (videos) => {
    const { currentLanguage } = useLanguage()
    
    if (currentLanguage === 'fr') {
      // Show only French videos when French is selected
      return videos.filter(video => video.id.endsWith('-fr'))
    } else {
      // Show English videos for English and Swedish (or any other language)
      return videos.filter(video => video.id.endsWith('-en'))
    }
  }

  const mainServices = [
    {
      id: 'insurance',
      title: t('services.mainServices.insurance.title'),
      shortDescription: t('services.mainServices.insurance.shortDescription'),
      image: '/assets/category-1.png',
      relatedVideos: getFilteredVideos([
        {
          id: 'bpmi-en',
          title: 'Borrower Paid Mortgage Insurance',
          youtubeId: '7ltogxhD6Xs'
        },
        {
          id: 'bpmi-fr',
          title: 'Assurance Solde Restant Dû',
          youtubeId: '1wGVUPcAtaA'
        }
      ]).slice(0, 1), // Only show one video
      details: {
        overview: t('services.mainServices.insurance.overview'),
        services: getTranslatedArray('services.mainServices.insurance.services', getFallbackServices('insurance')),
        benefits: getTranslatedArray('services.mainServices.insurance.benefits', getFallbackBenefits('insurance'))
      }
    },
    {
      id: 'dedicated-life-insurance',
      title: t('services.mainServices.dedicatedLifeInsurance.title'),
      shortDescription: t('services.mainServices.dedicatedLifeInsurance.shortDescription'),
      image: '/assets/category-2.png',
      relatedVideos: getFilteredVideos([
        {
          id: 'welcome-en',
          title: 'Welcome to Advensys In-Finance - Life Insurance',
          youtubeId: 'rrtUkqn9gqo'
        },
        {
          id: 'welcome-fr',
          title: 'Bonjour et Bienvenue chez Advensys In-Finance - Assurance Vie',
          youtubeId: 'amwQlWwkaMs'
        }
      ]).slice(0, 1), // Only show one video
      details: {
        overview: t('services.mainServices.dedicatedLifeInsurance.overview'),
        services: getTranslatedArray('services.mainServices.dedicatedLifeInsurance.services', getFallbackServices('dedicatedLifeInsurance')),
        benefits: getTranslatedArray('services.mainServices.dedicatedLifeInsurance.benefits', getFallbackBenefits('dedicatedLifeInsurance'))
      }
    },
    {
      id: 'investment-adviser',
      title: t('services.mainServices.investmentAdviser.title'),
      shortDescription: t('services.mainServices.investmentAdviser.shortDescription'),
      image: '/assets/category-3.png',
      relatedVideos: getFilteredVideos([
        {
          id: 'welcome-en',
          title: 'Welcome to Advensys In-Finance',
          youtubeId: 'rrtUkqn9gqo'
        },
        {
          id: 'welcome-fr',
          title: 'Bonjour et Bienvenue chez Advensys In-Finance',
          youtubeId: 'amwQlWwkaMs'
        }
      ]).slice(0, 1), // Only show one video
      details: {
        overview: t('services.mainServices.investmentAdviser.overview'),
        services: getTranslatedArray('services.mainServices.investmentAdviser.services', getFallbackServices('investmentAdviser')),
        benefits: getTranslatedArray('services.mainServices.investmentAdviser.benefits', getFallbackBenefits('investmentAdviser'))
      }
    },
    {
      id: 'broker-in-bank',
      title: t('services.mainServices.brokerInBank.title'),
      shortDescription: t('services.mainServices.brokerInBank.shortDescription'),
      image: '/assets/category-4.png',
      relatedVideos: getFilteredVideos([
        {
          id: 'mortgage-en',
          title: 'Mortgage Loan',
          youtubeId: '6_2K5tcRfWw'
        },
        {
          id: 'mortgage-fr',
          title: 'Prêt Immobilier',
          youtubeId: 'ohNkwTvkRGU'
        }
      ]).slice(0, 1), // Only show one video
      details: {
        overview: t('services.mainServices.brokerInBank.overview'),
        services: getTranslatedArray('services.mainServices.brokerInBank.services', getFallbackServices('brokerInBank')),
        benefits: getTranslatedArray('services.mainServices.brokerInBank.benefits', getFallbackBenefits('brokerInBank'))
      }
    },
    {
      id: 'private-pension-plan',
      title: t('services.mainServices.privatePensionPlan.title'),
      shortDescription: t('services.mainServices.privatePensionPlan.shortDescription'),
      image: '/assets/category-5.png',
      relatedVideos: getFilteredVideos([
        {
          id: 'pension-en',
          title: 'Private Pension Plan',
          youtubeId: 'VIcqJ0WuaoY'
        },
        {
          id: 'pension-fr',
          title: 'Prévoyance Vieillesse',
          youtubeId: '_nxRWgmeFLU'
        }
      ]).slice(0, 1), // Only show one video
      details: {
        overview: t('services.mainServices.privatePensionPlan.overview'),
        services: getTranslatedArray('services.mainServices.privatePensionPlan.services', getFallbackServices('privatePensionPlan')),
        benefits: getTranslatedArray('services.mainServices.privatePensionPlan.benefits', getFallbackBenefits('privatePensionPlan'))
      }
    }
  ]

  const toggleService = (serviceId) => {
    setExpandedServices(prev => {
      const newSet = new Set(prev)
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId)
      } else {
        newSet.add(serviceId)
      }
      return newSet
    })
  }

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-title">{t('services.pageTitle')}</h1>
            <p className="page-subtitle">
              {t('services.pageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Company Services Section */}
      <section id="main-services" className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('services.mainServicesTitle')}</h2>
            <p className="section-subtitle">
              {t('services.mainServicesSubtitle')}
            </p>
          </div>

          <div className="services-list">
            {mainServices.map(service => (
              <div key={service.id} id={`service-${service.id}`} className={`service-item ${expandedServices.has(service.id) ? 'expanded' : ''}`}>
                <div className="service-summary" onClick={() => toggleService(service.id)}>
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="service-basic-info">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-short-description">{service.shortDescription}</p>
                    <button className="expand-btn">
                      {expandedServices.has(service.id) ? t('services.showLess') : t('services.learnMore')}
                      <span className={`arrow ${expandedServices.has(service.id) ? 'up' : 'down'}`}>→</span>
                    </button>
                  </div>
                </div>

                {expandedServices.has(service.id) && (
                  <div className="service-details">
                    <div className="service-overview">
                      <h4>{t('services.overview')}</h4>
                      <p>{service.details.overview}</p>
                    </div>

                    {service.relatedVideos && service.relatedVideos.length > 0 && (
                      <div className="service-videos">
                        <h4>{t('services.educationalVideos')}</h4>
                        <div className="videos-grid">
                          {service.relatedVideos.map(video => (
                            <div key={video.id} className="video-item">
                              <h5 className="video-title">{video.title}</h5>
                              <div className="video-wrapper">
                                <div className="youtube-video">
                                  <iframe
                                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="video-player"
                                  ></iframe>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="service-offerings">
                      <div className="offerings-section">
                        <h4>{t('services.ourServicesInclude')}</h4>
                        <ul>
                          {service.details.services.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="benefits-section">
                        <h4>{t('services.keyBenefits')}</h4>
                        <ul>
                          {service.details.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="service-cta">
                      <h4>{t('services.readyToStart')}</h4>
                      <p>Contact us today to discuss your {service.title.toLowerCase()} needs and get a personalized quote.</p>
                      <div className="cta-buttons">
                        <Link to="/contact" className="btn btn-primary">
                          {t('common.contactUs')}
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                          {t('common.getQuote')}
                        </Link>
                        <a href={`tel:${currentLocationData?.phone?.replace(/\s/g, '')}`} className="btn btn-outline">
                          {t('services.callNow')}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <div className="services-cta">
            <div className="cta-content text-center">
              <h2 className="cta-title">{t('services.readyToStart')}</h2>
              <p className="cta-description">
                {t('services.ctaDescription')}
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  {t('services.contactUsToday')}
                </Link>
                <a href={`tel:${currentLocationData?.phone?.replace(/\s/g, '')}`} className="cta-phone">
                  <img src="/assets/phone.svg" alt="Phone" />
                  <span>{t('services.call')}: {currentLocationData?.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services