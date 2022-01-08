import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { images } from "../../exampleData";
import BlogCard from "./BlogCard";
import "./blog.css";

SwiperCore.use([Navigation]);
function BlogPosts(props) {
  const { items } = props;
  const [slides, setSlides] = useState(3);
  useEffect(() => {
    window.addEventListener("resize", handleSlideNumber);
    handleSlideNumber();
    return () => {
      window.removeEventListener("resize", handleSlideNumber);
      handleSlideNumber();
    };
  });

  const handleSlideNumber = () => {
    if (window.innerWidth > 750) setSlides(3);
    if (window.innerWidth < 710) setSlides(2);
    if (window.innerWidth < 500) setSlides(1);
  };

  return (
    <>
      {" "}
      <br />
      <br />
      <Swiper
        className="mySwiper mb-4 blogSection"
        navigation={true}
        spaceBetween={20}
        slidesPerView={slides}
      >
        {items.map((item, idx) => {
          return (
            <SwiperSlide key={idx + 2}>
              <BlogCard key={idx + 3} image={images[idx]} index={idx} />
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

export default BlogPosts;
