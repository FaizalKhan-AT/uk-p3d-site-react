import React from "react";
import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/Navbar/Header";
import DesignServices from "../Sections/DesignServices";
import PrintingService from "../Sections/PrintingService";
import ScanningServices from "../Sections/ScanningServices";
import Store from "../Sections/Store";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Store />
      <PrintingService />
      <br />
      <ScanningServices />
      <br />
      <DesignServices />
    </>
  );
}

export default Home;
