import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
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
      image: '/assets/category-5.png',
      date: '2024-01-15',
      category: 'Private Pension Plan',
      readTime: '5 min read',
      link: '/news/1'
    },
    {
      id: 2,
      title: 'Professional Investment Advisory Services',
      excerpt: 'Learn about our comprehensive investment advisory services designed to help you build wealth and achieve your financial goals.',
      image: '/assets/category-3.png',
      date: '2024-01-10',
      category: 'Investment Adviser',
      readTime: '4 min read',
      link: '/news/2'
    }
  ]

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <section className="news-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="section-title">{t('news.title')}</h2>
          <p className="section-subtitle">
            {t('news.description')}
          </p>
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {newsArticles.map((article) => (
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
                  <Link to={article.link}>{article.title}</Link>
                </h3>
                
                <p className="news-excerpt">{article.excerpt}</p>
                
                <button onClick={() => handleReadMoreClick(article.link)} className="news-read-more" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {t('common.readMore')}
                  <img src="/assets/arrow.svg" alt="" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="news-actions text-center">
          <button onClick={() => handleReadMoreClick('/news')} className="btn btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
            {t('common.readMore')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default News