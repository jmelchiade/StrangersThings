import React, { useEffect, useState } from "react";
import { getPosts } from "../api";
import SinglePost from "./SinglePost";



const Posts = (props) => {
  const posts = props.posts;
  return (
    <div>
      <h1>
        Search Posts:
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button className="searchBtn"> Search </button>
      </h1>
      <SinglePost posts={posts} />{" "}
    </div>
  );
};

export default Posts;


