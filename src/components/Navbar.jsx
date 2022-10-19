import React from "react";
import Login from "./Login";
import Register from "./Register";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <h1>insert logo or img </h1>
      <NavLink to="login">Login</NavLink>
      <NavLink to="register">Register</NavLink>
      <NavLink to="posts">Posts</NavLink>
      <NavLink to="posts">Profile</NavLink>

      {/* <Login />
      <Register /> */}
    </div>
  );
};

export default Navbar;
