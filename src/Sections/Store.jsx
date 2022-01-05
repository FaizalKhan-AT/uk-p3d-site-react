import React from "react";
import ProductSlider from "../Components/ProductSlider/ProductSlider";

function Store() {
  return (
    <>
      <div id="store" className="mx-5 my-3">
        <h2 className="gotham text-decoration-underline">Store</h2>
        <ProductSlider items={[...Array(20)]} />
        <ProductSlider items={[...Array(22)]} />
      </div>
    </>
  );
}

export default Store;
