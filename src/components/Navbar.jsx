import React from "react";
import Login from "./Login";
import Register from "./Register";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <h1>Browse</h1>
      <NavLink to="login">Login</NavLink>
      <NavLink to="register">Register</NavLink>
      <NavLink to="posts">Posts</NavLink>

      {/* <Login />
      <Register /> */}
    </div>
  );
};

export default Navbar;
