// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { cardata } from "../database/api";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { CarModelCard } from "./CarModelCard";
import './styles.css'
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation  } from "swiper";

export default function Carosel() {
  const data=cardata;
 
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        breakpoints={{
          800: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((data)=>{
            return(
                <div className="legend">
                     <SwiperSlide><CarModelCard data = {data} /></SwiperSlide>
                </div>
            )
        })} 
        
      </Swiper>
      
    </>
  );
}
