import React from "react";
import Navbar from "./Navbar";
import SocialLInks from "./SocialLInks";
import "./navbar.css";

function Header() {
  return (
    <>
      <header id="home">
        <SocialLInks />
        <Navbar />
      </header>
    </>
  );
}

export default Header;
