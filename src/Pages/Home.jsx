import React from "react";
import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/Navbar/Header";
import BlogSection from "../Sections/BlogSection";
import DesignServices from "../Sections/DesignServices";
import PrintingService from "../Sections/PrintingService";
import ScanningServices from "../Sections/ScanningServices";
import Store from "../Sections/Store";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <br />
      <Store />
      <br />
      <PrintingService />
      <br />
      <ScanningServices />
      <br />
      <br />
      <DesignServices />
      <br />
      <br />
      <BlogSection />
    </>
  );
}

export default Home;
