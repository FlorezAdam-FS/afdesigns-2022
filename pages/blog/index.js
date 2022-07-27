import React from "react";
import { getPosts } from "../api/constants";
const blog = ({ posts }) => {
  return <div>{posts[0].title.rendered}</div>;
};

export default blog;

export async function getStaticProps(context) {
  const posts = await getPosts();
  console.log(posts);
  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}
