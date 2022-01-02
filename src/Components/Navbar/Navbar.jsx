import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navLinks = [
    "Home",
    "Store",
    "3D Printing Custom",
    "3D Scanning",
    "Design Services",
  ];
  useEffect(() => {
    window.addEventListener("scroll", fixNav);
    return () => {
      window.removeEventListener("scroll", fixNav);
    };
  });
  const navRef = useRef(null);
  const fixNav = (e) => {
    console.log(window.scrollY);
    if (window.scrollY > 50) {
      navRef.current.classList.add("nav-fixed");
    } else {
      navRef.current.classList.remove("nav-fixed");
    }
  };
  return (
    <>
      <nav
        ref={navRef}
        className="navbar navbar-expand-lg d-flex align-items-center px-5 justify-content-around primary-bg"
      >
        <div className="container-fluid">
          <span className="fs-4 text-dark navbar-brand cursor">
            <span className="fs-2 fw-bold text-light">PRO</span>
            <span className="primary-color fs-1 fw-bold">3D</span>
          </span>
          <ul className="navbar-nav mx-3 d-flex align-items-center">
            {navLinks.map((val, idx) => {
              return (
                <li key={val + idx} className="nav-item mx-2">
                  <Link
                    to="3dprintingcustom"
                    className="nav-link fs-5 text-light cursor"
                  >
                    {val}
                  </Link>
                </li>
              );
            })}
            <li className="m-0 nav-item mx-2 position-relative">
              <i className="fas fa-shopping-cart text-light fs-4 cursor"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                30
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
