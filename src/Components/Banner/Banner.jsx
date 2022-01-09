import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Banner() {
  return (
    <>
      <Swiper
        style={{ height: "350px" }}
        className="mySwiper fs-1"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        slidesPerView={1}
      >
        {" "}
        {[...Array(5)].map((val, idx) => {
          return (
            <SwiperSlide
              key={idx + 4}
              className="bg-secondary  d-flex align-items-center justify-content-center text-light"
            >
              Store offer {idx + 1}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Banner;
