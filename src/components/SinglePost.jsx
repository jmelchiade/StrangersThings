import React from "react";
import { Link } from "react-router-dom";

const SinglePost = (props) => {
  const posts = props.posts;
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
              </div>
              <Link to={`details/${post._id}`}>
                <button>See Details</button>
              </Link>
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
