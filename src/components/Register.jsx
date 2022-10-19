import React from "react";
import { registerUser } from "../api";



const Register = (props) => {
    async function handleSubmit(event) {
        event.preventDefault()
        const username = event.target[0].value
        const password = event.target[1].value
        const registeredUser = await registerUser(username, password)
        const token = registeredUser.token
        localStorage.removeItem('token')
        localStorage.setItem('token', token)
    }
  return (
    <div className="box">
      {`Register:`}
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




export default Register;