import React, { useState } from "react";
import { createNewPost } from "../api";

const CreateNewPost = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(null);
  // line 9 had a useState defined as false

  async function handleSubmit(e) {
    e.preventDefault();
    const post = { title, description, price, location, willDeliver };
    const token = localStorage.getItem("token");
    const newlyCreatedPost = await createNewPost(post, token);
    console.log(newlyCreatedPost);
  }
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  function handlePriceChange(e) {
    setPrice(e.target.value);
  }
  function handleLocationChange(e) {
    setLocation(e.target.value);
  }
  function handleWillDeliverChange(e) {
    setWillDeliver(e.target.value);
  }

  console.log(title);
  return (
    <form id="addPost" onSubmit={handleSubmit}>
      <label>
        Title:
        <input id="title" onChange={handleTitleChange} defaultValue={title} />
      </label>
      <label>
        Description:
        <input
          id="description"
          onChange={handleDescriptionChange}
          defaultValue={description}
        />
      </label>
      <label>
        Price:
        <input id="price" onChange={handlePriceChange} defaultValue={price} />
      </label>
      <label>
        Location:
        <input
          id="location"
          onChange={handleLocationChange}
          defaultValue={location}
        />
      </label>
      <label>
        Will Deliver:
        <input
          id="willDeliver"
          onChange={handleWillDeliverChange}
          defaultValue={willDeliver}
        />
      </label>
      {/* <input id="description" defaultValue={formDetails.description} />
      <input id="price" defaultValue={formDetails.price} />
      <input id="location" defaultValue={formDetails.location} /> */}
      <button type="submit">Add New Post</button>
    </form>
  );
};

export default CreateNewPost;
