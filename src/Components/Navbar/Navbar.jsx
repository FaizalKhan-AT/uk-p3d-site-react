import React from "react";

function Navbar() {
  const navLinks = [
    "Home",
    "Store",
    "3D Printing Custom",
    "3D Scanning",
    "Design Services",
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex align-items-center px-5 justify-content-around primary-bg">
        <div className="container-fluid">
          <span className="fs-4 text-dark navbar-brand cursor">
            <span className="fs-2 fw-bold text-light">PRO</span>
            <span className="primary-color fs-1 fw-bold">3D</span>
          </span>
          <ul class="navbar-nav mx-3">
            {navLinks.map((val, idx) => {
              return (
                <li key={val + idx} class="nav-item mx-2">
                  <span className="nav-link fs-5 text-light cursor">{val}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
