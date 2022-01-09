import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Pagination]);

function Cards(props) {
  const { images, index } = props;
  return (
    <>
      <div className="card prod-card">
        <div className="text-center">
          <Swiper
            className="mySwiper"
            loop={true}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {images.map((img, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <img
                    className="card-img-top prod-img"
                    style={{ objectFit: "contain" }}
                    width="100"
                    height="100"
                    src={img}
                    alt="product images"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <span className="pt-2  d-flex flex-column align-items-center">
          <div className="ratings my-2">
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-secondary"></i>
          </div>
          <div className="card-text fs-6">Product name {index + 1}</div>
          <div className="card-text my-1 text-muted">Category 1</div>
          <div className="my-1 mb-2 price fs-5">AED {253.3 + (index + 10)}</div>
          <button className="btn text-center add-cart w-100 mt-2">
            <i className="fas fa-cart-plus me-2"></i>
            Add to Cart
          </button>
        </span>
      </div>
    </>
  );
}

export default Cards;
