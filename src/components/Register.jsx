import React from "react";
import { registerUser } from "../api";

const Register = (props) => {
  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const registeredUser = await registerUser(username, password);
    const token = registeredUser.token;
    props.SetLogin(true);
    localStorage.removeItem("token");
    localStorage.setItem("token", token);
    localStorage.removeItem("username");
    localStorage.setItem("username", username);
  }
  return (
    <div>
      <div id="regHeader">Register</div>
      <div className="regForm">
        <form onSubmit={handleSubmit}>
          <label id="userRegForm" htmlFor="username">
            Username:{" "}
          </label>
          <input id="username" type="text" required />
          <label id="passRegForm" htmlFor="password">
            Password:{" "}
          </label>
          <input id="password" type="password" />
          <button id="subBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
