import React, { useEffect, useState } from "react";


const Profile = (props) => {
    const [userPosts, setAllUserPosts] = useState([])
    useEffect(() => {
        async function fetchUserPosts(){
            const allUserPosts = await getUserInfo(token);
            setAllUserPosts(allUserPosts)
        }
    })

return(
    <h2 id="profileTxt">This is the Profile Component</h2>
)
}

export default Profile
