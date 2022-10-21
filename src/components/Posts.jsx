import React, { useEffect, useState } from "react";
import { getPosts } from "../api";
import SinglePost from "./SinglePost";


// const SearchPosts = (props) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [location, setLocation] = useState("");
//   const [willDeliver, setWillDeliver] = useState(false);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const post = { title, description, price, location, willDeliver };
//     const token = localStorage.getItem("token");
//     const newlyCreatedPost = await SearchPosts(post, token);
//     console.log(newPostSearch);
//   }
//   function handleTitleChange(e) {
//     setTitle(e.target.value);
//   }
//   function handleDescriptionChange(e) {
//     setDescription(e.target.value);
//   }
//   function handlePriceChange(e) {
//     setPrice(e.target.value);
//   }
//   function handleLocationChange(e) {
//     setLocation(e.target.value);
//   }
//   function handleWillDeliverChange(e) {
//     setWillDeliver(e.target.value);
//   }

//   console.log(title);
//   return (
//     <form id="searchPost" onSubmit={handleSubmit}>
//       <label>
//         Title:
//         <input id="title" onChange={handleTitleChange} defaultValue={title} />
//       </label>
//       <label>
//         Description:
//         <input
//           id="description"
//           onChange={handleDescriptionChange}
//           defaultValue={description}
//         />
//       </label>
//       <label>
//         Price:
//         <input id="price" onChange={handlePriceChange} defaultValue={price} />
//       </label>
//       <label>
//         Location:
//         <input
//           id="location"
//           onChange={handleLocationChange}
//           defaultValue={location}
//         />
//       </label>
//       <label>
//         Will Deliver:
//         <input
//           id="willDeliver"
//           onChange={handleWillDeliverChange}
//           defaultValue={willDeliver}
//         />
//       </label>
//       <button type="submit">Search Posts</button>
//     </form>

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


