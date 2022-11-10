import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { cardata } from "../database/api";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { CarModelCard } from "./CarModelCard";
import './styles.css'
import back from "./assets/back.png";
import next from "./assets/next.png";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function Carosel() {
  const data=cardata;
  const [screenWidth, setScreewidth] = useState(window.innerWidth);
  return (
    <>
      <Swiper

        slidesPerView={screenWidth>600?3:1}
        spaceBetween={30}
        navigation={true} 
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {data.map((data)=>{
            return(
                <div className="legend">
                     <SwiperSlide><CarModelCard data = {data} /></SwiperSlide>
                </div>
            )
        })} 
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      <div className="caroselButton">
        <div className="svgIcon">
        <img src={next} />
        <img src={back} />
        </div>
      </div>
    </>
  );
}
