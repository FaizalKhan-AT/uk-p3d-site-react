import React, { useRef } from "react";

function PrintingService() {
  const fileUploadRef = useRef();
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle mt-5 d-flex justify-coneten">
        <input ref={fileUploadRef} type="file" hidden />
        <button
          className="btn primary-bg text-light poppins mt-5"
          onClick={() => fileUploadRef.current.click()}
        >
          Upload File [CAD File]
        </button>
      </div>
    </>
  );
}

export default PrintingService;
