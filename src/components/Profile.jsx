import React, { useEffect, useState } from "react";
import { CreateNewPost } from "./";
import { getUserInfo, deletePost } from "../api";

const Profile = (props) => {
  const setAllPosts = props.setAllPosts
  const posts=props.posts
  const [allUserPosts, setAllUserPosts] = useState({ posts: [] });
  // const [allUserMessages, setAllUserMessages] = useState({messages:[]})

  useEffect(() => {
    const token = localStorage.getItem("token");
    async function fetchUserPosts() {
      const userPosts = await getUserInfo(token);
      console.log(userPosts);
      setAllUserPosts(userPosts.posts);
    }
    fetchUserPosts();
  }, []);

  async function handleDelete(e) {
    e.preventDefault();
    const toDelete = e.target.id;
    const token = localStorage.getItem("token");
    const deleted = await deletePost(toDelete, token);
    const userPostArray = allUserPosts.filter(post => post._id != toDelete)
    setAllUserPosts(userPostArray)

    const postArrayMinusDeletedPost = posts.filter(post => post._id != toDelete)
 setAllPosts(postArrayMinusDeletedPost)
  }
  // create useEffect for messages/ revise async function in index api
  // useEffect(() => {
  //     const token = localStorage.getItem('token')
  //     async function fetchUserMessages(){
  //         const userPosts = await getUserInfo(token);
  //         console.log(userPosts)
  //         setAllUserPosts(userPosts)
  //     } fetchUserPosts()
  // },[])

  // Need to create another map for messages such as allUserMessages.posts.messages.map(())
  console.log("all user posts", allUserPosts);
  return (
    <div>
      <h2 id="profileTxt">Welcome Back, "INSERT_USERNAME" </h2>
      <CreateNewPost
        allUserPosts={allUserPosts}
        setAllUserPosts={setAllUserPosts}
      />
      {allUserPosts.length
        ? allUserPosts.map((post) => {
          if (post.active) {
            return (
              <div key={`posts-${post._id}`}>
                <div id="post">
                  <p>
                    <b>Title: </b>
                    {post.title}
                  </p>
                  {post.author ? (
                    <p>
                      <b>Author: </b>
                      {post.author.username}
                    </p>
                  ) : null}
                  <p>
                    <b>Description: </b>
                    {post.description}
                  </p>
                  <p>
                    <b>Location: </b>
                    {post.location}
                  </p>
                  <p>
                    <b>Price: </b>
                    {post.price}
                  </p>
                </div>
                <button
                  id={post._id ? `${post._id}` : null}
                  onClick={(e) => {
                    handleDelete(e);
                  }}
                >
                  Delete Post
                </button>
                {/* <span>
                  <button
                    id={post._id ? `${post._id}` : null}
                    onClick={(e) => {
                      handleDelete(e);
                    }}
                  >
                    Edit Post
                  </button>
                </span> */}
              </div>
            );
          } else {
            return null;
          }
        })
        : null}
    </div>
  );
};

export default Profile;
