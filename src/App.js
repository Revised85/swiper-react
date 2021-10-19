import React from 'react';
import './style.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

// Import Swiper styles
import 'swiper/swiper.scss';

export default function App() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      slidesPerGroup={1}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
      }}
      className="mySwiper"
      breakpoints={{
        883: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        1250: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
      }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}
