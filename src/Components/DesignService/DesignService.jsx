import React from "react";

function DesignService() {
  return (
    <>
      <div className="position-absolute top-50 translate-middle start-50 mt-5">
        <div style={{ marginTop: "6rem" }} className="d-flex">
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
                height: "100px",
                width: "100px",
                borderRadius: "50%",
              }}
              className="btn primary-bg fs-2 text-light"
            >
              <i class="fas fa-microphone-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignService;
