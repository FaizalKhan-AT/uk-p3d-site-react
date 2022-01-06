import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
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
          <div className="col-md-12 my-3 mt-4">
            <label className="form-label">Username / Email</label>
            <input type="text" name="username" className="form-control" />
          </div>
          <div className="col-md-12">
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
          <div className="col-md-12 mt-5 mb-4">
            <button className="btn w-100 primary-bg text-light">Login</button>
          </div>
          <div className="col-md-12 my-3 text-center">
            <span>
              Don't have an Account ? <Link to="/signup">Sign Up</Link>
              <br />
              <Link to="/forgotten-password">Forgotten Password</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
