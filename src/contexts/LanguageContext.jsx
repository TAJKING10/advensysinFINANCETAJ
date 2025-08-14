import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const languages = {
  en: { code: 'en', name: 'English', flag: '🇺🇸' },
  fr: { code: 'fr', name: 'Français', flag: '🇫🇷' },
  sv: { code: 'sv', name: 'Svenska', flag: '🇸🇪' }
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

  // Load saved language preference from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language')
    if (savedLanguage && languages[savedLanguage]) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  // Load translations when language changes
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translationModule = await import(`../translations/${currentLanguage}.js`)
        setTranslations(translationModule.default)
      } catch (error) {
        console.warn(`Failed to load translations for language: ${currentLanguage}`, error)
        // Fallback to English if translation fails
        if (currentLanguage !== 'en') {
          try {
            const fallbackModule = await import(`../translations/en.js`)
            setTranslations(fallbackModule.default)
          } catch (fallbackError) {
            console.error('Failed to load fallback translations', fallbackError)
            setTranslations({})
          }
        }
      }
    }

    loadTranslations()
  }, [currentLanguage])

  const changeLanguage = (languageCode) => {
    if (languages[languageCode]) {
      setCurrentLanguage(languageCode)
      localStorage.setItem('preferred-language', languageCode)
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
    currentLanguageData: languages[currentLanguage]
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}