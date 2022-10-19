import React from "react";
import { Navbar } from "./";
import Posts from "./Posts";
import Register from "./Register";
import Login from "./Login";

const Main = () => {
  return (
    <div id="main">
      <Navbar />
      <Posts />
    </div>
  );
};

export default Main;
