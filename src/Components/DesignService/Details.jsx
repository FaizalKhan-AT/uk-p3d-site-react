import React from "react";

function Details() {
  return (
    <>
      <h3 className="gotham h5 mx-5 my-4 mt-4 sub-heading">Details</h3>
      <div className="details-form-container mx-5 my-3 row">
        <div className="col-md-6 mb-2">
          <label className="form-label">Name (Contract Person)</label>
          <input type="text" name="name" className="form-control" />
        </div>
        <div className="col-md-6 ">
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
