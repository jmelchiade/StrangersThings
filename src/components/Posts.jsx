import React, { useEffect, useState } from "react";
import { getPosts } from "../api";
import SinglePost from "./SinglePost";

const Posts = (props) => {
  const [posts, setAllPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getPosts();
      setAllPosts(allPosts);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>This is all the posts</h1>
      <SinglePost posts={posts} />{" "}
    </div>
  );
};

export default Posts;
