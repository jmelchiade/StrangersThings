import React, { useState } from "react";

const CreateNewPost = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState("");




  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }
  function handleTitleChange(e) {
    console.log(e.target.value);
    setTitle(e.target.value);
  }
  function handleDescriptionChange(e) {
    console.log(e.target.value);
    setDescription(e.target.value);
  }
  function handlePriceChange(e) {
    console.log(e.target.value);
    setPrice(e.target.value);
  }
  function handleLocationChange(e) {
    console.log(e.target.value);
    setLocation(e.target.value);
  }
  function handleWillDeliverChange(e) {
    console.log(e.target.value);
    setWillDeliver(e.target.value);
  }

  console.log(title);
  return (
    <form onSubmit={handleSubmit}>
      <label>
        title:
        <input id="title" onChange={handleTitleChange} defaultValue={title} />
      </label>
      <label>
        Description:
        <input id="description" onChange={handleDescriptionChange} defaultValue={description} />
      </label>
      <label>
        Price:
        <input id="price" onChange={handlePriceChange} defaultValue={price} />
      </label>
      <label>
        Location:
        <input id="location" onChange={handleLocationChange} defaultValue={location} />
      </label>
      <label>
        Will Deliver:
        <input id="willDeliver" onChange={handleWillDeliverChange} defaultValue={willDeliver} />
      </label>
      {/* <input id="description" defaultValue={formDetails.description} />
      <input id="price" defaultValue={formDetails.price} />
      <input id="location" defaultValue={formDetails.location} /> */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateNewPost;
