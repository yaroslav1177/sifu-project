import "./About.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export const About = () => {
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
                  ON THE PATH 
                  OF VENGEANCE
                </h2>
                <div className="slide1__line"></div>
                <p className="slide1__subtitle">
                  The hunt for the assassins of your family will take you
                  through the hidden corners of the city, from gang-ridden
                  suburbs to the cold hallways of corporate towers. You have one
                  day, and countless enemies on your way. Time will be the price
                  to pay.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide2">
              <div className="slide2__content">
                <h2 className="slide2__title">
                  ADAPTATION <br /> IS THE WAY
                </h2>
                <div className="slide2__line"></div>
                <p className="slide2__subtitle">
                  Careful positioning and clever use of the environment to your
                  advantage are key to your survival. Throwable objects,
                  makeshift weapons, windows and ledges... The odds are stacked
                  against you, you will have to use everything at your disposal
                  to prevail.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide3">
              <div className="slide3__content">
                <h2 className="slide3__title">
                  TRAINING <br />
                  NEVER ENDS
                </h2>
                <div className="slide3__line"></div>
                <p className="slide3__subtitle">
                  Kung Fu is a path for the body and the mind. Learn from your
                  errors, unlock unique skills, and find the strength within
                  yourself to master the devastating techniques of Pak-Mei
                  Kung-Fu.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
