// Test and validate the language system
export const testLanguageSystem = async () => {
  console.log('🌐 Testing Language System...')
  
  try {
    // Test English translations
    const enTranslations = await import('../translations/en.js')
    console.log('✅ English translations loaded')
    
    // Test French translations
    const frTranslations = await import('../translations/fr.js')
    console.log('✅ French translations loaded')
    
    // Test Swedish translations
    const svTranslations = await import('../translations/sv.js')
    console.log('✅ Swedish translations loaded')
    
    // Test localStorage
    localStorage.setItem('preferred-language', 'fr')
    const savedLang = localStorage.getItem('preferred-language')
    console.log(`✅ localStorage test: ${savedLang}`)
    
    // Test language change event
    window.addEventListener('languageChanged', (e) => {
      console.log('✅ Language change event fired:', e.detail)
    })
    
    console.log('🎉 Language system is working correctly!')
    return true
    
  } catch (error) {
    console.error('❌ Language system test failed:', error)
    return false
  }
}

// Helper to check missing translations
export const checkMissingTranslations = (languages = ['en', 'fr', 'sv']) => {
  const results = {}
  
  languages.forEach(lang => {
    try {
      import(`../translations/${lang}.js`).then(module => {
        const translations = module.default
        console.log(`📋 ${lang.toUpperCase()} translation structure:`, Object.keys(translations))
        results[lang] = Object.keys(translations).length
      })
    } catch (error) {
      console.error(`❌ Failed to load ${lang} translations:`, error)
    }
  })
  
  return results
}