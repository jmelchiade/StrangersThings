import React, { useEffect, useState } from "react";
import { CreateNewPost } from "./";
import { getUserInfo } from "../api";


const Profile = (props) => {
    const [allUserPosts, setAllUserPosts] = useState([])
    useEffect(() => {
        const token = localStorage.getItem('token')
        async function fetchUserPosts(){
            const userPosts = await getUserInfo(token, setAllUserPosts);
            console.log(userPosts)
            // setAllUserPosts(userPosts)
        } fetchUserPosts()
    },[])
console.log(allUserPosts)
return(
    <div>
        <h2 id="profileTxt">This is the Profile Component</h2>
        <CreateNewPost />


    </div>
)
}

export default Profile
