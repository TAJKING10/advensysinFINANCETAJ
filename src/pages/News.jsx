import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import './News.css'

const News = () => {
  const { t } = useLanguage()
  
  const newsArticles = [
    {
      id: 1,
      title: t('newsPage.articles.healthChanges.title'),
      excerpt: t('newsPage.articles.healthChanges.excerpt'),
      content: 'Full article content would go here...',
      image: '/assets/news-1.png',
      date: '2024-01-15',
      category: t('newsPage.categories.health'),
      readTime: t('newsPage.readTime', { minutes: '5' }),
      author: t('newsPage.articles.healthChanges.author')
    },
    {
      id: 2,
      title: t('newsPage.articles.autoTips.title'),
      excerpt: t('newsPage.articles.autoTips.excerpt'),
      content: 'Full article content would go here...',
      image: '/assets/news-2.png',
      date: '2024-01-10',
      category: t('newsPage.categories.auto'),
      readTime: t('newsPage.readTime', { minutes: '4' }),
      author: t('newsPage.articles.autoTips.author')
    },
    {
      id: 3,
      title: t('newsPage.articles.lifeFamilies.title'),
      excerpt: t('newsPage.articles.lifeFamilies.excerpt'),
      content: 'Full article content would go here...',
      image: '/assets/hero-1.png',
      date: '2024-01-05',
      category: t('newsPage.categories.life'),
      readTime: t('newsPage.readTime', { minutes: '6' }),
      author: t('newsPage.articles.lifeFamilies.author')
    },
    {
      id: 4,
      title: t('newsPage.articles.businessTips.title'),
      excerpt: t('newsPage.articles.businessTips.excerpt'),
      content: 'Full article content would go here...',
      image: '/assets/hero-2.png',
      date: '2023-12-28',
      category: t('newsPage.categories.business'),
      readTime: t('newsPage.readTime', { minutes: '7' }),
      author: t('newsPage.articles.businessTips.author')
    }
  ]

  const categories = ['All', 'Health Insurance', 'Auto Insurance', 'Life Insurance', 'Business Insurance', 'Property Insurance']
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
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
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
                      Read More
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
              <h2 className="newsletter-title">Stay Updated</h2>
              <p className="newsletter-description">
                Subscribe to our newsletter to receive the latest insurance news, 
                tips, and updates directly in your inbox.
              </p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
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