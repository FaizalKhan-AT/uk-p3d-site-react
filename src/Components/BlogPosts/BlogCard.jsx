import React from "react";

function BlogCard(props) {
  const { image } = props;
  return (
    <>
      <div className="card">
        <img
          style={{ objectFit: "cover" }}
          width="300"
          height="200"
          src={image}
          className="card-img-top"
        />
        <div className="card-body">
          <div className="card-title fw-bold fs-5">Heading of the blog</div>
          <div className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            animi!
          </div>
          <div className="d-flex justify-content-end mt-2">
            <div className="pirmary-text text-decoration-underline cursor">
              Read More
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
