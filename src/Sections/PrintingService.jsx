import React from "react";
import PrintingServiceComponent from "../Components/3dPrintingService/PrintingService";
import uae from "../Assets/images/uae.jpg";
import "./sections.css";
import Details from "../Components/3dPrintingService/Details";

function PrintingService() {
  return (
    <>
      <h4 id="3dprintingcustom" className="mx-5 my-5 gotham top-heading">
        3D Printing service - UAE
      </h4>
      <div className="position-relative ">
        <img className="uae-img" src={uae} alt="image of uae" />
        <div className="overlay-uae position-absolute start-0 end-0 top-0 bottom-0 "></div>
        <h3 className="cover-heading gotham position-absolute top-50 translate-middle start-50 d-flex align-items-center text-center">
          Get Quote from Top 10 3D Printing Companies in UAE
        </h3>
        <PrintingServiceComponent />
      </div>
      <div className="container">
        <Details />
      </div>
    </>
  );
}

export default PrintingService;
