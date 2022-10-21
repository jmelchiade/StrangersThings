import React from "react";
import Login from "./Login";
import Register from "./Register";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div id="navbar">
      <div>
        <img
          src="https://i.pinimg.com/originals/b0/81/48/b08148b16c37f13fc7fb43d5a8aea45e.jpg"
          alt="Dustin Henderson"
          id="picture"
        ></img>
      </div>
      <NavLink id="navLogin" to="login">
        Login
      </NavLink>
      {/* login to be up upon page load */}
      <NavLink id="navReg" to="register">
        Register
      </NavLink>
      {/* set to only show after selected to "Create account" with a link */}
      <NavLink id="navPosts" to="posts">
        Posts
      </NavLink>
      <NavLink id="navProfile" to="profile">
        Profile
      </NavLink>
      {props.isLogin ? (
        <button
          onClick={() => {
            props.SetLogin(false);
            localStorage.removeItem('token');
          }}
        >
          Log Out
        </button>
      ) : null}
      {/* set to show only after successfully logged in */}
    </div>
  );
};

export default Navbar;
