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
        props.SetLogin(true)
        localStorage.removeItem('token')
        localStorage.setItem('token', token)
        navigate('/profile')
    }


  return (
    <div><div id="logInFront">Log In</div>
    <div className="loginForm">
      <form onSubmit={handleSubmit}>
        <label id="userFront" htmlFor="username">Username: </label>
        <input id="username" type="text" required />
        <label id="passFront" htmlFor="password" >Password: </label>
        <input id="password" type='password' />
        <button id="logInBtn" type="submit">LOG IN</button> 
      </form>
      {/* link the register page to open from here "create account"
      remove register from navbar
      add log out to navbar only once logged in; brings user to posts/home page.
      add styling effect to selected and active page - have shown in navbar, i.e. color remains highlighted... */}
    </div></div>
  );
};




export default Login;