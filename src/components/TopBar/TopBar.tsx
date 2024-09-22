import React, { useState, useEffect } from "react";
import "./TopBar.scss";

export const TopBar = () => {
  const [activeLink, setActiveLink] = useState("home");

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
                    Home
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
                    About
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
                    News
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
                    Gallery
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
                    Contact
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
                >
                  <option value="en">EN</option>
                  <option value="ua">UA</option>
                </select>
              </div>
              <button className="top-bar__button button">buy now</button>
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
            Home
          </a>
          <a href="#about" className="menu__info-item">
            About
          </a>
          <a href="#news" className="menu__info-item">
            News
          </a>
          <a href="#gallery" className="menu__info-item">
            Gallery
          </a>
          <a href="#contact" className="menu__info-item">
            Contact
          </a>
        </div>
        <div className="menu__options">
          <select id="language-select" name="language" className="menu__select">
            <option value="en">EN</option>
            <option value="ua">UA</option>
          </select>
          <button className="menu__button button">buy now</button>
        </div>
      </aside>
    </>
  );
};
