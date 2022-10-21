import React, { useEffect, useState } from "react";
import { CreateNewPost } from "./";
import { getUserInfo } from "../api";


const Profile = (props) => {
    const [allUserPosts, setAllUserPosts] = useState({posts:[]})
    // const [allUserMessages, setAllUserMessages] = useState({messages:[]})

    useEffect(() => {
        const token = localStorage.getItem('token')
        async function fetchUserPosts(){
            const userPosts = await getUserInfo(token);
            console.log(userPosts)
            setAllUserPosts(userPosts)
        } fetchUserPosts()
    },[])

    // create useEffect for messages/ revise async function in index api
    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     async function fetchUserMessages(){
    //         const userPosts = await getUserInfo(token);
    //         console.log(userPosts)
    //         setAllUserPosts(userPosts)
    //     } fetchUserPosts()
    // },[])

    // Need to create another map for messages such as allUserMessages.posts.messages.map(())
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
