import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgottenPassword() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="card px-4 row">
          <div className="card-title h3 gotham my-3 text-center">
            Forgot Password
          </div>
          <div className="col-md-12 my-2 mt-4">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" />
          </div>
          <div className="col-md-12 my-4">
            <button className="btn w-100 primary-bg text-light">
              Reset Password
            </button>
          </div>
          <div className="col-md-12 my-3 text-center">
            <span>
              Go back to <Link to="/login">Login</Link>
              <br />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgottenPassword;
