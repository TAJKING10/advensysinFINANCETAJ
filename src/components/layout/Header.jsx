import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { useLocation as useLocationContext } from "../../contexts/LocationContext";
import { HiChevronDown, HiPhone } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  const location = useLocation();
  const { t, changeLanguage, currentLanguage, languages } = useLanguage();
  const {
    changeLocation: changeLocationContext,
    currentLocation,
    locations,
    currentLocationData,
  } = useLocationContext();

  // Scroll listener (adds elevated style)
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".language-switcher-container")) {
        setIsLanguageDropdownOpen(false);
      }
      if (!e.target.closest(".location-switcher-container")) {
        setIsLocationDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close things on Escape for a11y
  const onKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      setIsMenuOpen(false);
      setIsLanguageDropdownOpen(false);
      setIsLocationDropdownOpen(false);
    }
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen((v) => !v);
    setIsLocationDropdownOpen(false);
  };
  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen((v) => !v);
    setIsLanguageDropdownOpen(false);
  };

  const handleLanguageChange = (code) => {
    changeLanguage(code);
    setIsLanguageDropdownOpen(false);
  };

  const handleLocationChange = (code) => {
    changeLocationContext(code);
    setIsLocationDropdownOpen(false);
  };

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/services", label: t("nav.services") },
    { path: "/news", label: t("nav.news") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo-link" aria-label="Advensys Home">
            {/* Update the src to match your asset path */}
            <img src="/assets/logo.svg" alt="Advensys In-Finance" className="logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop" aria-label="Main navigation">
            <ul className="nav-list">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <li key={item.path} className="nav-item">
                    <Link to={item.path} className={`nav-link ${active ? "active" : ""}`}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions */}
          <div className="header-actions">
            {/* Language */}
            <div className="language-switcher-container">
              <button
                type="button"
                className="language-switcher"
                onClick={toggleLanguageDropdown}
                aria-haspopup="listbox"
                aria-expanded={isLanguageDropdownOpen}
                aria-label={t("header.languageSwitcher")}
              >
                <span className="switcher-flag">{languages[currentLanguage]?.flag}</span>
                <span className="switcher-text">
                  {languages[currentLanguage]?.code?.toUpperCase()}
                </span>
                <HiChevronDown className={`switcher-arrow ${isLanguageDropdownOpen ? "open" : ""}`} />
              </button>

              {isLanguageDropdownOpen && (
                <div className="switcher-dropdown" role="listbox">
                  {Object.values(languages).map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      role="option"
                      className={`dropdown-item ${currentLanguage === lang.code ? "active" : ""}`}
                      onClick={() => handleLanguageChange(lang.code)}
                    >
                      <span className="dropdown-flag">{lang.flag}</span>
                      <span className="dropdown-text">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Location */}
            <div className="location-switcher-container">
              <button
                type="button"
                className="location-switcher"
                onClick={toggleLocationDropdown}
                aria-haspopup="listbox"
                aria-expanded={isLocationDropdownOpen}
                aria-label={t("header.locationSwitcher")}
              >
                <span className="switcher-flag">{currentLocationData?.flag}</span>
                <span className="switcher-text">{currentLocationData?.name}</span>
                <HiChevronDown className={`switcher-arrow ${isLocationDropdownOpen ? "open" : ""}`} />
              </button>

              {isLocationDropdownOpen && (
                <div className="switcher-dropdown" role="listbox">
                  {Object.values(locations).map((loc) => (
                    <button
                      key={loc.code}
                      type="button"
                      role="option"
                      className={`dropdown-item ${currentLocation === loc.code ? "active" : ""}`}
                      onClick={() => handleLocationChange(loc.code)}
                    >
                      <span className="dropdown-flag">{loc.flag}</span>
                      <span className="dropdown-text">{loc.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Phone */}
            {currentLocationData?.phone && (
              <div className="contact-info">
                <a
                  className="contact-link"
                  href={`tel:${currentLocationData.phone}`}
                  aria-label={t("common.callUs")}
                >
                  <HiPhone />
                  <span>{currentLocationData.phone}</span>
                </a>
              </div>
            )}

            {/* CTA */}
            <Link to="/contact" className="btn btn-primary">
              <FaQuoteLeft />
              {t("common.getQuote")}
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
              aria-controls="mobile-nav"
              aria-expanded={isMenuOpen}
            >
              <span className={`hamburger ${isMenuOpen ? "open" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav id="mobile-nav" className={`nav-mobile ${isMenuOpen ? "open" : ""}`} aria-label="Mobile">
          <ul className="nav-mobile-list">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <li key={item.path} className="nav-mobile-item">
                  <Link
                    to={item.path}
                    className={`nav-mobile-link ${active ? "active" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            {/* Mobile switchers */}
            <li className="nav-mobile-item nav-mobile-switchers">
              <div className="mobile-switcher-group">
                <span className="mobile-switcher-label">{t("header.languageSwitcher")}:</span>
                <div className="mobile-switcher-options">
                  {Object.values(languages).map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      className={`mobile-switcher-btn ${currentLanguage === lang.code ? "active" : ""}`}
                      onClick={() => handleLanguageChange(lang.code)}
                    >
                      <span className="mobile-switcher-flag">{lang.flag}</span>
                      <span>{lang.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mobile-switcher-group">
                <span className="mobile-switcher-label">{t("header.locationSwitcher")}:</span>
                <div className="mobile-switcher-options">
                  {Object.values(locations).map((loc) => (
                    <button
                      key={loc.code}
                      type="button"
                      className={`mobile-switcher-btn ${currentLocation === loc.code ? "active" : ""}`}
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
              <Link to="/contact" className="btn btn-primary btn-mobile" onClick={() => setIsMenuOpen(false)}>
                <FaQuoteLeft />
                {t("common.getQuote")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
