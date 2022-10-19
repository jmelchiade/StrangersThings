import React from "react";

const SinglePost = (props) => {
    const posts = props.posts
    return(
    <div className='box'>{`This is your Posts Component`} 
    {
            posts.length ? posts.map((post) => {
                console.log(post)
                return <div>{post.title}</div>
        }) : <div>Loading Your Posts</div>
        }
    </div>

)}




export default SinglePost;
