import "./Gallery.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from "swiper/modules";

export const Gallery = () => {
  return (
    <section className="gallery">
      <div className="slider">
        <div className="gallery__header">
        <div className="available__top gallery__title">
          <h2 className="available__title">GALLERY</h2>
          <div className="available__dot"></div>
          <h2 className="available__title-japan">艺术</h2>
        </div>
        <div className="swiper-scrollbar"></div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay, Scrollbar]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true, el: '.swiper-scrollbar' }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
        >
          <SwiperSlide>
            <div className="gallery__slide1">
              <img src="/images/arenas-bg.jpg" alt="arenas" />
              <img src="/images/bar.jpg" alt="bar" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gallery__slide2">
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
      </div>
    </section>
  );
};
