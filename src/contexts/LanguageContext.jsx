import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const languages = {
  en: { code: 'en', name: 'English'},
  fr: { code: 'fr', name: 'Français'},
  sv: { code: 'sv', name: 'Svenska'}
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const [translations, setTranslations] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  // Load saved language preference from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language')
    if (savedLanguage && languages[savedLanguage]) {
      setCurrentLanguage(savedLanguage)
    } else {
      // Set default language based on browser locale if no saved preference
      const browserLanguage = navigator.language.split('-')[0]
      if (languages[browserLanguage]) {
        setCurrentLanguage(browserLanguage)
        localStorage.setItem('preferred-language', browserLanguage)
      }
    }
  }, [])

  // Load translations when language changes
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true)
      try {
        const translationModule = await import(`../translations/${currentLanguage}.js`)
        setTranslations(translationModule.default)
        
        // Update document language attribute for accessibility
        document.documentElement.lang = currentLanguage
        
        // Update page title if needed
        const titleKey = 'common.siteTitle'
        const siteTitle = translationModule.default?.common?.siteTitle || 'Advensys Insurance Finance'
        document.title = siteTitle
        
      } catch (error) {
        console.warn(`Failed to load translations for language: ${currentLanguage}`, error)
        // Fallback to English if translation fails
        if (currentLanguage !== 'en') {
          try {
            const fallbackModule = await import(`../translations/en.js`)
            setTranslations(fallbackModule.default)
            document.documentElement.lang = 'en'
          } catch (fallbackError) {
            console.error('Failed to load fallback translations', fallbackError)
            setTranslations({})
          }
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadTranslations()
  }, [currentLanguage])

  const changeLanguage = (languageCode) => {
    if (languages[languageCode] && languageCode !== currentLanguage) {
      setCurrentLanguage(languageCode)
      localStorage.setItem('preferred-language', languageCode)
      
      // Trigger a custom event for any components that need to react to language changes
      window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { 
          oldLanguage: currentLanguage, 
          newLanguage: languageCode 
        } 
      }))
    }
  }

  const translate = (key, fallback = key) => {
    const keys = key.split('.')
    let translation = translations

    for (const k of keys) {
      if (translation && typeof translation === 'object' && k in translation) {
        translation = translation[k]
      } else {
        return fallback
      }
    }

    return typeof translation === 'string' ? translation : fallback
  }

  const value = {
    currentLanguage,
    languages,
    changeLanguage,
    translate,
    t: translate, // Short alias
    currentLanguageData: languages[currentLanguage],
    isLoading,
    translations
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}