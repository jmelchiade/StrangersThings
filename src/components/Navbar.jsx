import React from "react";
import Login from "./Login";
import Register from "./Register";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <h1>insert logo or img </h1>
      <NavLink to="login">Login</NavLink>
      {/* login to be up upon page load */}
      <NavLink to="register">Register</NavLink>
      {/* set to only show after selected to "Create account" with a link */}
      <NavLink to="posts">Posts</NavLink>
      <NavLink to="posts">Profile</NavLink>
      {/* set to show only after successfully logged in */}

      {/* <Login />
      <Register /> */}
    </div>
  );
};

export default Navbar;
