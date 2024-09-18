import { useEffect, useRef, useState } from "react";
import "animate.css";
import "./Follow.scss";

export const Follow = () => {
  const titleRef = useRef(null);
  const socialRef = useRef(null);
  const technologyRef = useRef(null);

  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSocialVisible, setIsSocialVisible] = useState(false);
  const [isTechnologyVisible, setIsTechnologyVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === titleRef.current && entry.isIntersecting) {
          setIsTitleVisible(true);
        }
        if (entry.target === socialRef.current && entry.isIntersecting) {
          setIsSocialVisible(true);
        }
        if (entry.target === technologyRef.current && entry.isIntersecting) {
          setIsTechnologyVisible(true);
        }
      });
    });

    if (titleRef.current) observer.observe(titleRef.current);
    if (socialRef.current) observer.observe(socialRef.current);
    if (technologyRef.current) observer.observe(technologyRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (socialRef.current) observer.unobserve(socialRef.current);
      if (technologyRef.current) observer.unobserve(technologyRef.current);
    };
  }, []);

  return (
    <section className="follow">
      <h3
        ref={titleRef}
        className={`follow__title animate__animated ${
          isTitleVisible ? "animate__fadeIn" : ""
        }`}
      >
        FOLLOW US
      </h3>

      <div
        ref={socialRef}
        className={`follow__social animate__animated ${
          isSocialVisible ? "animate__fadeIn" : ""
        }`}
      >
        <a
          href="https://www.facebook.com/SifuGame"
          target="_blank"
          className="follow__social-link"
        >
          <img src="/images/icons/facebook-icon.svg" alt="facebook" />
        </a>
        <a
          href="https://twitter.com/SifuGame"
          target="_blank"
          className="follow__social-link"
        >
          <img src="/images/icons/twitter-icon.svg" alt="twitter" />
        </a>
        <a
          href="https://www.youtube.com/c/Sloclap/videos"
          target="_blank"
          className="follow__social-link"
        >
          <img src="/images/icons/youtube-icon.svg" alt="youtube" />
        </a>
        <a
          href="https://www.reddit.com/r/SifuGame/"
          target="_blank"
          className="follow__social-link"
        >
          <img src="/images/icons/reddit-icon.svg" alt="reddit" />
        </a>
      </div>

      <div
        ref={technologyRef}
        className={`follow__technology animate__animated ${
          isTechnologyVisible ? "animate__fadeIn" : ""
        }`}
      >
        <a
          href="http://sloclap.com/en"
          className="sloclap-logo"
          target="_blank"
        >
          <img src="/images/icons/sloclap-icon.svg" alt="sloclap" />
        </a>
        <a
          href="https://kepler-interactive.com/"
          className="kepler-logo"
          target="_blank"
        >
          <img src="/images/icons/kepler-icon.svg" alt="kepler" />
        </a>
        <a
          href="https://www.unrealengine.com/en-US"
          className="unreal-logo"
          target="_blank"
        >
          <img src="/images/icons/unreal-icon.svg" alt="unreal engine" />
        </a>
      </div>
    </section>
  );
};
