import React from "react";
import BlogPosts from "../Components/BlogPosts/BlogPosts";

export default function BlogSection(props) {
  const { image } = props;
  return (
    <>
      <h4
        id="blogSection"
        className="mx-5 mt-5 mb-4 gotham top-heading text-center"
      >
        Subscribe to our blog
      </h4>
      <BlogPosts items={[...Array(4)]} />
    </>
  );
}
