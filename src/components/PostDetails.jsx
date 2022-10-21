import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { updatePost, deletePost } from "../api";

const PostDetails = (props) => {
  console.log(
    "I am a banana, can I not delete this right now I think it's funny"
  );
  const { id } = useParams();
  const post = props.filterPosts(id)[0];
  const [formDetails, setFormDetails] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    willDeliver: true,
  });
  useEffect(() => {
    post
      ? setFormDetails({
          title: post.title,
          description: post.description,
          price: post.price,
          location: post.location,
        })
      : null;
  }, []);
  function handleChange(e) {
    e.preventDefault();
    const toUpdate = e.target.id;
    const update = e.target.value;
    const updatedForm = { ...formDetails, [toUpdate]: update };
    setFormDetails(updatedForm);
  }
  async function handleDelete(e) {
    e.preventDefault();
    const toDelete = e.target.id;
    const token = localStorage.getItem("token");
    const deleted = await deletePost(toDelete, token);
    return deleted;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    const updatedPost = await updatePost(
      formDetails,
      post._id,
      localStorage.getItem("token")
    );
    console.log(updatedPost);
  }
  return (
    <>
      {post ? (
        <>
          <div className="box">
            <div>{post.title} </div>
            <div>{post.description} </div>
            <div>{post.price} </div>
            <div>{post.location} </div>
            <label htmlFor="will-deliver">Will Deliver</label>
            <Link to={"/posts"}>
              <button>Go Back</button>
            </Link>
          </div>
          <div className="box">
            {/* instead of a form here we could just have another component */}
            <form onChange={handleChange} onSubmit={handleSubmit}>
              <input id="title" defaultValue={formDetails.title} />
              <input id="description" defaultValue={formDetails.description} />
              <input id="price" defaultValue={formDetails.price} />
              <input id="location" defaultValue={formDetails.location} />
              <button type="submit">Submit</button>
            </form>
            {/* <button
              id={post._id ? `${post._id}` : null}
              onClick={(e) => {
                handleDelete(e);
              }}
            >
              Delete Post
            </button> */}
          </div>
        </>
      ) : (
        <div>Loading your post details...</div>
      )}
    </>
  );
};

export default PostDetails;
