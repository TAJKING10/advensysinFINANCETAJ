import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import './News.css'

const News = () => {
  const { t } = useLanguage()
  const newsArticles = [
    {
      id: 1,
      title: 'Understanding Health Insurance Changes for 2024',
      excerpt: 'Important updates to health insurance policies that could affect your coverage and premiums.',
      image: '/assets/news-1.png',
      date: '2024-01-15',
      category: 'Health Insurance',
      readTime: '5 min read',
      link: '/news/health-insurance-2024'
    },
    {
      id: 2,
      title: 'Top 5 Tips for Choosing the Right Auto Insurance',
      excerpt: 'Expert advice on selecting auto insurance that provides the best value and protection.',
      image: '/assets/news-2.png',
      date: '2024-01-10',
      category: 'Auto Insurance',
      readTime: '4 min read',
      link: '/news/auto-insurance-tips'
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
                
                <Link to={article.link} className="news-read-more">
                  {t('common.readMore')}
                  <img src="/assets/arrow.svg" alt="" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="news-actions text-center">
          <Link to="/news" className="btn btn-primary">
            {t('common.readMore')}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default News