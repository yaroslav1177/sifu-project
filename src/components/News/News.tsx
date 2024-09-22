import { useEffect, useRef, useState } from "react";
import "animate.css";
import "./News.scss";
import { useLanguage } from "../../translation/LanguageProvider";
import translations from "../../translation/translations";

export const News = () => {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const { language } = useLanguage();

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerRef.current && entry.isIntersecting) {
            setIsHeaderVisible(true);
          }
          if (entry.target === contentRef.current && entry.isIntersecting) {
            setIsContentVisible(true);
          }
        });
      },
      { threshold: 0.01 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section className="news" id="news">
      <div
        ref={headerRef}
        className={`news__header title-group animate__animated ${
          isHeaderVisible ? "animate__fadeInUp" : ""
        }`}
      >
        <h2 className="title-group__title news__title">
          {translations[language].newsTitle}
        </h2>
        <div className="title-group__dot"></div>
        <h2 className="title-group__title-japan news__title-japan">消息</h2>
      </div>

      <div
        ref={contentRef}
        className={`news__content animate__animated ${
          isContentVisible ? "animate__fadeInUp" : ""
        }`}
      >
        <div className="news__arenas arenas">
          <div className="arenas__image"></div>
          <p className="arenas__date">{translations[language].arenasDate}</p>
          <p className="arenas__title">{translations[language].arenasTitle}</p>
          <p className="arenas__description">
            {translations[language].arenasDescription}
          </p>
          <a href="#" className="arenas__link">
            {translations[language].readMore}
          </a>
        </div>

        <div className="news__replay replay">
          <div className="replay__item">
            <p className="replay__date">{translations[language].replayDate}</p>
            <p className="replay__title">
              {translations[language].replayTitle}
            </p>
            <p className="replay__description">
              {translations[language].newsTitle}
            </p>
            <a href="#" className="replay__link">
              {translations[language].readMore}
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">{translations[language].replayDate}</p>
            <p className="replay__title">
              {translations[language].replayTitle}
            </p>
            <p className="replay__description">
              {translations[language].newsTitle}
            </p>
            <a href="#" className="replay__link">
              {translations[language].readMore}
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">{translations[language].replayDate}</p>
            <p className="replay__title">
              {translations[language].replayTitle}
            </p>
            <p className="replay__description">
              {translations[language].newsTitle}
            </p>
            <a href="#" className="replay__link">
              {translations[language].readMore}
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">{translations[language].replayDate}</p>
            <p className="replay__title">
              {translations[language].replayTitle}
            </p>
            <p className="replay__description">
              {translations[language].newsTitle}
            </p>
            <a href="#" className="replay__link">
              {translations[language].readMore}
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">{translations[language].replayDate}</p>
            <p className="replay__title">
              {translations[language].replayTitle}
            </p>
            <p className="replay__description">
              {translations[language].newsTitle}
            </p>
            <a href="#" className="replay__link">
              {translations[language].readMore}
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">{translations[language].replayDate}</p>
            <p className="replay__title">
              {translations[language].replayTitle}
            </p>
            <p className="replay__description">
              {translations[language].newsTitle}
            </p>
            <a href="#" className="replay__link">
              {translations[language].readMore}
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">{translations[language].replayDate}</p>
            <p className="replay__title">
              {translations[language].replayTitle}
            </p>
            <p className="replay__description">
              {translations[language].newsTitle}
            </p>
            <a href="#" className="replay__link">
              {translations[language].readMore}
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">{translations[language].replayDate}</p>
            <p className="replay__title">
              {translations[language].replayTitle}
            </p>
            <p className="replay__description">
              {translations[language].newsTitle}
            </p>
            <a href="#" className="replay__link">
              {translations[language].readMore}
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">{translations[language].replayDate}</p>
            <p className="replay__title">
              {translations[language].replayTitle}
            </p>
            <p className="replay__description">
              {translations[language].newsTitle}
            </p>
            <a href="#" className="replay__link">
              {translations[language].readMore}
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">{translations[language].replayDate}</p>
            <p className="replay__title">
              {translations[language].replayTitle}
            </p>
            <p className="replay__description">
              {translations[language].newsTitle}
            </p>
            <a href="#" className="replay__link">
              {translations[language].readMore}
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">{translations[language].replayDate}</p>
            <p className="replay__title">
              {translations[language].replayTitle}
            </p>
            <p className="replay__description">
              {translations[language].newsTitle}
            </p>
            <a href="#" className="replay__link">
              {translations[language].readMore}
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">{translations[language].replayDate}</p>
            <p className="replay__title">
              {translations[language].replayTitle}
            </p>
            <p className="replay__description">
              {translations[language].newsTitle}
            </p>
            <a href="#" className="replay__link">
              {translations[language].readMore}
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">{translations[language].replayDate}</p>
            <p className="replay__title">
              {translations[language].replayTitle}
            </p>
            <p className="replay__description">
              {translations[language].newsTitle}
            </p>
            <a href="#" className="replay__link">
              {translations[language].readMore}
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">{translations[language].replayDate}</p>
            <p className="replay__title">
              {translations[language].replayTitle}
            </p>
            <p className="replay__description">
              {translations[language].newsTitle}
            </p>
            <a href="#" className="replay__link">
              {translations[language].readMore}
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">{translations[language].replayDate}</p>
            <p className="replay__title">
              {translations[language].replayTitle}
            </p>
            <p className="replay__description">
              {translations[language].newsTitle}
            </p>
            <a href="#" className="replay__link">
              {translations[language].readMore}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
