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
      content: t('news.articles.privatePension.content'),
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
      content: t('news.articles.investment.content'),
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
      content: t('news.articles.banking.content'),
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
      content: t('news.articles.lifeInsurance.content'),
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
      content: t('news.articles.insurance.content'),
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