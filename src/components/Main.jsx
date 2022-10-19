import React, {useState} from "react";
import { Navbar } from "./";
import Posts from "./Posts";
import Register from "./Register";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  const [islogin, SetLogin] = useState(false)
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
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="posts" element={<Posts />} />
        <Route path="login" element={<Login />} />


      </Routes>
    </div>
  );
};

export default Main;
