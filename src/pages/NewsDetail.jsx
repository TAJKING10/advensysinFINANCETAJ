import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import './NewsDetail.css'

const NewsDetail = () => {
  const { id } = useParams()
  const { t, currentLanguage } = useLanguage()

  const newsArticles = [
    {
      id: 1,
      title: t('news.articles.privatePension.title'),
      excerpt: t('news.articles.privatePension.excerpt'),
      content: `
        <h2>Luxembourg Private Pension Plans: Your Path to Secure Retirement</h2>
        <p>Luxembourg has established itself as a premier destination for private pension planning, offering unparalleled advantages for retirement security through its robust regulatory framework and significant tax benefits.</p>
        
        <h3>Why Choose Luxembourg for Your Pension Plan?</h3>
        <ul>
          <li><strong>Political Stability:</strong> Luxembourg's stable political environment provides long-term security for your retirement investments.</li>
          <li><strong>Regulatory Excellence:</strong> Strong regulatory oversight ensures your pension assets are protected and professionally managed.</li>
          <li><strong>Tax Advantages:</strong> Significant tax benefits during accumulation and distribution phases.</li>
          <li><strong>EU Portability:</strong> Pension plans that move with you across European Union countries.</li>
        </ul>

        <h3>SEPCAV Plans: Maximum Investment Flexibility</h3>
        <p>Specialized investment funds (SEPCAV) offer unprecedented flexibility in your pension planning. These plans allow you to:</p>
        <ul>
          <li>Choose from a wide range of investment options</li>
          <li>Benefit from institutional-level investment access</li>
          <li>Enjoy multi-currency investment opportunities</li>
          <li>Access professional fund management services</li>
        </ul>

        <h3>Luxembourg Life Insurance Pension Plans</h3>
        <p>Combining retirement planning with life insurance protection, these plans offer dual benefits of wealth accumulation and family protection. Features include:</p>
        <ul>
          <li>Tax-efficient wealth building</li>
          <li>Life insurance coverage for family protection</li>
          <li>Flexible premium payment options</li>
          <li>Strong creditor protection</li>
        </ul>

        <h3>International Pension Planning</h3>
        <p>Perfect for expatriates and international professionals, Luxembourg pension plans provide cross-border solutions that adapt to your global lifestyle.</p>

        <blockquote>
          "Luxembourg private pension plans represent the gold standard in European retirement planning, combining security, flexibility, and tax efficiency." - European Pension Institute
        </blockquote>

        <h3>Getting Started</h3>
        <p>Our pension planning specialists can help you navigate the options and design a customized retirement strategy that leverages Luxembourg's unique advantages for your specific needs.</p>
      `,
      image: '/assets/category-5.png',
      date: '2024-01-15',
      category: t('news.categories.privatePension'),
      readTime: t('news.articles.privatePension.readTime'),
      author: t('news.articles.privatePension.author'),
      authorBio: t('news.articles.privatePension.authorBio')
    },
    {
      id: 2,
      title: t('news.articles.investment.title'),
      excerpt: t('news.articles.investment.excerpt'),
      content: `
        <h2>Professional Investment Guidance for Your Financial Success</h2>
        <p>As registered investment advisers, we provide personalized investment guidance and portfolio management services designed to help you achieve your financial goals through disciplined, research-driven strategies.</p>

        <h3>Our Fiduciary Commitment</h3>
        <p>We operate under the fiduciary standard, which means we are legally and ethically bound to act in your best interests at all times. This commitment ensures:</p>
        <ul>
          <li>Transparent fee structures with no hidden costs</li>
          <li>Objective investment recommendations</li>
          <li>Ongoing investment monitoring and optimization</li>
          <li>Regular communication about your investments</li>
        </ul>

        <h3>Comprehensive Investment Strategy</h3>
        <p>Our investment services include customized strategies tailored to your risk tolerance, time horizon, and financial objectives:</p>
        
        <h4>Asset Allocation Strategy</h4>
        <p>We develop strategic asset allocation models based on your individual circumstances, ensuring optimal diversification across asset classes and geographic regions.</p>

        <h4>Investment Research & Analysis</h4>
        <p>Our investment team conducts thorough market research and security analysis to identify opportunities and manage risks in your portfolio.</p>

        <h3>Goal-Based Investment Planning</h3>
        <p>We align your investment strategy with your specific life goals:</p>
        <ul>
          <li><strong>Retirement Planning:</strong> Building wealth for your golden years</li>
          <li><strong>Education Funding:</strong> Saving for children's education expenses</li>
          <li><strong>Wealth Preservation:</strong> Protecting and growing existing wealth</li>
          <li><strong>Legacy Planning:</strong> Creating generational wealth transfer strategies</li>
        </ul>

        <h3>Tax-Efficient Investing</h3>
        <p>We implement strategies to minimize the tax impact on your investments, including:</p>
        <ul>
          <li>Tax-loss harvesting techniques</li>
          <li>Asset location optimization</li>
          <li>Tax-advantaged account utilization</li>
          <li>Municipal bond strategies for high earners</li>
        </ul>

        <h3>High Net Worth Services</h3>
        <p>For high net worth individuals and institutional clients, we offer specialized services including alternative investments, private equity access, and sophisticated wealth management strategies.</p>

        <h3>Your Investment Success Partner</h3>
        <p>Our long-term focus and disciplined approach to investing have helped clients build substantial wealth while managing risk. Contact us to learn how our investment advisory services can help you achieve your financial aspirations.</p>
      `,
      image: '/assets/category-3.png',
      date: '2024-01-10',
      category: t('news.categories.investment'),
      readTime: t('news.articles.investment.readTime'),
      author: t('news.articles.investment.author'),
      authorBio: t('news.articles.investment.authorBio')
    },
    {
      id: 3,
      title: t('news.articles.banking.title'),
      excerpt: t('news.articles.banking.excerpt'),
      content: `
        <h2>Bridging You to Optimal Banking Solutions</h2>
        <p>As licensed banking intermediaries, we bridge the gap between you and financial institutions to secure the best banking products and services with optimal terms and conditions.</p>

        <h3>Extensive Banking Network</h3>
        <p>Our extensive network of banking partners and financial institutions enables us to:</p>
        <ul>
          <li>Compare rates and terms from multiple lenders</li>
          <li>Negotiate better conditions on your behalf</li>
          <li>Access specialized banking products</li>
          <li>Provide solutions for complex financial needs</li>
        </ul>

        <h3>Comprehensive Loan Brokerage Services</h3>
        
        <h4>Mortgage Solutions</h4>
        <p>Whether you're purchasing your first home or refinancing an existing mortgage, we help you find competitive rates and favorable terms from our network of mortgage lenders.</p>

        <h4>Business Lending</h4>
        <p>From startup funding to expansion capital, we connect businesses with appropriate lending solutions including:</p>
        <ul>
          <li>Term loans for equipment and expansion</li>
          <li>Lines of credit for working capital</li>
          <li>Commercial real estate financing</li>
          <li>Asset-based lending solutions</li>
        </ul>

        <h4>Personal Lending</h4>
        <p>For personal financial needs, we help secure competitive personal loans, debt consolidation options, and specialized lending products.</p>

        <h3>Banking Services Excellence</h3>
        <p>Beyond lending, we provide access to comprehensive banking services:</p>
        <ul>
          <li><strong>Business Banking:</strong> Commercial accounts, cash management, and treasury services</li>
          <li><strong>International Solutions:</strong> Multi-currency accounts and international transfer services</li>
          <li><strong>Private Banking:</strong> High-net-worth banking and wealth management services</li>
          <li><strong>Offshore Solutions:</strong> International banking for global clients</li>
        </ul>

        <h3>Trade Finance Solutions</h3>
        <p>For businesses engaged in international trade, we facilitate:</p>
        <ul>
          <li>Letters of credit for secure international transactions</li>
          <li>Invoice financing and factoring services</li>
          <li>Export financing solutions</li>
          <li>Currency hedging and risk management</li>
        </ul>

        <h3>The Advantage of Professional Brokerage</h3>
        <p>Working with professional banking intermediaries saves you time and money while ensuring you get the best possible terms. Our expertise in banking regulations and market conditions helps you navigate complex financial products with confidence.</p>

        <h3>Regulatory Compliance</h3>
        <p>All our banking intermediary services are provided under appropriate professional licensing and regulatory oversight, ensuring compliance with financial services regulations and protection for our clients.</p>
      `,
      image: '/assets/category-4.png',
      date: '2024-01-05',
      category: t('news.categories.banking'),
      readTime: t('news.articles.banking.readTime'),
      author: t('news.articles.banking.author'),
      authorBio: t('news.articles.banking.authorBio')
    },
    {
      id: 4,
      title: t('news.articles.lifeInsurance.title'),
      excerpt: t('news.articles.lifeInsurance.excerpt'),
      content: `
        <h2>Comprehensive Life Insurance Solutions for Every Need</h2>
        <p>Our dedicated life insurance services focus exclusively on providing comprehensive life insurance solutions that ensure your loved ones are financially protected when they need it most.</p>

        <h3>Term Life Insurance Options</h3>
        <p>Term life insurance provides substantial coverage at affordable premiums, making it ideal for young families and those with temporary insurance needs.</p>
        
        <h4>Available Term Options:</h4>
        <ul>
          <li><strong>10-Year Term:</strong> Short-term coverage for specific financial obligations</li>
          <li><strong>20-Year Term:</strong> Popular choice for mortgage protection and child-rearing years</li>
          <li><strong>30-Year Term:</strong> Long-term protection for extended financial responsibilities</li>
        </ul>

        <p>All term policies feature level premiums throughout the term period, providing predictable costs for your budget planning.</p>

        <h3>Permanent Life Insurance Solutions</h3>
        
        <h4>Whole Life Insurance</h4>
        <p>Provides lifetime coverage with guaranteed cash value accumulation. Benefits include:</p>
        <ul>
          <li>Guaranteed death benefit for life</li>
          <li>Tax-advantaged cash value growth</li>
          <li>Fixed premiums that never increase</li>
          <li>Dividend potential with participating policies</li>
        </ul>

        <h4>Universal Life Insurance</h4>
        <p>Offers flexible premiums and adjustable death benefits with investment growth potential:</p>
        <ul>
          <li>Flexible premium payment options</li>
          <li>Adjustable death benefit amounts</li>
          <li>Cash value growth based on current interest rates</li>
          <li>Potential for reduced premiums from cash value</li>
        </ul>

        <h4>Variable Life Insurance</h4>
        <p>Investment-linked policies that offer growth potential through various investment options:</p>
        <ul>
          <li>Choice of investment sub-accounts</li>
          <li>Potential for significant cash value growth</li>
          <li>Tax-deferred investment gains</li>
          <li>Professional investment management options</li>
        </ul>

        <h3>Group Life Insurance</h3>
        <p>Employer-sponsored life insurance plans that provide valuable employee benefits:</p>
        <ul>
          <li>Cost-effective group rates</li>
          <li>Simplified underwriting processes</li>
          <li>Portable coverage options</li>
          <li>Supplemental voluntary coverage</li>
        </ul>

        <h3>Advanced Life Insurance Features</h3>
        
        <h4>Living Benefits</h4>
        <p>Modern life insurance policies can provide benefits while you're still alive:</p>
        <ul>
          <li>Accelerated death benefits for terminal illness</li>
          <li>Chronic care benefits for long-term care needs</li>
          <li>Critical illness benefits for major health events</li>
        </ul>

        <h4>Estate Planning Integration</h4>
        <p>Life insurance plays a crucial role in estate planning strategies:</p>
        <ul>
          <li>Estate tax liquidity provision</li>
          <li>Wealth transfer optimization</li>
          <li>Business succession planning</li>
          <li>Charitable giving strategies</li>
        </ul>

        <h3>Specialized Expertise</h3>
        <p>Our dedicated life insurance specialists conduct thorough needs analysis to determine the right amount and type of coverage for your situation. We consider factors such as your age, health, income, debts, and family obligations to create a comprehensive protection strategy.</p>

        <h3>Ongoing Policy Management</h3>
        <p>Life insurance needs change over time. We provide ongoing policy reviews and management services to ensure your coverage remains aligned with your evolving needs and circumstances.</p>
      `,
      image: '/assets/category-2.png',
      date: '2023-12-28',
      category: t('news.categories.lifeInsurance'),
      readTime: t('news.articles.lifeInsurance.readTime'),
      author: t('news.articles.lifeInsurance.author'),
      authorBio: t('news.articles.lifeInsurance.authorBio')
    },
    {
      id: 5,
      title: t('news.articles.insurance.title'),
      excerpt: t('news.articles.insurance.excerpt'),
      content: `
        <h2>Complete Protection for All Your Insurance Needs</h2>
        <p>At Advensys Insurance Finance, we provide comprehensive insurance solutions that protect what matters most to you. Our experienced team works with leading insurance carriers to offer competitive rates and comprehensive coverage across all major insurance categories.</p>

        <h3>Life Insurance Solutions</h3>
        <p>Protecting your family's financial future with comprehensive life insurance options:</p>
        
        <h4>Term Life Insurance</h4>
        <ul>
          <li>10, 20, and 30-year term options with level premiums</li>
          <li>Convertible policies for future flexibility</li>
          <li>Return of premium options available</li>
        </ul>

        <h4>Permanent Life Insurance</h4>
        <ul>
          <li>Whole life policies with guaranteed cash value</li>
          <li>Universal life with flexible premiums</li>
          <li>Variable life with investment options</li>
        </ul>

        <h3>Health Insurance Coverage</h3>
        <p>Comprehensive health insurance solutions for individuals, families, and groups:</p>
        <ul>
          <li><strong>Individual Plans:</strong> Customized health coverage for self-employed and individuals</li>
          <li><strong>Family Plans:</strong> Complete family health protection with pediatric care</li>
          <li><strong>Group Plans:</strong> Employer-sponsored health insurance with competitive rates</li>
          <li><strong>Supplemental Coverage:</strong> Dental, vision, and critical illness insurance</li>
        </ul>

        <h3>Property Insurance Protection</h3>
        
        <h4>Homeowners Insurance</h4>
        <p>Protecting your most valuable asset with comprehensive coverage:</p>
        <ul>
          <li>Dwelling coverage for structure protection</li>
          <li>Personal property coverage for belongings</li>
          <li>Liability protection for accidents on your property</li>
          <li>Additional living expenses coverage</li>
        </ul>

        <h4>Renters Insurance</h4>
        <p>Affordable protection for tenants covering personal property and liability.</p>

        <h4>Commercial Property Insurance</h4>
        <p>Business property protection including buildings, equipment, and inventory.</p>

        <h3>Business Insurance Solutions</h3>
        <p>Comprehensive business protection for enterprises of all sizes:</p>
        <ul>
          <li><strong>General Liability:</strong> Protection against third-party claims</li>
          <li><strong>Professional Liability:</strong> Errors and omissions coverage</li>
          <li><strong>Workers' Compensation:</strong> Employee injury and illness protection</li>
          <li><strong>Cyber Liability:</strong> Data breach and cyber attack protection</li>
          <li><strong>Business Interruption:</strong> Income protection during covered events</li>
        </ul>

        <h3>Auto Insurance Coverage</h3>
        <p>Comprehensive vehicle protection with competitive rates:</p>
        <ul>
          <li>Liability coverage for bodily injury and property damage</li>
          <li>Comprehensive coverage for non-collision events</li>
          <li>Collision coverage for accident damage</li>
          <li>Uninsured/underinsured motorist protection</li>
          <li>Personal injury protection (PIP)</li>
        </ul>

        <h3>Why Choose Our Insurance Services?</h3>
        
        <h4>Expert Guidance</h4>
        <p>Our licensed insurance professionals provide expert guidance throughout the entire process, from initial consultation to claims support.</p>

        <h4>Competitive Rates</h4>
        <p>We work with multiple insurance carriers to ensure you get competitive rates and the best value for your insurance dollar.</p>

        <h4>Comprehensive Claims Support</h4>
        <p>When you need to file a claim, our team provides advocacy and support to ensure fair and prompt claim resolution.</p>

        <h4>Regular Policy Reviews</h4>
        <p>We conduct regular policy reviews to ensure your coverage remains adequate as your life circumstances change.</p>

        <h3>Personalized Service</h3>
        <p>Every client receives personalized attention with coverage recommendations tailored to their specific needs, budget, and risk tolerance. Contact us today to discuss how our comprehensive insurance services can protect what matters most to you.</p>
      `,
      image: '/assets/category-1.png',
      date: '2023-12-20',
      category: t('news.categories.insurance'),
      readTime: t('news.articles.insurance.readTime'),
      author: t('news.articles.insurance.author'),
      authorBio: t('news.articles.insurance.authorBio')
    }
  ]

  const article = newsArticles.find(article => article.id === parseInt(id))

  if (!article) {
    return (
      <div className="news-detail-page">
        <div className="container">
          <div className="article-not-found">
            <h1>{t('news.articleNotFound')}</h1>
            <p>{t('news.articleNotFoundText')}</p>
            <Link to="/news" className="btn btn-primary">{t('news.backToNews')}</Link>
          </div>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const locale = currentLanguage === 'fr' ? 'fr-FR' : currentLanguage === 'sv' ? 'sv-SE' : 'en-US'
    const month = date.toLocaleDateString(locale, { month: 'long' })
    const day = date.getDate()
    const year = date.getFullYear()
    return `${month} ${day}, ${year}`
  }

  return (
    <div className="news-detail-page">
      <section className="article-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">{t('news.home')}</Link>
            <span>/</span>
            <Link to="/news">{t('news.newsTitle')}</Link>
            <span>/</span>
            <span>{article.title}</span>
          </nav>
          
          <div className="article-meta">
            <span className="article-category">{article.category}</span>
            <span className="article-date">{formatDate(article.date)}</span>
            <span className="article-read-time">{article.readTime}</span>
          </div>
          
          <h1 className="article-title">{article.title}</h1>
          <p className="article-excerpt">{article.excerpt}</p>
          
        </div>
      </section>

      <section className="article-content">
        <div className="container">
          <div className="article-image">
            <img src={article.image} alt={article.title} />
          </div>
          
          <div className="article-body">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
          
          <div className="article-footer">
            <div className="share-section">


            </div>
            
            <Link to="/news" className="btn btn-primary">{t('news.backToNews')}</Link>
          </div>
        </div>
      </section>

{/*       <section className="related-articles"> */}
{/*         <div className="container"> */}
{/*           <h3>Related Articles</h3> */}
{/*           <div className="related-grid"> */}
{/*             {newsArticles */}
{/*               .filter(relatedArticle =>  */}
{/*                 relatedArticle.id !== article.id &&  */}
{/*                 relatedArticle.category === article.category */}
{/*               ) */}
{/*               .slice(0, 3) */}
{/*               .map(relatedArticle => ( */}
{/*                 <div key={relatedArticle.id} className="related-card"> */}
{/*                   <img src={relatedArticle.image} alt={relatedArticle.title} /> */}
{/*                   <div className="related-content"> */}
{/*                     <h4> */}
{/*                       <Link to={`/news/${relatedArticle.id}`}> */}
{/*                         {relatedArticle.title} */}
{/*                       </Link> */}
{/*                     </h4> */}
{/*                     <p>{relatedArticle.excerpt}</p> */}
{/*                     <span className="related-date">{formatDate(relatedArticle.date)}</span> */}
{/*                   </div> */}
{/*                 </div> */}
{/*               ))} */}
{/*           </div> */}
{/*         </div> */}
{/*       </section> */}
    </div>
  )
}

export default NewsDetail