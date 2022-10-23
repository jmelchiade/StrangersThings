import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { updatePost, deletePost, sendMessage } from "../api";

const PostDetails = (props) => {
  console.log(
    "I am a banana, can I not delete this right now I think it's funny"
  );
  const { id } = useParams();
  const [content, setContent] = useState("")
  const post = props.filterPosts(id)[0];
  const [formDetails, setFormDetails] = useState({
    title: "",
    author: "",
    description: "",
    price: "",
    location: "",
    willDeliver: true,
  });
  useEffect(() => {
    post
      ? setFormDetails({
          title: post.title,
          author: post.username,
          description: post.description,
          price: post.price,
          location: post.location,
        })
      : null;
  }, []);

  async function handleMessage(e){
    e.preventDefault()
    
    const token =localStorage.getItem('token')
    const message = await sendMessage(post._id,token,content)
   console.log(message)
  }

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
          <div className="detailsBox">
            <p>
              <div>
                <b>Title: </b>
                {post.title}{" "}
              </div>
              <div>
                <b>Author: </b>
                {post.username}{" "}
              </div>
              <div>
                <b>Description: </b>
                {post.description}{" "}
              </div>
              <div>
                <b>Price: </b>
                {post.price}{" "}
              </div>
              <div>
                <b>Location: </b>
                {post.location}{" "}
              </div>
              <div>
                <b>Will Deliver: </b>
                {post.willDeliver}{" "}
              </div>
            </p>
            <div><form  onSubmit={handleMessage}>
    <input id="messageForm"
       className="input"
       type="text"
       name="name"
       placeholder="Write message to Post Author"
        onChange={(e) => setContent(e.target.value)}
     ></input>
<button id="sendMessageBtn">Send Message</button>
</form></div>
            <Link to={"/posts"}>
              <button id="goBackBtn">Go Back</button>
            </Link>
          </div>
        </>
      ) : (
        <div>Loading your post details...</div>
      )}
    </>
  );
};

export default PostDetails;
