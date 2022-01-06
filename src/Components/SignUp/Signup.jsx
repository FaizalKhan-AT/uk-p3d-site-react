import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [cshowPassword, setCshowPassword] = useState(false);
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="card px-4 row">
          <div className="card-title h2 fw-bold gotham my-3 text-center">
            PRO 3D
          </div>
          <div className="col-md-12 my-2 mt-4">
            <label className="form-label">Username</label>
            <input type="text" name="username" className="form-control" />
          </div>
          <div className="col-md-12 my-2">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" />
          </div>
          <div className="col-md-12 my-2">
            <label className="form-label">Password</label>
            <div className="position-relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-control"
              />
              <i
                style={{ left: "92%" }}
                className={`fas ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                } position-absolute cursor top-50 translate-middle`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
          </div>
          <div className="col-md-12 my-2">
            <label className="form-label">Confirm Password</label>
            <div className="position-relative">
              <input
                type={cshowPassword ? "text" : "password"}
                name="cpassword"
                className="form-control"
              />
              <i
                style={{ left: "92%" }}
                className={`fas ${
                  cshowPassword ? "fa-eye-slash" : "fa-eye"
                } position-absolute cursor top-50 translate-middle`}
                onClick={() => setCshowPassword(!cshowPassword)}
              ></i>
            </div>
          </div>
          <div className="col-md-12 mt-5 mb-4">
            <button className="btn w-100 primary-bg text-light">
              Register
            </button>
          </div>
          <div className="col-md-12 my-3 text-center">
            <span>
              Already have an Account ? <Link to="/login">Login</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
