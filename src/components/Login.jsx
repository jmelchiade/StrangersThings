import React from "react";
import { loginUser } from "../api";



const Login = (props) => {
    async function handleSubmit(event) {
        event.preventDefault()
        const username = event.target[0].value
        const password = event.target[1].value
        const loggedInUser = await loginUser(username, password)
        const token = loggedInUser.token
        localStorage.removeItem('token')
        localStorage.setItem('token', token)
    }
  return (
    <div className="loginForm">
      {`Login:`}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" >Username: </label>
        <input id="username" type="text" required />
        <label htmlFor="password" >Password: </label>
        <input id="password" type='password' />
        <button type="submit">Submit</button> 
      </form>
    </div>
  );
};




export default Login;