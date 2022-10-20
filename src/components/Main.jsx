import React, { useState } from "react";
import { Navbar, PostDetails } from "./";
import Posts from "./Posts";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile"
import { Routes, Route } from "react-router-dom";
import Logo from "./Logo";



const Main = () => {
  // const [islogin, SetLogin] = useState(false)
  // useEffect(() => {
  //   async function fetchPosts() {
  //     const allPosts = await getPosts();
  //     setAllPosts(allPosts);
  //   }
  //   fetchPosts();
  // }, []);

  return (
    <div id="main">
      <Navbar />
      <Logo />
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="posts" element={<Posts />}>
        <Route path="details/:id" element={<PostDetails/>}></Route>
      </Route>
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Main;
