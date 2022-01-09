import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Store", id: "store" },
    { name: "3D Printing Custom", id: "3dprintingcustom" },
    { name: "3D Scanning", id: "scanningService" },
    { name: "Design Services", id: "designService" },
  ];

  let user = true;
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", fixNav);
    return () => {
      window.removeEventListener("scroll", fixNav);
    };
  });
  const navRef = useRef(null);
  const fixNav = (e) => {
    if (window.scrollY > 50) {
      navRef.current.classList.add("nav-fixed");
    } else {
      navRef.current.classList.remove("nav-fixed");
    }
  };
  return (
    <>
      <nav
        style={{ height: "10vh" }}
        ref={navRef}
        className="navbar navbar-expand-lg d-flex align-items-center px-5 justify-content-around primary-bg"
      >
        <div className="container-fluid">
          <Link className="fs-4 text-dark navbar-brand cursor" path="/">
            <span className="fs-2 fw-bold text-light">PRO</span>
            <span className="primary-color fs-1 fw-bold">3D</span>
          </Link>
          <button className="btn hamburger" onClick={() => setNavOpen(true)}>
            <i className="fas fa-bars fs-3 text-light"></i>
          </button>
          <ul
            className={`navbar-nav ${
              navOpen && "show-nav"
            } mx-3 d-flex align-items-center`}
          >
            {navLinks.map((val, idx) => {
              const { id, name } = val;
              return (
                <li key={name + idx} className="nav-item mx-2">
                  <span
                    className="nav-link fs-6 text-light cursor"
                    onClick={() => {
                      document.getElementById(id).scrollIntoView();
                      setNavOpen(false);
                    }}
                  >
                    {name}
                  </span>
                </li>
              );
            })}
            {user ? (
              <li className="m-0 nav-item mx-2 position-relative">
                <i className="fas fa-shopping-cart text-light fs-4 cursor"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  30
                </span>
              </li>
            ) : (
              <Link
                className="d-flex align-items-center ms-3 login-link btn-outline-light btn text-light border-light fw-bold"
                to="/login"
              >
                Login
              </Link>
            )}
            <button
              className="btn cursor close-btn d-flex justify-content-center align-items-center"
              onClick={() => setNavOpen(false)}
            >
              <i className="fas fa-times fs-2 blue-color"></i>
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
