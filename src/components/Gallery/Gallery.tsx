import { useEffect, useRef, useState } from "react";
import "animate.css";
import "./Gallery.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

export const Gallery = () => {
  const topRef = useRef(null);
  const scrollRef = useRef(null);

  const [isTopVisible, setIsTopVisible] = useState(false);
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === topRef.current && entry.isIntersecting) {
            setIsTopVisible(true);
          }
          if (entry.target === scrollRef.current && entry.isIntersecting) {
            setIsScrollVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (topRef.current) observer.observe(topRef.current);
    if (scrollRef.current) observer.observe(scrollRef.current);

    return () => {
      if (topRef.current) observer.unobserve(topRef.current);
      if (scrollRef.current) observer.unobserve(scrollRef.current);
    };
  }, []);

  return (
    <section className="gallery" id="gallery">
      <div className="slider">
        <div className="gallery__header">
          <div
            ref={topRef}
            className={`gallery__top title-group animate__animated ${
              isTopVisible ? "animate__fadeInLeft" : ""
            }`}
          >
            <h2 className="title-group__title">GALLERY</h2>
            <div className="title-group__dot"></div>
            <h2 className="title-group__title-japan">艺术</h2>
          </div>
          <div
            ref={scrollRef}
            className={`scroll animate__animated ${
              isScrollVisible ? "animate__fadeInRight" : ""
            }`}
          >
            <div className="scroll__titles">
              <p className="scroll__title">PHOTOS_相片</p>
              <p className="scroll__title">VIDEOS_影片</p>
            </div>
            <div className="swiper-scrollbar-gallery"></div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay, Scrollbar]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-gallery',
            prevEl: '.swiper-button-prev-gallery',
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true, el: ".swiper-scrollbar-gallery" }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
        >
          <SwiperSlide>
            <div className="gallery__slide-images">
              <img src="/images/arenas-bg.jpg" alt="arenas" />
              <img src="/images/bar.jpg" alt="bar" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gallery__slide-images">
              <img src="/images/bar.jpg" alt="bar" />
              <img src="/images/arenas-bg.jpg" alt="arenas" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gallery__slide3">
              <iframe
                width="1000"
                height="450"
                src="https://www.youtube.com/embed/Kx3R2CNhLWA"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gallery__slide4">
              <iframe
                width="1000"
                height="450"
                src="https://www.youtube.com/embed/YfOkWRdQGsI"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev-gallery"></div>
        <div className="swiper-button-next-gallery"></div>
      </div>
    </section>
  );
};
