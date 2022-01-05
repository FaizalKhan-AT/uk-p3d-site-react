import React from "react";
import BlogPosts from "../Components/BlogPosts/BlogPosts";

export default function BlogSection(props) {
  const { image } = props;
  return (
    <>
      <h2
        id="blogSection"
        className="mx-5 mt-5 mb-3 gotham text-decoration-underline"
      >
        Subscribe to our blog
      </h2>
      <BlogPosts items={[...Array(4)]} />
    </>
  );
}
