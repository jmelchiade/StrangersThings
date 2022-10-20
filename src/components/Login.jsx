import React from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";



const Login = (props) => {
  let navigate  = useNavigate()
    async function handleSubmit(event) {
        event.preventDefault()
        const username = event.target[0].value
        const password = event.target[1].value
        const loggedInUser = await loginUser(username, password)
        const token = loggedInUser.token
        localStorage.removeItem('token')
        localStorage.setItem('token', token)
        navigate('/profile')
    }


  return (
    <div><h1>Log In</h1>
    <div className="loginForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input id="username" type="text" required />
        <label htmlFor="password" >Password: </label>
        <input id="password" type='password' />
        <button id="logInBtn" type="submit">LOG IN</button> 
      </form>
    </div></div>
  );
};




export default Login;