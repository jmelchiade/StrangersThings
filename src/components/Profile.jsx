import React, { useEffect, useState } from "react";
import { CreateNewPost } from "./";
import { getUserInfo } from "../api";


const Profile = (props) => {
    const [allUserPosts, setAllUserPosts] = useState({posts:[]})
    useEffect(() => {
        const token = localStorage.getItem('token')
        async function fetchUserPosts(){
            const userPosts = await getUserInfo(token);
            console.log(userPosts)
            setAllUserPosts(userPosts)
        } fetchUserPosts()
    },[])
console.log('all user posts',allUserPosts)
return(
    <div>
         {allUserPosts.posts.length ? (
        allUserPosts.posts.map((post) => {
            return (
                <div key={`posts-${post._id}`}>
                  <div id="post">
                    <p>
                      <b>Title: </b>
                      {post.title}
                    </p>
                    <p>
                      <b>Author: </b>
                      {post.author.username}
                    </p>
                    <p>
                      <b>Description: </b>
                      {post.description}
                    </p>
                    <p>
                      <b>Location: </b>
                      {post.location}
                    </p>
                    <p>
                      <b>Price: </b>
                      {post.price}
                    </p>
                  </div>
                </div>
              ); 
        })): null }

        <h2 id="profileTxt">This is the Profile Component</h2>
        <CreateNewPost />


    </div>
)
}

export default Profile
