import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import './NewsDetail.css'

const NewsDetail = () => {
  const { id } = useParams()
  const { t } = useLanguage()

  const newsArticles = [
    {
      id: 1,
      title: '2024 Health Insurance Changes You Need to Know',
      excerpt: 'Important updates to health insurance regulations and what they mean for your coverage options this year.',
      content: `
        <h2>Understanding the New Health Insurance Landscape</h2>
        <p>The year 2024 brings significant changes to health insurance regulations that could impact millions of Americans. These updates are designed to improve access to healthcare while maintaining quality coverage options.</p>
        
        <h3>Key Changes for 2024</h3>
        <ul>
          <li><strong>Expanded Coverage Options:</strong> New plans now include enhanced mental health coverage as standard, not as an add-on.</li>
          <li><strong>Prescription Drug Benefits:</strong> Lower copays for essential medications, particularly for chronic conditions.</li>
          <li><strong>Telehealth Services:</strong> Permanent coverage for virtual consultations, making healthcare more accessible.</li>
          <li><strong>Preventive Care:</strong> Expanded list of covered preventive services with no out-of-pocket costs.</li>
        </ul>

        <h3>What This Means for You</h3>
        <p>These changes could result in lower overall healthcare costs for many families. The emphasis on preventive care means you can catch health issues early, potentially saving thousands in treatment costs.</p>

        <h3>Action Steps</h3>
        <p>Review your current plan during the next enrollment period to see if you can benefit from these new options. Consider consulting with a healthcare insurance specialist to understand how these changes apply to your specific situation.</p>

        <blockquote>
          "The 2024 health insurance changes represent the most significant improvements to healthcare accessibility in recent years." - Healthcare Policy Institute
        </blockquote>
      `,
      image: '/assets/news-1.png',
      date: '2024-01-15',
      category: 'Health Insurance',
      readTime: '5 min read',
      author: 'Dr. Emily Wilson',
      authorBio: 'Dr. Wilson is a healthcare policy expert with over 15 years of experience in insurance regulation.'
    },
    {
      id: 2,
      title: 'Top 5 Ways to Lower Your Auto Insurance Premium',
      excerpt: 'Discover proven strategies to reduce your car insurance costs without sacrificing coverage quality.',
      content: `
        <h2>Smart Strategies to Reduce Your Auto Insurance Costs</h2>
        <p>Auto insurance is a necessary expense, but that doesn't mean you have to overpay. Here are five proven strategies to lower your premiums while maintaining adequate coverage.</p>

        <h3>1. Bundle Your Policies</h3>
        <p>Combining your auto insurance with home or renters insurance can save you 10-25% on both policies. Most major insurers offer multi-policy discounts that can result in significant savings.</p>

        <h3>2. Maintain a Clean Driving Record</h3>
        <p>Your driving history is one of the biggest factors in determining your premium. Avoid accidents and traffic violations to qualify for safe driver discounts.</p>

        <h3>3. Choose Your Vehicle Wisely</h3>
        <p>Before purchasing a car, research insurance costs. Vehicles with high safety ratings and lower theft rates typically cost less to insure.</p>

        <h3>4. Increase Your Deductible</h3>
        <p>Raising your deductible from $500 to $1,000 can reduce your premium by 10-15%. Just make sure you can afford the higher out-of-pocket cost if you need to file a claim.</p>

        <h3>5. Take Advantage of Discounts</h3>
        <ul>
          <li>Good student discounts for young drivers</li>
          <li>Low mileage discounts for those who drive less</li>
          <li>Safety feature discounts for cars with anti-theft devices</li>
          <li>Defensive driving course completion discounts</li>
        </ul>

        <p>Remember to shop around and compare quotes from multiple insurers annually to ensure you're getting the best rate.</p>
      `,
      image: '/assets/news-2.png',
      date: '2024-01-10',
      category: 'Auto Insurance',
      readTime: '4 min read',
      author: 'Mark Thompson',
      authorBio: 'Mark is an insurance industry analyst with expertise in auto coverage and consumer savings strategies.'
    },
    {
      id: 3,
      title: 'Life Insurance Planning for Growing Families',
      excerpt: 'Essential considerations for life insurance when expanding your family and planning for the future.',
      content: `
        <h2>Securing Your Family's Financial Future</h2>
        <p>When your family grows, so do your financial responsibilities. Life insurance becomes not just important, but essential for protecting your loved ones' financial security.</p>

        <h3>How Much Coverage Do You Need?</h3>
        <p>A common rule of thumb is 10 times your annual income, but growing families should consider:</p>
        <ul>
          <li>Outstanding debts (mortgage, car loans, credit cards)</li>
          <li>Future education costs for children</li>
          <li>Ongoing living expenses for your family</li>
          <li>Final expenses and estate settlement costs</li>
        </ul>

        <h3>Term vs. Permanent Life Insurance</h3>
        <p><strong>Term Life Insurance:</strong> More affordable option that provides coverage for a specific period (10, 20, or 30 years). Ideal for young families with temporary needs.</p>
        
        <p><strong>Permanent Life Insurance:</strong> Builds cash value over time and provides lifelong coverage. Better for estate planning and long-term financial goals.</p>

        <h3>When to Review Your Coverage</h3>
        <p>Life changes that should trigger a policy review:</p>
        <ul>
          <li>Birth or adoption of a child</li>
          <li>Marriage or divorce</li>
          <li>Significant income changes</li>
          <li>Major purchases (home, business)</li>
          <li>Children becoming financially independent</li>
        </ul>

        <h3>Getting Started</h3>
        <p>Don't wait to get life insurance. Premiums are generally lower when you're younger and healthier. Consider working with a licensed agent who can help you navigate the options and find the right coverage for your family's needs.</p>
      `,
      image: '/assets/hero-1.png',
      date: '2024-01-05',
      category: 'Life Insurance',
      readTime: '6 min read',
      author: 'Sarah Davis',
      authorBio: 'Sarah is a certified financial planner specializing in family financial security and insurance planning.'
    },
    {
      id: 4,
      title: 'Small Business Insurance: Essential Coverage Guide',
      excerpt: 'Comprehensive guide to protecting your business with the right insurance coverage options.',
      content: `
        <h2>Protecting Your Business Investment</h2>
        <p>Starting and running a small business involves numerous risks. The right insurance coverage can mean the difference between a minor setback and a business-ending catastrophe.</p>

        <h3>Essential Business Insurance Types</h3>
        
        <h4>General Liability Insurance</h4>
        <p>Protects against claims of bodily injury, property damage, and personal injury that occur on your business premises or as a result of your operations.</p>

        <h4>Professional Liability Insurance</h4>
        <p>Also known as errors and omissions (E&O) insurance, this covers claims arising from professional mistakes, negligence, or failure to deliver services as promised.</p>

        <h4>Commercial Property Insurance</h4>
        <p>Covers your business property, including buildings, equipment, inventory, and supplies against fire, theft, vandalism, and certain natural disasters.</p>

        <h4>Workers' Compensation</h4>
        <p>Required in most states if you have employees. Covers medical expenses and lost wages for work-related injuries or illnesses.</p>

        <h3>Industry-Specific Considerations</h3>
        <ul>
          <li><strong>Restaurants:</strong> Need food contamination and liquor liability coverage</li>
          <li><strong>Technology Companies:</strong> Require cyber liability and data breach coverage</li>
          <li><strong>Retail Stores:</strong> Need product liability and business interruption insurance</li>
          <li><strong>Service Providers:</strong> Should consider professional liability and commercial auto</li>
        </ul>

        <h3>Cost-Saving Tips</h3>
        <p>Bundle policies with the same insurer for discounts, implement safety programs to reduce claims, and review coverage annually to ensure you're not over-insured or under-protected.</p>

        <p>Remember: The cost of insurance is minimal compared to the potential cost of being uninsured when disaster strikes.</p>
      `,
      image: '/assets/hero-2.png',
      date: '2023-12-28',
      category: 'Business Insurance',
      readTime: '7 min read',
      author: 'John Martinez',
      authorBio: 'John is a business insurance specialist who has helped hundreds of small businesses protect their operations.'
    },
    {
      id: 5,
      title: 'Property Insurance: Protecting Your Most Valuable Assets',
      excerpt: 'Understanding property insurance coverage options to safeguard your home and belongings from unexpected events.',
      content: `
        <h2>Securing Your Home and Belongings</h2>
        <p>Your home is likely your largest investment, and property insurance is your financial safety net against unexpected events that could damage or destroy your property.</p>

        <h3>Types of Property Insurance Coverage</h3>
        
        <h4>Dwelling Coverage</h4>
        <p>Protects the physical structure of your home, including walls, roof, floors, and built-in appliances. This is typically the largest component of your homeowners policy.</p>

        <h4>Personal Property Coverage</h4>
        <p>Covers your belongings inside the home, such as furniture, clothing, electronics, and other personal items. Usually covers 50-70% of your dwelling coverage amount.</p>

        <h4>Additional Living Expenses (ALE)</h4>
        <p>Pays for temporary housing and living expenses if your home becomes uninhabitable due to a covered loss, such as a fire or severe storm damage.</p>

        <h4>Liability Protection</h4>
        <p>Covers legal expenses and damages if someone is injured on your property or if you accidentally damage someone else's property.</p>

        <h3>Understanding Coverage Limits and Deductibles</h3>
        <p>Choose replacement cost coverage over actual cash value to ensure you can rebuild or replace items at current prices. Consider your deductible carefully - higher deductibles mean lower premiums but more out-of-pocket costs when you file a claim.</p>

        <h3>Special Considerations</h3>
        <ul>
          <li><strong>Flood Insurance:</strong> Not covered by standard homeowners policies - requires separate flood insurance</li>
          <li><strong>High-Value Items:</strong> Jewelry, art, and collectibles may need additional coverage</li>
          <li><strong>Home-Based Business:</strong> May require additional business property coverage</li>
          <li><strong>Renovations:</strong> Notify your insurer of major improvements that increase your home's value</li>
        </ul>

        <h3>Money-Saving Tips</h3>
        <p>Install security systems, smoke detectors, and other safety features for discounts. Bundle with auto insurance, maintain good credit, and review your policy annually to ensure adequate coverage.</p>

        <p>Property insurance isn't just about compliance with mortgage requirements - it's about protecting your family's financial security and peace of mind.</p>
      `,
      image: '/assets/about-1.png',
      date: '2023-12-20',
      category: 'Property Insurance',
      readTime: '8 min read',
      author: 'Lisa Chen',
      authorBio: 'Lisa is a property insurance expert with over 12 years of experience helping homeowners understand their coverage options.'
    }
  ]

  const article = newsArticles.find(article => article.id === parseInt(id))

  if (!article) {
    return (
      <div className="news-detail-page">
        <div className="container">
          <div className="article-not-found">
            <h1>Article Not Found</h1>
            <p>The article you're looking for doesn't exist.</p>
            <Link to="/news" className="btn btn-primary">Back to News</Link>
          </div>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="news-detail-page">
      <section className="article-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/news">News</Link>
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
          
          <div className="author-info">
            <div className="author-details">
              <h4 className="author-name">By {article.author}</h4>
              <p className="author-bio">{article.authorBio}</p>
            </div>
          </div>
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
            
            <Link to="/news" className="btn btn-primary">Back to News</Link>
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