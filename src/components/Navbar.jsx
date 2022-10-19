import React from "react";
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {
  return (
    <div id="navbar">
      <h1>Stranger's Things</h1>
      <Login />
      <Register />
    </div>
  );
};

export default Navbar;
