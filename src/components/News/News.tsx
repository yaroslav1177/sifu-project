import { useEffect, useRef, useState } from "react";
import "animate.css";
import "./News.scss";

export const News = () => {
  const headerRef = useRef(null);
  const contentRef = useRef(null);

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
        <h2 className="title-group__title">LATEST NEWS</h2>
        <div className="title-group__dot"></div>
        <h2 className="title-group__title-japan">消息</h2>
      </div>

      <div
        ref={contentRef}
        className={`news__content animate__animated ${
          isContentVisible ? "animate__fadeInUp" : ""
        }`}
      >
        <div className="news__arenas arenas">
          <div className="arenas__image"></div>
          <p className="arenas__date">March 28, 2023</p>
          <p className="arenas__title">
            PATCH 1.19 & 1.20 - <br /> ARENAS & DAY 1 PATCH
          </p>
          <p className="arenas__description">
            Sifu is finally on Steam and Xbox, and the Arenas update is here!
          </p>
          <a href="#" className="arenas__link">
            READ MORE
          </a>
        </div>

        <div className="news__replay replay">
          <div className="replay__item">
            <p className="replay__date">February 3, 2023</p>
            <p className="replay__title">REPLAY EDITOR CONTEST</p>
            <p className="replay__description">
              We're launching our second community contest...
            </p>
            <a href="#" className="replay__link">
              READ MORE
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">February 3, 2023</p>
            <p className="replay__title">REPLAY EDITOR CONTEST</p>
            <p className="replay__description">
              We're launching our second community contest...
            </p>
            <a href="#" className="replay__link">
              READ MORE
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">February 3, 2023</p>
            <p className="replay__title">REPLAY EDITOR CONTEST</p>
            <p className="replay__description">
              We're launching our second community contest...
            </p>
            <a href="#" className="replay__link">
              READ MORE
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">February 3, 2023</p>
            <p className="replay__title">REPLAY EDITOR CONTEST</p>
            <p className="replay__description">
              We're launching our second community contest...
            </p>
            <a href="#" className="replay__link">
              READ MORE
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">February 3, 2023</p>
            <p className="replay__title">REPLAY EDITOR CONTEST</p>
            <p className="replay__description">
              We're launching our second community contest...
            </p>
            <a href="#" className="replay__link">
              READ MORE
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">February 3, 2023</p>
            <p className="replay__title">REPLAY EDITOR CONTEST</p>
            <p className="replay__description">
              We're launching our second community contest...
            </p>
            <a href="#" className="replay__link">
              READ MORE
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">February 3, 2023</p>
            <p className="replay__title">REPLAY EDITOR CONTEST</p>
            <p className="replay__description">
              We're launching our second community contest...
            </p>
            <a href="#" className="replay__link">
              READ MORE
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">February 3, 2023</p>
            <p className="replay__title">REPLAY EDITOR CONTEST</p>
            <p className="replay__description">
              We're launching our second community contest...
            </p>
            <a href="#" className="replay__link">
              READ MORE
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">February 3, 2023</p>
            <p className="replay__title">REPLAY EDITOR CONTEST</p>
            <p className="replay__description">
              We're launching our second community contest...
            </p>
            <a href="#" className="replay__link">
              READ MORE
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">February 3, 2023</p>
            <p className="replay__title">REPLAY EDITOR CONTEST</p>
            <p className="replay__description">
              We're launching our second community contest...
            </p>
            <a href="#" className="replay__link">
              READ MORE
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">February 3, 2023</p>
            <p className="replay__title">REPLAY EDITOR CONTEST</p>
            <p className="replay__description">
              We're launching our second community contest...
            </p>
            <a href="#" className="replay__link">
              READ MORE
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">February 3, 2023</p>
            <p className="replay__title">REPLAY EDITOR CONTEST</p>
            <p className="replay__description">
              We're launching our second community contest...
            </p>
            <a href="#" className="replay__link">
              READ MORE
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">February 3, 2023</p>
            <p className="replay__title">REPLAY EDITOR CONTEST</p>
            <p className="replay__description">
              We're launching our second community contest...
            </p>
            <a href="#" className="replay__link">
              READ MORE
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">February 3, 2023</p>
            <p className="replay__title">REPLAY EDITOR CONTEST</p>
            <p className="replay__description">
              We're launching our second community contest...
            </p>
            <a href="#" className="replay__link">
              READ MORE
            </a>
          </div>
          <div className="replay__item">
            <p className="replay__date">February 3, 2023</p>
            <p className="replay__title">REPLAY EDITOR CONTEST</p>
            <p className="replay__description">
              We're launching our second community contest...
            </p>
            <a href="#" className="replay__link">
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
