import React, { useEffect, useState } from "react";
import { CreateNewPost } from "./";


const Profile = (props) => {
    const [userPosts, setAllUserPosts] = useState([])
    useEffect(() => {
        async function fetchUserPosts(){
            const allUserPosts = await getUserInfo(token);
            setAllUserPosts(allUserPosts)
        }
    })

return(
    <div>
        <h2 id="profileTxt">This is the Profile Component</h2>
        <CreateNewPost />


    </div>
)
}

export default Profile
