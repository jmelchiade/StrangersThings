import React from "react";
import Login from "./Login";
import Register from "./Register";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div id="navbar">
      <div>
        <img src="bike.png" alt="Bike Logo" id="navPicture"></img>
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
          id="logOut"
          onClick={() => {
            props.SetLogin(false);
            localStorage.removeItem("token");
          }}
        >
          Log Out
        </button>
      ) : null}
    </div>
  );
};

export default Navbar;
