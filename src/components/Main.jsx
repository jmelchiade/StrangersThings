import React, { useState, useEffect } from "react";
import { Navbar, PostDetails } from "./";
import Posts from "./Posts";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import { Routes, Route } from "react-router-dom";
import Logo from "./Logo";
import { getPosts } from "../api";



const Main = () => {
  // const [islogin, SetLogin] = useState(false)

  const [posts, setAllPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getPosts();
      setAllPosts(allPosts);
    }
    fetchPosts();
  }, []);
  function filterPosts(postId) {
    return posts.filter((post) => {
      return post._id == postId;
    });
  }
  return (
    <div id="main">
      <Navbar />
      <Logo />
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="posts">
          <Route
            path="details/:id"
            element={<PostDetails filterPosts={filterPosts} />}
          ></Route>
          <Route path="" element={<Posts posts={posts} />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Main;
