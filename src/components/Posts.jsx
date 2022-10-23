import React, { useEffect, useState } from "react";
import { getPosts } from "../api";
import SinglePost from "./SinglePost";

const Posts = (props) => {
const [query, setQuery] = useState("")

  const posts = props.posts;
  const onSearch=() => {
    const filteredSearch = posts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()) )
  props.setFilteredPosts(filteredSearch)
  }



  return (
    <div> 
      <h1>
        Search Posts:
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button onClick = {onSearch}className="searchBtn"> Search </button>
      </h1>
      {/* <SearchBar /> */}
      <SinglePost posts={posts} />{" "}
     
    </div>
  );
};

export default Posts;
