import React from "react";
import BlogPosts from "../Components/BlogPosts/BlogPosts";

export default function BlogSection(props) {
  const { image } = props;
  return (
    <>
      <h4 id="blogSection" className="mx-5 mt-5 mb-3 gotham top-heading">
        Subscribe to our blog
      </h4>
      <BlogPosts items={[...Array(4)]} />
    </>
  );
}
