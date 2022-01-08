import React, { useRef } from "react";

function Scanning() {
  const imgUploadRef = useRef();
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle mt-5 d-flex">
        <input ref={imgUploadRef} type="file" hidden accept="image/*" />
        <button
          className="btn primary-bg text-light poppins mt-5 component-btn"
          onClick={() => imgUploadRef.current.click()}
        >
          Upload Component to Scan
        </button>
      </div>
    </>
  );
}

export default Scanning;
