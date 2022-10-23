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
  const [isLogin, SetLogin] = useState(false)
  const [posts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [content, setContent] = useState("")

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
      <Navbar isLogin={isLogin} SetLogin={SetLogin}/>
      <Logo />
      <Routes>
        <Route path="register" element={<Register SetLogin={SetLogin} />} />
        <Route path="posts">
        <Route
            path="details/:id"
            element={<PostDetails setContent = {setContent} filterPosts={filterPosts} />}
          ></Route>
          <Route path="" element={<Posts posts={filteredPosts.length?filteredPosts:posts} setFilteredPosts = {setFilteredPosts}/>} />
        </Route>
        <Route path="login" element={<Login isLogin={isLogin} SetLogin={SetLogin}/>} />
        <Route path="profile" element={<Profile content={content} setContent={setContent}setAllPosts={setAllPosts} posts={posts}/>} />
      </Routes>
    </div>
  );
};

export default Main;
