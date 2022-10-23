import React from "react";
import { Link } from "react-router-dom";

const SinglePost = (props) => {


  const posts = props.posts.sort((a,b) => { 
    let date1 = new Date(a.createdAt) 
    let date2 = new Date(b.createdAt) 
    return date2.getTime() - date1.getTime()
  })

  
  return (
    <div className="box">
      {posts.length ? (
        posts.map((post) => {
          console.log(post);
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
              <Link to={`details/${post._id}`}>
                <button id="seeDetailsBtn">See Details</button>
              </Link>
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading Your Posts</div>
      )}
    </div>
  );
};

export default SinglePost;
