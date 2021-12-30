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
      <div className="d-flex align-items-center py-2">
        <div className="py-3 d-flex row justify-content-end w-100">
          <div className="d-flex col-md-5 justify-content-around">
            {socialIcons.map((val, idx) => {
              return (
                <img
                  style={{ cursor: "pointer" }}
                  width="30"
                  key={idx}
                  src={val}
                  alt={val.name}
                />
              );
            })}
          </div>
        </div>
        <div
          style={{ width: "300px" }}
          className="mx-5 d-flex flex-column align-items-center gap-3"
        >
          <span>
            <img
              style={{ cursor: "pointer" }}
              width="22"
              src={phone}
              alt="phone number"
            />
            <span className="mx-2">123-XXX-345-XXX</span>
          </span>
          <div>
            <img
              style={{ cursor: "pointer" }}
              width="22"
              src={whatsapp}
              alt="whatsapp number"
            />
            <span className="mx-2">123-XXX-345-XXX</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialLInks;
