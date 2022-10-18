import React from "react";

const singlePost = () => {
    <div className='box'>{`This is your Posts Component`} 
    {
            posts.length ? posts.map((post) => {
                console.log(post)
                return <div>{post.title}</div>
        }) : <div>Loading Your Posts</div>
        }
    </div>

}













export default singlePost;
