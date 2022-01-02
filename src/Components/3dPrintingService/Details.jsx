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
      <div className="gotham h3 text-decoration-underline mx-5 my-3">
        Project Details
      </div>
      <div className="details-form-container mx-5 my-3 row">
        <div className="col-md-6 ">
          <label className="form-label">Lead Time</label>
          <input type="text" name="leadTime" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Quantity</label>
          <input type="text" name="quantity" className="form-control" />
        </div>
        <div className="col-md-6 my-2">
          <label className="form-label">Surface Finish</label>
          <select className="form-select" name="surfaceFinish">
            <option selected disabled></option>

            <option value="3d printed">3D Printed</option>
            <option value="painted">Painted</option>
          </select>
        </div>
        <div className="col-md-6 my-2">
          <label className="form-label">Prefered Method</label>
          <select className="form-select" name="preferedMethod">
            <option selected disabled></option>
            <option value="FDM">FDM</option>
            <option value="SLA">SLA</option>
            <option value="SLS">SLS</option>
          </select>
        </div>
        <div className="col-md-12">
          <label className="form-label">Prefered Material</label>
          <input type="text" name="preferedMaterial" className="form-control" />
        </div>
        <div className="col-md-12 my-2">
          <label className="form-label">Note - Special Requirements</label>
          <textarea
            style={{ height: "200px" }}
            className="form-control resize-none"
          ></textarea>
        </div>
      </div>
      <div className="justify-content-center mx-5 my-2 row">
        <button
          style={{ borderRadius: "40px", fontSize: "16px" }}
          className="btn primary-bg text-light fw-bold col-md-5"
        >
          Get Quote
        </button>
      </div>
    </>
  );
}

export default Details;
