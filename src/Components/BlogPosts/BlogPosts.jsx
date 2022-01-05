import React from "react";
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
  return (
    <>
      {" "}
      <br />
      <br />
      <Swiper
        className="mySwiper mb-4 blogSection"
        navigation={true}
        spaceBetween={20}
        slidesPerView={3}
      >
        {items.map((item, idx) => {
          return (
            <SwiperSlide>
              <BlogCard key={idx + 4} image={images[idx]} index={idx} />
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