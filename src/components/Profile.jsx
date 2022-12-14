import React, { useEffect, useState } from "react";
import { CreateNewPost } from "./";
import { getUserInfo, deletePost } from "../api";

const Profile = (props) => {
  const setAllPosts = props.setAllPosts;
  const posts = props.posts;
  const [allUserPosts, setAllUserPosts] = useState({ posts: [] });
  const [currentUserName, setCurrentUserName] = useState("");

  const userLoggedIn = props.userLoggedIn;
  const messages = props.userLoggedIn.messages;
  const username = props.userLoggedIn.username;
  console.log(userLoggedIn, "checking log in");

  useEffect(() => {
    const token = localStorage.getItem("token");
    async function fetchUserPosts() {
      const userPosts = await getUserInfo(token);
      console.log(userPosts);
      setCurrentUserName(userPosts.username);
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
      <h2 id="profileTxt">{`Welcome ${currentUserName}`}</h2>

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
                          {currentUserName}
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

                    <span id="editDeleteBtn">
                      <button
                        className="deleteBtnPage"
                        id={post._id ? `${post._id}` : null}
                        onClick={(e) => {
                          handleDelete(e);
                        }}
                      >
                        Delete Post
                      </button>

                      <button
                        className="editBtnPage"
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
                          return (
                            <div>
                              <h3 id="message-header">Received Messages</h3>
                              <div id="userMessages" key={message._id}>
                                {message.content}
                              </div>
                            </div>
                          );
                        })
                      : null}
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
