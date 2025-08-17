import React, { useEffect, useState, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiChevronDown, HiPhone, HiMenuAlt3, HiX } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import { useLocation as useLocationContext } from "../../contexts/LocationContext";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);

  const routerLoc = useLocation();

  const { t, changeLanguage, currentLanguage, languages } = useLanguage();
  const {
    changeLocation: changeLocationContext,
    currentLocation,
    locations,
    currentLocationData,
  } = useLocationContext();

  // Refs for outside-click handling
  const langRef = useRef(null);
  const locRef = useRef(null);

  /* Elevate on scroll */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close overlays on route change */
  useEffect(() => {
    setIsMenuOpen(false);
    setLangOpen(false);
    setLocOpen(false);
  }, [routerLoc.pathname]);

  /* Body scroll lock for mobile menu */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : prev || "";
    return () => (document.body.style.overflow = prev || "");
  }, [isMenuOpen]);

  /* Close dropdowns on outside click */
  useEffect(() => {
    if (!langOpen && !locOpen) return;
    const onClick = (e) => {
      if (langOpen && langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
      if (locOpen && locRef.current && !locRef.current.contains(e.target)) setLocOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("touchstart", onClick);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("touchstart", onClick);
    };
  }, [langOpen, locOpen]);

  /* Escape closes everything */
  const onKey = useCallback((e) => {
    if (e.key === "Escape") {
      setLangOpen(false);
      setLocOpen(false);
      setIsMenuOpen(false);
    }
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onKey]);

  /* Nav items */
  const navItems = [
    { path: "/", label: t("nav.home"), icon: "🏠" },
    { path: "/about", label: t("nav.about"), icon: "ℹ️" },
    { path: "/services", label: t("nav.services"), icon: "🛡️" },
    { path: "/news", label: t("nav.news"), icon: "📰" },
    { path: "/contact", label: t("nav.contact"), icon: "📞" },
  ];

  /* Normalized change handlers */
  const onChangeLanguage = (code) => {
    const safe = String(code || "").toLowerCase();
    changeLanguage(safe);
    setLangOpen(false);
  };
  const onChangeLocation = (code) => {
    const safe = String(code || "").toLowerCase();
    changeLocationContext(safe);
    setLocOpen(false);
  };

  return (
    <header className={`hdr ${isScrolled ? "hdr--scrolled" : ""}`}>
      <div className="hdr__container">
        <div className="hdr__row">
          {/* Logo */}
          <Link to="/" className="hdr__logoLink" aria-label="Advensys Home">
            <img src="/assets/logo.svg" alt="Advensys In-Finance" className="hdr__logo" />
          </Link>

          {/* Desktop nav */}
          <nav className="nav" aria-label="Main">
            <div className="nav__capsule" role="tablist" aria-orientation="horizontal">
              <ul className="nav__list">
                {navItems.map((item) => {
                  const active = routerLoc.pathname === item.path;
                  return (
                    <li key={item.path} className="nav__item">
                      <Link
                        to={item.path}
                        className={`nav__link${active ? " is-active" : ""}`}
                        aria-current={active ? "page" : undefined}
                      >
                        <span className="nav__icon" aria-hidden="true">{item.icon}</span>
                        <span className="nav__text">{item.label}</span>
                        {active && <span className="nav__activePill" aria-hidden="true" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* Actions */}
          <div className="hdr__actions">
            {/* Language switcher - Only language codes + names */}
            <div className="dropdown" ref={langRef}>
              <button
                type="button"
                className="sw__btn"
                onClick={() => { setLangOpen(v => !v); setLocOpen(false); }}
                aria-expanded={langOpen}
                aria-haspopup="listbox"
                aria-controls="lang-menu"
                aria-label={t("header.languageSwitcher")}
              >
                <span className="sw__text">{languages[currentLanguage]?.code?.toUpperCase()}</span>
                <HiChevronDown className={`sw__chev ${langOpen ? "is-open" : ""}`} />
              </button>

              {langOpen && (
                <div id="lang-menu" className="sw__menu" role="listbox">
                  {Object.values(languages).map((lang) => {
                    const codeLC = String(lang.code || "").toLowerCase();
                    const isCurrent = currentLanguage === codeLC;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        role="option"
                        aria-selected={isCurrent}
                        className={`sw__item sw__item--simple${isCurrent ? " is-current" : ""}`}
                        onClick={() => onChangeLanguage(lang.code)}
                      >
                        <span className="sw__itemCode">{String(lang.code || "").toUpperCase()}</span>
                        <span className="sw__itemText">{lang.name}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Location switcher - Only flags + country names */}
            <div className="dropdown" ref={locRef}>
              <button
                type="button"
                className="sw__btn"
                onClick={() => { setLocOpen(v => !v); setLangOpen(false); }}
                aria-expanded={locOpen}
                aria-haspopup="listbox"
                aria-controls="loc-menu"
                aria-label={t("header.locationSwitcher")}
              >
                <span className="sw__flag">{currentLocationData?.flag}</span>
                <span className="sw__text">{currentLocationData?.name}</span>
                <HiChevronDown className={`sw__chev ${locOpen ? "is-open" : ""}`} />
              </button>

              {locOpen && (
                <div id="loc-menu" className="sw__menu" role="listbox">
                  {Object.values(locations).map((loc) => {
                    const codeLC = String(loc.code || "").toLowerCase();
                    const isCurrent = currentLocation === codeLC;
                    return (
                      <button
                        key={loc.code}
                        type="button"
                        role="option"
                        aria-selected={isCurrent}
                        className={`sw__item sw__item--simple${isCurrent ? " is-current" : ""}`}
                        onClick={() => onChangeLocation(loc.code)}
                      >
                        <span className="sw__itemFlag">{loc.flag}</span>
                        <span className="sw__itemText">{loc.name}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Phone */}
            {currentLocationData?.phone && (
              <a className="hdr__phone" href={`tel:${currentLocationData.phone}`}>
                <HiPhone />
                <span>{currentLocationData.phone}</span>
              </a>
            )}

            {/* CTA */}
            <Link to="/contact" className="btn btn--primary hdr__cta">
              <FaQuoteLeft />
              <span>{t("common.getQuote")}</span>
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              className="hdr__burger"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => { setIsMenuOpen(v => !v); setLangOpen(false); setLocOpen(false); }}
            >
              {isMenuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div id="mobile-nav" className={`mnav ${isMenuOpen ? "mnav--open" : ""}`} aria-label="Mobile">
          <ul className="mnav__list">
            {navItems.map((item) => {
              const active = routerLoc.pathname === item.path;
              return (
                <li key={item.path} className="mnav__item">
                  <Link
                    to={item.path}
                    className={`mnav__link${active ? " is-active" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                  >
                    <span className="mnav__icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}

            {/* Mobile switchers - simplified */}
            <li className="mnav__item mnav__switchers">
              <div className="msw">
                <div className="msw__label">{t("header.languageSwitcher")}</div>
                <div className="msw__options">
                  {Object.values(languages).map((lang) => {
                    const codeLC = String(lang.code || "").toLowerCase();
                    const isCurrent = currentLanguage === codeLC;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        className={`msw__btn${isCurrent ? " is-current" : ""}`}
                        onClick={() => onChangeLanguage(lang.code)}
                      >
                        <span>{String(lang.code || "").toUpperCase()}</span>
                        <span>{lang.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="msw">
                <div className="msw__label">{t("header.locationSwitcher")}</div>
                <div className="msw__options">
                  {Object.values(locations).map((loc) => {
                    const codeLC = String(loc.code || "").toLowerCase();
                    const isCurrent = currentLocation === codeLC;
                    return (
                      <button
                        key={loc.code}
                        type="button"
                        className={`msw__btn${isCurrent ? " is-current" : ""}`}
                        onClick={() => onChangeLocation(loc.code)}
                      >
                        <span className="msw__flag">{loc.flag}</span>
                        <span>{loc.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </li>

            <li className="mnav__item">
              <Link to="/contact" className="btn btn--primary mnav__cta" onClick={() => setIsMenuOpen(false)}>
                <FaQuoteLeft />
                <span>{t("common.getQuote")}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;