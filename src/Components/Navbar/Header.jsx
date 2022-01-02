import React from "react";
import Navbar from "./Navbar";
import SocialLInks from "./SocialLInks";
import "./navbar.css";

function Header() {
  return (
    <>
      <header>
        <SocialLInks />
        <Navbar />
      </header>
    </>
  );
}

export default Header;
