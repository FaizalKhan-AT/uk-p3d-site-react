import React from "react";
import ProductSlider from "../Components/ProductSlider/ProductSlider";
import "./sections.css";
function Store() {
  return (
    <>
      <div id="store" className="mx-5 my-3">
        <h4 className="gotham mx-5">Store</h4>
        <ProductSlider items={[...Array(20)]} />
        <ProductSlider items={[...Array(22)]} />
      </div>
    </>
  );
}

export default Store;
