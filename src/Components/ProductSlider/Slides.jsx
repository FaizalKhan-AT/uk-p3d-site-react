import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Cards from "./Cards";
import { images } from "../../exampleData";
import "./productslider.css";

SwiperCore.use([Navigation]);

function Slides(props) {
  const { items } = props;
  useEffect(() => {
    window.addEventListener("resize", handleResponsiveness);
    handleResponsiveness();
    return () => {
      window.removeEventListener("resize", handleResponsiveness);
      handleResponsiveness();
    };
  });

  const handleResponsiveness = (e) => {
    setSpace(false);
    if (window.innerWidth > 1150) setSlides(5);

    if (window.innerWidth < 1130) setSlides(4);

    if (window.innerWidth < 910) setSlides(3);

    if (window.innerWidth < 680) setSlides(2);

    if (window.innerWidth < 500) {
      setSlides(2);
      setSpace(true);
    }
  };
  const [slides, setSlides] = useState(5);
  const [space, setSpace] = useState(false);
  return (
    <>
      <Swiper
        className="mySwiper"
        navigation={true}
        spaceBetween={space ? 2 : 20}
        slidesPerView={slides}
      >
        {items.map((item, idx) => {
          return (
            <SwiperSlide key={idx + 4}>
              <Cards images={images} index={idx} />
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
