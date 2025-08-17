import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { useLocation as useLocationContext } from "../../contexts/LocationContext";
import { HiChevronDown, HiPhone, HiMenuAlt3, HiX } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState(null);

  const location = useLocation();
  const { t, changeLanguage, currentLanguage, languages } = useLanguage();
  const {
    changeLocation: changeLocationContext,
    currentLocation,
    locations,
    currentLocationData,
  } = useLocationContext();

  // Enhanced scroll listener with scroll progress
  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsLanguageDropdownOpen(false);
    setIsLocationDropdownOpen(false);
  }, [location.pathname]);

  // Enhanced outside click detection
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        setIsLanguageDropdownOpen(false);
        setIsLocationDropdownOpen(false);
      }
    };
    
    if (isLanguageDropdownOpen || isLocationDropdownOpen) {
      document.addEventListener("click", handleClickOutside, true);
      return () => document.removeEventListener("click", handleClickOutside, true);
    }
  }, [isLanguageDropdownOpen, isLocationDropdownOpen]);

  // Enhanced keyboard navigation
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

  // Enhanced toggle functions
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    setIsLanguageDropdownOpen(false);
    setIsLocationDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(prev => !prev);
    setIsLocationDropdownOpen(false);
  };

  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen(prev => !prev);
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
    { path: "/", label: t("nav.home"), icon: "🏠" },
    { path: "/about", label: t("nav.about"), icon: "ℹ️" },
    { path: "/services", label: t("nav.services"), icon: "🛡️" },
    { path: "/news", label: t("nav.news"), icon: "📰" },
    { path: "/contact", label: t("nav.contact"), icon: "📞" },
  ];

  // Animation variants
  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 25 }
    }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95, 
      y: -10,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 15 }
    }
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? "header-scrolled" : ""}`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
      style={{
        "--scroll-progress": Math.min(scrollY / 100, 1)
      }}
    >
      {/* Enhanced background with scroll effects */}
      <div className="header-background" />
      
      <div className="container">
        <div className="header-content">
          {/* Enhanced Logo */}
          <motion.div
            variants={logoVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="logo-link" aria-label="Advensys Home">
              <motion.img 
                src="/assets/logo.svg" 
                alt="Advensys In-Finance" 
                className="logo"
                layoutId="logo"
              />
            </Link>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <nav className="nav-desktop" aria-label="Main navigation">
            <div className="nav-background" />
            <motion.ul className="nav-list">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.li 
                    key={item.path} 
                    className="nav-item"
                    variants={navItemVariants}
                    onMouseEnter={() => setHoveredNavItem(item.path)}
                    onMouseLeave={() => setHoveredNavItem(null)}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0, scale: 0.98 }}
                  >
                    <Link 
                      to={item.path} 
                      className={`nav-link ${isActive ? "active" : ""}`}
                    >
                      <motion.span 
                        className="nav-icon"
                        animate={{
                          scale: hoveredNavItem === item.path ? 1.2 : 1,
                          rotate: hoveredNavItem === item.path ? 10 : 0
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span className="nav-text">{item.label}</span>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          className="nav-active-indicator"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      
                      {/* Hover indicator */}
                      {hoveredNavItem === item.path && !isActive && (
                        <motion.div
                          className="nav-hover-indicator"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </nav>

          {/* Enhanced Actions */}
          <div className="header-actions">
            {/* Enhanced Language Switcher */}
            <div className="dropdown-container language-switcher-container">
              <motion.button
                type="button"
                className="switcher-btn language-switcher"
                onClick={toggleLanguageDropdown}
                aria-haspopup="listbox"
                aria-expanded={isLanguageDropdownOpen}
                aria-label={t("header.languageSwitcher")}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span 
                  className="switcher-flag"
                  animate={{ rotate: isLanguageDropdownOpen ? 15 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {languages[currentLanguage]?.flag}
                </motion.span>
                <span className="switcher-text">
                  {languages[currentLanguage]?.code?.toUpperCase()}
                </span>
                <motion.div
                  animate={{ rotate: isLanguageDropdownOpen ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <HiChevronDown className="switcher-arrow" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isLanguageDropdownOpen && (
                  <motion.div 
                    className="switcher-dropdown" 
                    role="listbox"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {Object.values(languages).map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        type="button"
                        role="option"
                        className={`dropdown-item ${currentLanguage === lang.code ? "active" : ""}`}
                        onClick={() => handleLanguageChange(lang.code)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: index * 0.05 }
                        }}
                        whileHover={{ x: 5, backgroundColor: "rgba(27, 54, 93, 0.05)" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="dropdown-flag">{lang.flag}</span>
                        <span className="dropdown-text">{lang.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Enhanced Location Switcher */}
            <div className="dropdown-container location-switcher-container">
              <motion.button
                type="button"
                className="switcher-btn location-switcher"
                onClick={toggleLocationDropdown}
                aria-haspopup="listbox"
                aria-expanded={isLocationDropdownOpen}
                aria-label={t("header.locationSwitcher")}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span 
                  className="switcher-flag"
                  animate={{ rotate: isLocationDropdownOpen ? 15 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {currentLocationData?.flag}
                </motion.span>
                <span className="switcher-text">{currentLocationData?.name}</span>
                <motion.div
                  animate={{ rotate: isLocationDropdownOpen ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <HiChevronDown className="switcher-arrow" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isLocationDropdownOpen && (
                  <motion.div 
                    className="switcher-dropdown" 
                    role="listbox"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {Object.values(locations).map((loc, index) => (
                      <motion.button
                        key={loc.code}
                        type="button"
                        role="option"
                        className={`dropdown-item ${currentLocation === loc.code ? "active" : ""}`}
                        onClick={() => handleLocationChange(loc.code)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: index * 0.05 }
                        }}
                        whileHover={{ x: 5, backgroundColor: "rgba(27, 54, 93, 0.05)" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="dropdown-flag">{loc.flag}</span>
                        <span className="dropdown-text">{loc.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Enhanced Phone Link */}
            {currentLocationData?.phone && (
              <motion.div 
                className="contact-info"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  className="contact-link"
                  href={`tel:${currentLocationData.phone}`}
                  aria-label={t("common.callUs")}
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                  >
                    <HiPhone />
                  </motion.div>
                  <span>{currentLocationData.phone}</span>
                </a>
              </motion.div>
            )}

            {/* Enhanced CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link to="/contact" className="btn btn-primary cta-button">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatDelay: 4,
                    ease: "easeInOut"
                  }}
                >
                  <FaQuoteLeft />
                </motion.div>
                <span>{t("common.getQuote")}</span>
                <div className="btn-shimmer" />
              </Link>
            </motion.div>

            {/* Enhanced Mobile Menu Toggle */}
            <motion.button
              type="button"
              className="mobile-menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
              aria-controls="mobile-nav"
              aria-expanded={isMenuOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              id="mobile-nav" 
              className="nav-mobile"
              aria-label="Mobile navigation"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.ul 
                className="nav-mobile-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, staggerChildren: 0.05 }}
              >
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.li 
                      key={item.path} 
                      className="nav-mobile-item"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: index * 0.1 }
                      }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={item.path}
                        className={`nav-mobile-link ${isActive ? "active" : ""}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="nav-mobile-icon">{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    </motion.li>
                  );
                })}

                {/* Mobile Switchers */}
                <motion.li 
                  className="nav-mobile-item nav-mobile-switchers"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="mobile-switcher-group">
                    <span className="mobile-switcher-label">{t("header.languageSwitcher")}:</span>
                    <div className="mobile-switcher-options">
                      {Object.values(languages).map((lang) => (
                        <motion.button
                          key={lang.code}
                          type="button"
                          className={`mobile-switcher-btn ${currentLanguage === lang.code ? "active" : ""}`}
                          onClick={() => handleLanguageChange(lang.code)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="mobile-switcher-flag">{lang.flag}</span>
                          <span>{lang.code.toUpperCase()}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div className="mobile-switcher-group">
                    <span className="mobile-switcher-label">{t("header.locationSwitcher")}:</span>
                    <div className="mobile-switcher-options">
                      {Object.values(locations).map((loc) => (
                        <motion.button
                          key={loc.code}
                          type="button"
                          className={`mobile-switcher-btn ${currentLocation === loc.code ? "active" : ""}`}
                          onClick={() => handleLocationChange(loc.code)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="mobile-switcher-flag">{loc.flag}</span>
                          <span>{loc.name}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.li>

                {/* Mobile CTA */}
                <motion.li 
                  className="nav-mobile-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link 
                      to="/contact" 
                      className="btn btn-primary btn-mobile" 
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaQuoteLeft />
                      <span>{t("common.getQuote")}</span>
                    </Link>
                  </motion.div>
                </motion.li>
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;