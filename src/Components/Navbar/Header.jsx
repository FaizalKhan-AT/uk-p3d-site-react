import React from "react";
import Navbar from "./Navbar";
import SocialLInks from "./SocialLInks";

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
