import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Cards from "./Cards";
import { images } from "../../exampleData";

SwiperCore.use([Navigation]);

function Slides(props) {
  const { items } = props;
  return (
    <>
      <Swiper
        className="mySwiper"
        navigation={true}
        spaceBetween={20}
        slidesPerView={5}
      >
        {items.map((item, idx) => {
          return (
            <SwiperSlide>
              <Cards key={idx + 4} images={images} index={idx} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="d-flex justify-content-end">
        <button className="see-more-btn my-4 fw-bold">See more</button>
      </div>
    </>
  );
}

export default Slides;
