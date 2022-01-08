import React from "react";

function Details() {
  return (
    <>
      <h2 className="gotham h3 text-decoration-underline mx-5 my-3 mt-4">
        Details
      </h2>
      <div className="details-form-container mx-5 my-3 row">
        <div className="col-md-6 ">
          <label className="form-label">Name (Contract Person)</label>
          <input type="text" name="name" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email Address</label>
          <input type="email" name="email" className="form-control" />
        </div>
        <div className="col-md-6 my-2">
          <label className="form-label">Mobile Number</label>
          <input type="tel" name="mobile" className="form-control" />
        </div>
      </div>

      <div className="justify-content-center mx-5 mt-5 mb-3 row">
        <button
          style={{ borderRadius: "40px", fontSize: "16px" }}
          className="btn primary-bg text-light fw-bold  col-md-5"
        >
          Get Quote
        </button>
      </div>
    </>
  );
}

export default Details;