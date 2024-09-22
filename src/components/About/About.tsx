import "./About.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { useLanguage } from "../../translation/LanguageProvider";
import translations from "../../translation/translations";

export const About = () => {
  const { language } = useLanguage();

  return (
    <section className="about" id="about">
      <div className="slider">
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
        >
          <SwiperSlide>
            <div className="slide1">
              <div className="slide1__content">
                <h2 className="slide1__title">
                  {translations[language].slideOneTitle}
                </h2>
                <div className="slide1__line"></div>
                <p className="slide1__subtitle">
                  {translations[language].slideOneDescription}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide2">
              <div className="slide2__content">
                <h2 className="slide2__title">
                  {translations[language].slideTwoTitle}
                </h2>
                <div className="slide2__line"></div>
                <p className="slide2__subtitle">
                  {translations[language].slideTwoDescription}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide3">
              <div className="slide3__content">
                <h2 className="slide3__title">
                  {translations[language].slideThreeTitle}
                </h2>
                <div className="slide3__line"></div>
                <p className="slide3__subtitle">
                  {translations[language].slideThreeDescription}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
