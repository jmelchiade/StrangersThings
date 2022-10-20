import React, { useState } from "react";

const CreateNewPost = (props) => {
  const [title, setTitle] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }
  function handleTitleChange(e) {
    console.log(e.target.value);
    setTitle(e.target.value);
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
        <input id="description" onChange={handleTitleChange} defaultValue={title} />
      </label>
      <label>
        title:
        <input id="title" onChange={handleTitleChange} defaultValue={title} />
      </label>
      {/* <input id="description" defaultValue={formDetails.description} />
      <input id="price" defaultValue={formDetails.price} />
      <input id="location" defaultValue={formDetails.location} /> */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateNewPost;
