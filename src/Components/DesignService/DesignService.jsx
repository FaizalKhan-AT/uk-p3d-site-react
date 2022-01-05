import React from "react";

function DesignService() {
  return (
    <>
      <div
        style={{ top: "35%" }}
        className="position-absolute translate-middle start-50 mt-5"
      >
        <br />
        <br />
        <div
          style={{ marginTop: "6rem" }}
          className="d-flex align-items-center"
        >
          <div className="my-2">
            <textarea
              style={{
                height: "100px",
              }}
              className="form-control resize-none"
              placeholder="Design Idea..."
            ></textarea>
          </div>
          <div className="my-2 mx-3">
            <button
              style={{
                height: "80px",
                width: "80px",
                borderRadius: "50%",
              }}
              className="btn primary-bg fs-2 text-light"
            >
              <i class="fas fa-microphone-alt"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{ bottom: "35px" }}
        className="row position-absolute w-100 translate-middle px-5 start-50 align-items-center justify-content-center"
      >
        <button className="btn primary-bg text-light col-md-3">
          Rough Sketch or Image
        </button>
        <button className="btn ms-2 primary-bg text-light col-md-3">
          CAD File
        </button>
      </div>
    </>
  );
}

export default DesignService;
