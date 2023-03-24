import React, { useState, useEffect } from 'react';

const FetchApi = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        setPosts(data);
    })
    .catch((err) => {
        console.log(err.message);
    });
  }, []);
  return (
    <div className="post-container">
       {posts.map((post) => {
          return (
            <div className="post-card" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button className="post-btn">Delete</button>
            </div>
          )
       })}
    </div>
  );
}

export default FetchApi;