import { useEffect, useRef, useState } from "react";
import "animate.css";
import './Available.scss';

export const Available = () => {
  const headerRef = useRef(null);
  const listRef = useRef(null);

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerRef.current && entry.isIntersecting) {
            setIsHeaderVisible(true);
          }
          if (entry.target === listRef.current && entry.isIntersecting) {
            setIsListVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (listRef.current) observer.observe(listRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (listRef.current) observer.unobserve(listRef.current);
    };
  }, []);

  return (
    <section className='available'>
      <div
        ref={headerRef}
        className={`available__header title-group animate__animated ${
          isHeaderVisible ? "animate__fadeInUp" : ""
        }`}
      >
        <h2 className='title-group__title'>available</h2>
        <div className='title-group__dot'></div>
        <h2 className='title-group__title-japan'>可用</h2>
      </div>
      <ul
        ref={listRef}
        className={`available__list animate__animated ${
          isListVisible ? "animate__fadeInUp" : ""
        }`}
      >
        <li className="available__item">
          <a
            href="https://store.playstation.com/ru-ua/concept/10001973/"
            target="_blank"
            className="available__link"
          >
            <img
              src="/images/icons/big-playstation-icon.svg"
              alt="playstation icon"
            />
          </a>
        </li>
        <li className="available__item">
          <a
            href="https://store.epicgames.com/en-US/p/sifu"
            target="_blank"
            className="available__link"
          >
            <img
              src="/images/icons/big-epic-icon.svg"
              alt="epicgames icon"
            />
          </a>
        </li>
        <li className="available__item">
          <a
            href="https://www.nintendo.com/store/products/sifu-switch/"
            target="_blank"
            className="available__link"
          >
            <img
              src="/images/icons/big-nintendo-icon.svg"
              alt="nintendo icon"
            />
          </a>
        </li>
        <li className="available__item">
          <a
            href="https://store.steampowered.com/agecheck/app/2138710/?utm_source=website&utm_medium=homepage&utm_campaign=sifu"
            target="_blank"
            className="available__link"
          >
            <img
              src="/images/icons/big-steam-icon.svg"
              alt="steam icon"
            />
          </a>
        </li>
        <li className="available__item">
          <a
            href="https://www.xbox.com/ru-RU/games/store/sifu/9p7pf6zp3958"
            target="_blank"
            className="available__link"
          >
            <img
              src="/images/icons/big-xbox-icon.svg"
              alt="xbox icon"
            />
          </a>
        </li>
      </ul>
    </section>
  )
}
