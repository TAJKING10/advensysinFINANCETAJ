import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { useLocation as useLocationContext } from '../../contexts/LocationContext'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false)
  const location = useLocation()
  const { t, changeLanguage, currentLanguage, languages } = useLanguage()
  const { changeLocation: changeLocationContext, currentLocation, locations, currentLocationData } = useLocationContext()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-switcher-container')) {
        setIsLanguageDropdownOpen(false)
      }
      if (!event.target.closest('.location-switcher-container')) {
        setIsLocationDropdownOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
    setIsLocationDropdownOpen(false)
  }

  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen(!isLocationDropdownOpen)
    setIsLanguageDropdownOpen(false)
  }

  const handleLanguageChange = (languageCode) => {
    changeLanguage(languageCode)
    setIsLanguageDropdownOpen(false)
  }

  const handleLocationChange = (locationCode) => {
    changeLocationContext(locationCode)
    setIsLocationDropdownOpen(false)
  }

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/news', label: t('nav.news') },
    { path: '/contact', label: t('nav.contact') }
  ]

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo-link">
            <img src="/assets/logo.svg" alt="Advensys Insurance Finance" className="logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            {/* Language Switcher */}
            <div className="language-switcher-container">
              <button
                className="language-switcher"
                onClick={toggleLanguageDropdown}
                aria-label={t('header.languageSwitcher')}
                aria-expanded={isLanguageDropdownOpen}
              >
                <span className="switcher-flag">{languages[currentLanguage]?.flag}</span>
                <span className="switcher-text">{languages[currentLanguage]?.code?.toUpperCase()}</span>
                <img src="/assets/arrow.svg" alt="" className={`switcher-arrow ${isLanguageDropdownOpen ? 'open' : ''}`} />
              </button>
              {isLanguageDropdownOpen && (
                <div className="switcher-dropdown">
                  {Object.values(languages).map((lang) => (
                    <button
                      key={lang.code}
                      className={`dropdown-item ${currentLanguage === lang.code ? 'active' : ''}`}
                      onClick={() => handleLanguageChange(lang.code)}
                    >
                      <span className="dropdown-flag">{lang.flag}</span>
                      <span className="dropdown-text">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Location Switcher */}
            <div className="location-switcher-container">
              <button
                className="location-switcher"
                onClick={toggleLocationDropdown}
                aria-label={t('header.locationSwitcher')}
                aria-expanded={isLocationDropdownOpen}
              >
                <span className="switcher-flag">{currentLocationData?.flag}</span>
                <span className="switcher-text">{currentLocationData?.name}</span>
                <img src="/assets/arrow.svg" alt="" className={`switcher-arrow ${isLocationDropdownOpen ? 'open' : ''}`} />
              </button>
              {isLocationDropdownOpen && (
                <div className="switcher-dropdown">
                  {Object.values(locations).map((loc) => (
                    <button
                      key={loc.code}
                      className={`dropdown-item ${currentLocation === loc.code ? 'active' : ''}`}
                      onClick={() => handleLocationChange(loc.code)}
                    >
                      <span className="dropdown-flag">{loc.flag}</span>
                      <span className="dropdown-text">{loc.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <a href={`tel:${currentLocationData?.phone}`} className="contact-link">
                <img src="/assets/phone.svg" alt={t('header.phone')} />
                <span>{currentLocationData?.phone}</span>
              </a>
            </div>

            {/* Get Quote Button */}
            <Link to="/contact" className="btn btn-primary">
              {t('common.getQuote')}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle Mobile Menu"
              aria-expanded={isMenuOpen}
            >
              <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-mobile-list">
            {navItems.map((item) => (
              <li key={item.path} className="nav-mobile-item">
                <Link
                  to={item.path}
                  className={`nav-mobile-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="nav-mobile-item nav-mobile-switchers">
              {/* Mobile Language Switcher */}
              <div className="mobile-switcher-group">
                <span className="mobile-switcher-label">{t('header.languageSwitcher')}:</span>
                <div className="mobile-switcher-options">
                  {Object.values(languages).map((lang) => (
                    <button
                      key={lang.code}
                      className={`mobile-switcher-btn ${currentLanguage === lang.code ? 'active' : ''}`}
                      onClick={() => handleLanguageChange(lang.code)}
                    >
                      <span className="mobile-switcher-flag">{lang.flag}</span>
                      <span>{lang.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Mobile Location Switcher */}
              <div className="mobile-switcher-group">
                <span className="mobile-switcher-label">{t('header.locationSwitcher')}:</span>
                <div className="mobile-switcher-options">
                  {Object.values(locations).map((loc) => (
                    <button
                      key={loc.code}
                      className={`mobile-switcher-btn ${currentLocation === loc.code ? 'active' : ''}`}
                      onClick={() => handleLocationChange(loc.code)}
                    >
                      <span className="mobile-switcher-flag">{loc.flag}</span>
                      <span>{loc.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </li>
            <li className="nav-mobile-item">
              <Link to="/contact" className="btn btn-primary btn-mobile">
                {t('common.getQuote')}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header