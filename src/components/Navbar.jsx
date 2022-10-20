import React from "react";
import Login from "./Login";
import Register from "./Register";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <h1>insert logo or img </h1>
      <NavLink id="navLogin" to="login">Login</NavLink>
      {/* login to be up upon page load */}
      <NavLink id="navReg" to="register">Register</NavLink>
      {/* set to only show after selected to "Create account" with a link */}
      <NavLink id="navPosts" to="posts">Posts</NavLink>
      <NavLink id="navProfile" to="profile">Profile</NavLink>
      {/* set to show only after successfully logged in */}

      {/* <Login />
      <Register /> */}
    </div>
  );
};

export default Navbar;
