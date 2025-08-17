import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import './News.css'

const News = () => {
  const { t } = useLanguage()
  
  const newsArticles = [
    {
      id: 1,
      title: '2024 Health Insurance Changes You Need to Know',
      excerpt: 'Important updates to health insurance regulations and what they mean for your coverage options this year.',
      content: 'Full article content would go here...',
      image: '/assets/news-1.png',
      date: '2024-01-15',
      category: 'Health Insurance',
      readTime: '5 min read',
      author: 'Dr. Emily Wilson'
    },
    {
      id: 2,
      title: 'Top 5 Ways to Lower Your Auto Insurance Premium',
      excerpt: 'Discover proven strategies to reduce your car insurance costs without sacrificing coverage quality.',
      content: 'Full article content would go here...',
      image: '/assets/news-2.png',
      date: '2024-01-10',
      category: 'Auto Insurance',
      readTime: '4 min read',
      author: 'Mark Thompson'
    },
    {
      id: 3,
      title: 'Life Insurance Planning for Growing Families',
      excerpt: 'Essential considerations for life insurance when expanding your family and planning for the future.',
      content: 'Full article content would go here...',
      image: '/assets/hero-1.png',
      date: '2024-01-05',
      category: 'Life Insurance',
      readTime: '6 min read',
      author: 'Sarah Davis'
    },
    {
      id: 4,
      title: 'Small Business Insurance: Essential Coverage Guide',
      excerpt: 'Comprehensive guide to protecting your business with the right insurance coverage options.',
      content: 'Full article content would go here...',
      image: '/assets/hero-2.png',
      date: '2023-12-28',
      category: 'Business Insurance',
      readTime: '7 min read',
      author: 'John Martinez'
    },
    {
      id: 5,
      title: 'Property Insurance: Protecting Your Most Valuable Assets',
      excerpt: 'Understanding property insurance coverage options to safeguard your home and belongings from unexpected events.',
      content: 'Full article content would go here...',
      image: '/assets/about-1.png',
      date: '2023-12-20',
      category: 'Property Insurance',
      readTime: '8 min read',
      author: 'Lisa Chen'
    }
  ]

  const categories = [
    { key: 'All', label: t('newsPage.categories.all') },
    { key: 'Health Insurance', label: t('newsPage.categories.health') },
    { key: 'Auto Insurance', label: t('newsPage.categories.auto') },
    { key: 'Life Insurance', label: t('newsPage.categories.life') },
    { key: 'Business Insurance', label: t('newsPage.categories.business') },
    { key: 'Property Insurance', label: t('newsPage.categories.property') }
  ]
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredArticles = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory)

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="news-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-title">{t('newsPage.title')}</h1>
            <p className="page-subtitle">
              {t('newsPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {newsArticles.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="featured-article">
              <div className="featured-content">
                <div className="featured-meta">
                  <span className="featured-category">{newsArticles[0].category}</span>
                  <span className="featured-date">{formatDate(newsArticles[0].date)}</span>
                </div>
                <h2 className="featured-title">{newsArticles[0].title}</h2>
                <p className="featured-excerpt">{newsArticles[0].excerpt}</p>
                <div className="featured-author-info">
                  <span className="author">{t('newsPage.byAuthor', { author: newsArticles[0].author })}</span>
                  <span className="read-time">{newsArticles[0].readTime}</span>
                </div>
                <Link to={`/news/${newsArticles[0].id}`} className="btn btn-primary">
                  {t('news.readMore')}
                </Link>
              </div>
              <div className="featured-image">
                <img src={newsArticles[0].image} alt={newsArticles[0].title} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="section bg-light">
        <div className="container">
          <div className="category-filter">
            <h3 className="filter-title">{t('newsPage.filterByCategory')}</h3>
            <div className="category-buttons">
              {categories.map(category => (
                <button
                  key={category.key}
                  className={`category-btn ${selectedCategory === category.key ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.key)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="news-grid">
            {filteredArticles.map((article) => (
              <article key={article.id} className="news-card">
                <div className="news-image">
                  <img src={article.image} alt={article.title} />
                  <div className="news-category">{article.category}</div>
                </div>
                
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-date">{formatDate(article.date)}</span>
                    <span className="news-read-time">{article.readTime}</span>
                  </div>
                  
                  <h3 className="news-title">
                    <Link to={`/news/${article.id}`}>{article.title}</Link>
                  </h3>
                  
                  <p className="news-excerpt">{article.excerpt}</p>
                  
                  <div className="news-footer">
                    <span className="news-author">By {article.author}</span>
                    <Link to={`/news/${article.id}`} className="news-read-more">
                      {t('common.readMore')}
                      <img src="/assets/arrow.svg" alt="" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="no-articles">
              <p>No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section">
        <div className="container">
          <div className="newsletter-signup">
            <div className="newsletter-content">
              <h2 className="newsletter-title">{t('newsPage.newsletter.title')}</h2>
              <p className="newsletter-description">
                {t('newsPage.newsletter.description')}
              </p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder={t('newsPage.newsletter.placeholder')} 
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  {t('newsPage.newsletter.subscribe')}
                </button>
              </form>
            </div>
            <div className="newsletter-image">
              <img src="/assets/form.png" alt="Newsletter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News