import React, { useEffect, useState } from "react";
import { getPosts } from "../api";
import SinglePost from "./SinglePost";



const Posts = (props) => {
  const posts = props.posts;
  return (
    <div>
      <h1>
        {/* /// original search component /// */}

        Search Posts:
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button className="searchBtn"> Search </button>



        {/* /// possible new sear component /// */}

        {/* <form onChange={handleChange} onSubmit={handleSubmit}>
              <input id="title" defaultValue={formDetails.title} />
              <input id="description" defaultValue={formDetails.description} />
              <input id="price" defaultValue={formDetails.price} />
              <input id="location" defaultValue={formDetails.location} />
              <button type="submit">Submit</button>
            </form> */}


      </h1>
      <SinglePost posts={posts} />{" "}
    </div>
  );
};

export default Posts;


