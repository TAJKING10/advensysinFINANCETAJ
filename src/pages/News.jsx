import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import './News.css'

const News = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()

  const handleReadMoreClick = (link) => {
    navigate(link)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  
  const newsArticles = [
    {
      id: 1,
      title: 'Private Pension Plan Benefits for Your Retirement',
      excerpt: 'Discover how our Luxembourg private pension plans offer tax advantages and regulatory security for your retirement planning.',
      content: 'Full article content would go here...',
      image: '/assets/category-5.png',
      date: '2024-01-15',
      category: 'Private Pension Plan',
      readTime: '5 min read',
      author: 'Financial Planning Team'
    },
    {
      id: 2,
      title: 'Professional Investment Advisory Services',
      excerpt: 'Learn about our comprehensive investment advisory services designed to help you build wealth and achieve your financial goals.',
      content: 'Full article content would go here...',
      image: '/assets/category-3.png',
      date: '2024-01-10',
      category: 'Investment Adviser',
      readTime: '4 min read',
      author: 'Investment Team'
    },
    {
      id: 3,
      title: 'Broker in Bank Services: Your Financial Bridge',
      excerpt: 'Discover how our banking intermediary services help you secure the best banking products and services with optimal terms.',
      content: 'Full article content would go here...',
      image: '/assets/category-4.png',
      date: '2024-01-05',
      category: 'Broker in Bank',
      readTime: '6 min read',
      author: 'Banking Solutions Team'
    },
    {
      id: 4,
      title: 'Dedicated Life Insurance: Protecting Your Legacy',
      excerpt: 'Explore our specialized life insurance products designed to provide comprehensive financial security for your loved ones.',
      content: 'Full article content would go here...',
      image: '/assets/category-2.png',
      date: '2023-12-28',
      category: 'Dedicated Life Insurance',
      readTime: '7 min read',
      author: 'Life Insurance Specialists'
    },
    {
      id: 5,
      title: 'Comprehensive Insurance Services for Complete Protection',
      excerpt: 'Understanding our full range of insurance solutions tailored to protect what matters most to you and your family.',
      content: 'Full article content would go here...',
      image: '/assets/category-1.png',
      date: '2023-12-20',
      category: 'Insurance Services',
      readTime: '8 min read',
      author: 'Insurance Advisory Team'
    }
  ]

  const categories = [
    { key: 'All', label: 'All Services' },
    { key: 'Private Pension Plan', label: 'Private Pension Plan' },
    { key: 'Investment Adviser', label: 'Investment Adviser' },
    { key: 'Broker in Bank', label: 'Broker in Bank' },
    { key: 'Dedicated Life Insurance', label: 'Dedicated Life Insurance' },
    { key: 'Insurance Services', label: 'Insurance Services' }
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
                <button onClick={() => handleReadMoreClick(`/news/1`)} className="btn btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                  Read More
                </button>
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
                    <button onClick={() => handleReadMoreClick(`/news/${article.id}`)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', color: 'inherit', fontSize: 'inherit', fontWeight: 'inherit' }}>
                      {article.title}
                    </button>
                  </h3>
                  
                  <p className="news-excerpt">{article.excerpt}</p>
                  
                  <div className="news-footer">
                    <span className="news-author">By {article.author}</span>
                    <button onClick={() => handleReadMoreClick(`/news/${article.id}`)} className="news-read-more" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      Read More
                      <img src="/assets/arrow.svg" alt="" />
                    </button>
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

    </div>
  )
}

export default News