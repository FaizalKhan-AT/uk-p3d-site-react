import React from "react";
import uae from "../Assets/images/uae3.jpg";
import DesignService from "../Components/DesignService/DesignService";
function DesignServices() {
  return (
    <>
      <h2
        id="3dprintingcustom"
        className="mx-5 gotham text-decoration-underline"
      >
        Design services - UAE
      </h2>
      <div className="position-relative ">
        <img className="uae-img" src={uae} alt="image of uae" />
        <div className="overlay-uae position-absolute start-0 end-0 top-0 bottom-0 "></div>
        <h3 className="gotham position-absolute top-50 translate-middle start-50 d-flex align-items-center text-center">
          Give us your ideas, And we can Design your model
        </h3>
        <DesignService />
      </div>
    </>
  );
}

export default DesignServices;
