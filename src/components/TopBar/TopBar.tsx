import React, { useState, useEffect } from "react";
import "./TopBar.scss";
import { useLanguage } from "../../translation/LanguageProvider";
import translations from "../../translation/translations";

export const TopBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const { language, switchLanguage } = useLanguage();

  const handleLinkClick = (linkName: React.SetStateAction<string>) => {
    setActiveLink(linkName);
  };

  useEffect(() => {
    const burgerIcon = document.querySelector(".top-bar__burger a");
    const menu = document.getElementById("menu");
    const closeIcon = menu?.querySelector(".menu__burger a");

    if (burgerIcon && menu && closeIcon) {
      const openMenu = (event: Event) => {
        event.preventDefault();
        menu.classList.add("active");
      };

      const closeMenu = (event: Event) => {
        event.preventDefault();
        menu.classList.remove("active");
      };

      burgerIcon.addEventListener("click", openMenu);
      closeIcon.addEventListener("click", closeMenu);

      return () => {
        burgerIcon.removeEventListener("click", openMenu);
        closeIcon.removeEventListener("click", closeMenu);
      };
    }
  }, []);

  return (
    <>
      <header className="header">
        <div className="top-bar animate__animated animate__fadeInDown">
          <div className="top-bar__content">
            <a href="#">
              <img
                src="/images/top-bar-logo.svg"
                alt="sifu logo"
                className="top-bar__logo"
              />
            </a>
            <button className="top-bar__burger">
              <a href="#menu" className="top-bar__menu-link">
                <img src="/images/icons/burger.svg" alt="burger menu" />
              </a>
            </button>
          </div>

          <div className="top-bar__group">
            <nav className="navigation">
              <ul className="navigation__list">
                <li className="navigation__item">
                  <a
                    href="#"
                    className={`navigation__link ${
                      activeLink === "home" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("home")}
                  >
                    {translations[language].title}
                  </a>
                </li>
                <li className="navigation__item">
                  <a
                    href="#about"
                    className={`navigation__link ${
                      activeLink === "about" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("about")}
                  >
                    {translations[language].about}
                  </a>
                </li>
                <li className="navigation__item">
                  <a
                    href="#news"
                    className={`navigation__link ${
                      activeLink === "news" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("news")}
                  >
                    {translations[language].news}
                  </a>
                </li>
                <li className="navigation__item">
                  <a
                    href="#gallery"
                    className={`navigation__link ${
                      activeLink === "gallery" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("gallery")}
                  >
                    {translations[language].gallery}
                  </a>
                </li>
                <li className="navigation__item">
                  <a
                    href="#contact"
                    className={`navigation__link ${
                      activeLink === "contact" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("contact")}
                  >
                    {translations[language].contact}
                  </a>
                </li>
              </ul>
            </nav>
            <div className="top-bar__options">
              <div className="top-bar__select-wrapper">
                <select
                  id="language-select"
                  name="language"
                  className="top-bar__custom-select"
                  onChange={(e) => switchLanguage(e.target.value)}
                >
                  <option value="en">EN</option>
                  <option value="ua">UA</option>
                </select>
              </div>
              <button className="top-bar__button button">
                {translations[language].buyNow}
              </button>
            </div>
          </div>
        </div>
      </header>

      <aside className="menu" id="menu">
        <div className="menu__content">
          <div className="menu__logo">
            <img
              src="/images/top-bar-logo.svg"
              alt="platform logo"
              className="menu__image"
            />
          </div>
          <button className="menu__burger">
            <a href="#menu" className="menu__menu-link">
              <img src="/images/icons/close.svg" alt="close menu" />
            </a>
          </button>
        </div>
        <div className="menu__info">
          <a href="#" className="menu__info-item">
            {translations[language].title}
          </a>
          <a href="#about" className="menu__info-item">
            {translations[language].about}
          </a>
          <a href="#news" className="menu__info-item">
            {translations[language].news}
          </a>
          <a href="#gallery" className="menu__info-item">
            {translations[language].gallery}
          </a>
          <a href="#contact" className="menu__info-item">
            {translations[language].contact}
          </a>
        </div>
        <div className="menu__options">
          <select
            id="language-select"
            name="language"
            className="menu__select"
            onChange={(e) => switchLanguage(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="ua">UA</option>
          </select>
          <button className="menu__button button">
            {translations[language].buyNow}
          </button>
        </div>
      </aside>
    </>
  );
};
