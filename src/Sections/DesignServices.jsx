import React from "react";
import uae from "../Assets/images/uae3.jpg";
import DesignService from "../Components/DesignService/DesignService";
import "./sections.css";
import Details from "../Components/DesignService/Details";
function DesignServices() {
  return (
    <>
      <h2
        id="designService"
        className="mx-5 gotham text-decoration-underline top-heading"
      >
        Design services - UAE
      </h2>
      <div className="position-relative ">
        <img
          style={{ height: "500px" }}
          className="uae-img"
          src={uae}
          alt="uae"
        />
        <div className="overlay-uae position-absolute start-0 end-0 top-0 bottom-0 "></div>
        <h3
          style={{ top: "35%" }}
          className="cover-heading service gotham position-absolute translate-middle start-50 d-flex align-items-center text-center"
        >
          Give us your ideas, And we can Design your model
        </h3>
        <DesignService />
        <br />
      </div>
      <Details />
    </>
  );
}

export default DesignServices;
