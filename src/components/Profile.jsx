import React, { useEffect, useState } from "react";
import { CreateNewPost } from "./";
import { getUserInfo, deletePost } from "../api";

const Profile = (props) => {
  const setAllPosts = props.setAllPosts;
  const posts = props.posts;
  const [content, setContent] = useState("") 
  const [allUserPosts, setAllUserPosts] = useState({ posts: [] });
  const [allUserMessages, setAllUserMessages] = useState({ messages: [] });



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
    const userPostArray = allUserPosts.filter((post) => post._id != toDelete);
    setAllUserPosts(userPostArray);

    const postArrayMinusDeletedPost = posts.filter(
      (post) => post._id != toDelete
    );
    setAllPosts(postArrayMinusDeletedPost);
  }


  console.log("all user posts", allUserPosts);
  return (
    <div>
      <h2 id="profileTxt">Welcome to Your Profile</h2>
      <CreateNewPost
        allUserPosts={allUserPosts}
        setAllUserPosts={setAllUserPosts}
      />
      {allUserPosts.length
        ? allUserPosts.map((post) => {
            console.log(post);
            if (post.active) {
              return (
                <div key={`posts-${post._id}`}>


                  <div id="allPostBlock">
                  <div>
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
         
                  <div id="editDeleteBtn">
                  <button className="deleteBtnPage"
                    id={post._id ? `${post._id}` : null}
                    onClick={(e) => {
                      handleDelete(e);
                    }}
                  >
                    Delete Post
                  </button>
                  <span>
                    <button className="editBtnPage"
                      id={post._id ? `${post._id}` : null}
                      onClick={(e) => {
                        handleEdit(e);
                      }}
                    >
                
                      Edit Post
                    </button>
                  </span>
</div>
                  
                  <div>
                    {post.messages.length
                      ? post.messages.map((message) => {
                          return <p id="userMessages" key= {message._id}>{message.content}</p>;
                        })
                      : null}
                  </div>
                  </div>
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
