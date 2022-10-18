import React from "react";
import { Navbar } from "./";
import Posts from "./Posts";
import Register from "./Register";


const Main = () => {
  return (
    <div id="main">
      <Navbar />
      <Posts />
      <Register />
    </div>
  );
};

export default Main;
