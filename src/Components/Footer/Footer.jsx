import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <ul className="social-icon cursor">
          <li className="social-icon__item">
            <span className="social-icon__link">
              <i className="fab fa-facebook"></i>
            </span>
          </li>
          <li className="social-icon__item">
            <span className="social-icon__link">
              <i className="fab fa-twitter"></i>
            </span>
          </li>
          <li className="social-icon__item">
            <span className="social-icon__link">
              <i className="fab fa-linkedin"></i>
            </span>
          </li>
          <li className="social-icon__item">
            <span className="social-icon__link">
              <i className="fab fa-instagram"></i>
            </span>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <span
              className="menu__link"
              onClick={() => document.getElementById("home").scrollIntoView()}
            >
              Home
            </span>
          </li>
          <li className="menu__item">
            <span className="menu__link">About</span>
          </li>
          <li className="menu__item">
            <span className="menu__link">Services</span>
          </li>
          <li className="menu__item">
            <span className="menu__link">Team</span>
          </li>
          <li className="menu__item">
            <span className="menu__link">Contact</span>
          </li>
        </ul>
        <p>&copy;2022 PRO3D | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Footer;
