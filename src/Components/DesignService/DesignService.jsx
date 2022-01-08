import React, { useRef } from "react";

function DesignService() {
  const roughRef = useRef();
  const cadRef = useRef();
  return (
    <>
      <div
        style={{ top: "35%" }}
        className="position-absolute translate-middle start-50 mt-5 design-s-container"
      >
        <br />
        <br />
        <div
          style={{ marginTop: "6rem" }}
          className="d-flex align-items-center design-idea-container"
        >
          <div className="my-2">
            <textarea
              style={{
                height: "100px",
              }}
              className="form-control resize-none design-idea-input"
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
              <i className="fas fa-microphone-alt"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{ bottom: "35px" }}
        className="service-input-container row position-absolute w-100 translate-middle px-5 start-50 align-items-center justify-content-center"
      >
        <input type="file" accept="images/*" ref={roughRef} hidden />
        <input type="file" accept=".cad" ref={cadRef} hidden />
        <button
          className="btn primary-bg text-light col-md-3 cad-btn-s"
          onClick={() => roughRef.current.click()}
        >
          Rough Sketch or Image
        </button>
        <button
          className="btn ms-2 primary-bg text-light col-md-3 cad-btn-s"
          onClick={() => cadRef.current.click()}
        >
          CAD File
        </button>
      </div>
    </>
  );
}

export default DesignService;
