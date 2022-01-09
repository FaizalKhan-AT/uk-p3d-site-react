import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { bannerImages } from "../../exampleData";

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
        {bannerImages.map((val, idx) => {
          return (
            <SwiperSlide key={idx + 4} className="">
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: "-1",
                }}
                src={val}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Banner;
