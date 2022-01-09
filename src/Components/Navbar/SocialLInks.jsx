import React from "react";
import fb from "../../Assets/Icons/facebook.png";
import whatsapp from "../../Assets/Icons/whatsapp.png";
import insta from "../../Assets/Icons/instagram.png";
import twitter from "../../Assets/Icons/twitter.png";
import linkedin from "../../Assets/Icons/linkedin.png";
import phone from "../../Assets/Icons/telephone.png";

function SocialLInks() {
  const socialIcons = [fb, insta, twitter, linkedin];
  return (
    <>
      <div className="social-links-container container d-flex align-items-center">
        <div className="py-3 d-flex row w-100">
          <div className="d-flex col-md-6 justify-content-around">
            <span>
              <img
                style={{ cursor: "pointer" }}
                width="22"
                src={phone}
                alt="phone number"
              />
              <span className="mx-2 contact-no">123-XXX-3451</span>
            </span>
            <div>
              <img
                style={{ cursor: "pointer" }}
                width="22"
                src={whatsapp}
                alt="whatsapp number"
              />
              <span className="mx-2 contact-no">123-XXX-3451</span>
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px" }}
          className="contact-details d-flex align-items-center gap-4"
        >
          {socialIcons.map((val, idx) => {
            return (
              <img
                style={{ cursor: "pointer" }}
                width="22"
                key={idx}
                src={val}
                alt={val.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SocialLInks;
