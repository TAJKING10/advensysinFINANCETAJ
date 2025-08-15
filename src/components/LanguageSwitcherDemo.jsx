import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageSwitcherDemo = () => {
  const { t, currentLanguage, changeLanguage, languages } = useLanguage()

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #e2e8f0', 
      borderRadius: '8px',
      margin: '20px',
      backgroundColor: 'white'
    }}>
      <h3>🌐 Language System Demo</h3>
      
{/*       <div style={{ marginBottom: '15px' }}> */}
{/*         <strong>Current Language:</strong> {languages[currentLanguage]?.name} {languages[currentLanguage]?.flag} */}
{/*       </div> */}
      
{/*       <div style={{ marginBottom: '15px' }}> */}
{/*         <strong>Switch Language:</strong> */}
{/*         {Object.values(languages).map((lang) => ( */}
{/*           <button */}
{/*             key={lang.code} */}
{/*             onClick={() => changeLanguage(lang.code)} */}
{/*             style={{ */}
{/*               margin: '0 5px', */}
{/*               padding: '8px 12px', */}
{/*               backgroundColor: currentLanguage === lang.code ? '#1B365D' : '#f8f9fa', */}
{/*               color: currentLanguage === lang.code ? 'white' : '#333', */}
{/*               border: '1px solid #ddd', */}
{/*               borderRadius: '4px', */}
{/*               cursor: 'pointer' */}
{/*             }} */}
{/*           > */}
{/*             {lang.flag} {lang.name} */}
{/*           </button> */}
{/*         ))} */}
{/*       </div> */}

{/*       <div style={{ marginBottom: '15px' }}> */}
{/*         <strong>Translation Test:</strong> */}
{/*         <ul> */}
{/*           <li>Navigation Home: {t('nav.home')}</li> */}
{/*           <li>Navigation About: {t('nav.about')}</li> */}
{/*           <li>Common Get Quote: {t('common.getQuote')}</li> */}
{/*           <li>Header Language Switcher: {t('header.languageSwitcher')}</li> */}
{/*           <li>Hero Title: {t('hero.slide1.title')}</li> */}
{/*         </ul> */}
{/*       </div> */}

{/*       <div style={{ fontSize: '14px', color: '#666' }}> */}
{/*         <strong>Storage:</strong> Language preference is saved in localStorage and persists across page refreshes. */}
{/*       </div> */}
    </div>
  )
}

export default LanguageSwitcherDemo