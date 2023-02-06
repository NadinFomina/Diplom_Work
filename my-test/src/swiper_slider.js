
import bar from "../src/img/bar.png"
import bar1 from "../src/img/bar1.png"
import bar2 from "../src/img/bar2.png"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../src/style/style.css";

// import required modules
import { Pagination } from "swiper";

export default function Slider() {
  return (
    <div className="mySlider_test">
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        grabCursor={true}
        initialSlide={1}
        loop={true}
        spaceBetween={30}
        className="mySwiper"
      >
        <SwiperSlide><img src={bar1} style={{ width: '100%' }} /></SwiperSlide>
        <SwiperSlide><img src={bar} style={{ width: '100%' }} /></SwiperSlide>
        <SwiperSlide><img src={bar2} style={{ width: '100%' }} /></SwiperSlide>
        <SwiperSlide><img src={bar1} style={{ width: '100%' }} /></SwiperSlide>
        <SwiperSlide><img src={bar} style={{ width: '100%' }} /></SwiperSlide>
        <SwiperSlide><img src={bar2} style={{ width: '100%' }} /></SwiperSlide>
      </Swiper>
    </div>
  );
}
