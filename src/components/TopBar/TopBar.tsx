import React, { useState } from "react";
import "./TopBar.scss";

export const TopBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const handleLinkClick = (linkName: React.SetStateAction<string>) => {
    setActiveLink(linkName);
  };

  return (
    <div className="top-bar animate__animated animate__fadeInDown">
      <a href="#">
        <img
          src="/images/top-bar-logo.svg"
          alt="sifu logo"
          className="top-bar__logo"
        />
      </a>
      <div className="top-bar__content">
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
        <div className="top-bar__right">
          <select
            id="language-select"
            name="language"
            className="top-bar__select"
          >
            <option value="en">EN</option>
            <option value="ua">UA</option>
          </select>
          <button className="top-bar__button button">buy now</button>
        </div>
      </div>
    </div>
  );
};
