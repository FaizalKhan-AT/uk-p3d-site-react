import React from "react";
import uae1 from "../Assets/images/uae2.jpg";
import Details from "../Components/3dScanning/Details";
import Scanning from "../Components/3dScanning/Scanning";
import "./sections.css";

function ScanningServices() {
  return (
    <>
      <h4 id="scanningService" className="mx-5 my-5 gotham top-heading">
        3D Scanning service - UAE
      </h4>
      <div className="position-relative ">
        <img className="uae-img" src={uae1} alt="image of uae" />
        <div className="overlay-uae position-absolute start-0 end-0 top-0 bottom-0 "></div>
        <h3 className="cover-heading gotham position-absolute top-50 translate-middle start-50 d-flex align-items-center text-center">
          Get Quote from Top 10 3D Scanning service providers in UAE
        </h3>
        <Scanning />
      </div>
      <div className="container">
        <Details />
      </div>
    </>
  );
}

export default ScanningServices;
