import React from "react";
import Slides from "./Slides";
import "./productslider.css";
function ProductSlider(props) {
  const { items } = props;
  return (
    <>
      <div className="my-5 mb-3 product-slider">
        <Slides items={items} />
      </div>
    </>
  );
}

export default ProductSlider;
