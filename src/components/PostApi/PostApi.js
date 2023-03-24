import React, { useState, useEffect } from 'react';

const PostApi = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);
  
  // GET with fetch API
  useEffect(() => {
    const fetchPost = async () => {
        try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts?_limit=10'
            );
           const data = await response.json();
            console.log(data);
            setPosts(data);
        } catch (error)  {
            console.log(error);
        };
    };
    fetchPost();
  }, []);

  // Post with fetchAPI
  const addPosts = async (title, body) => {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
       method: 'POST',
       body: JSON.stringify({
          title: title,
          body: body,
          mode: 'cors',
          userId: Math.random.toString(36).slice(2),
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    });
    let data = await response.json();
    setPosts((posts) => [data, ...posts]);
    setTitle('');
    setBody('');
    } catch (error)  {
        console.log(error);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };

  //Delete with fetchAPI
  const deletePost = async (id) => {
    try {
       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
            mode: 'cors',
       });
       if (response.status === 200) {
          setPosts(
             posts.filter((post) => {
                return post.id !== id;
             })
          );
       } else {
          return;
       }
    } catch (error)  {
        console.log(error);
    };
  };

  return (
    <div className="app-container">
        <form onSubmit={handleSubmit}>
           <input type="text" className="form-control" value={title}
              onChange={(e) => setTitle(e.target.value)}
           />
           <textarea name="" className="form-control" id="" cols="10" rows="8"
              value={body} onChange={(e) => setBody(e.target.value)}
           ></textarea>
           <button type="submit">Add Post</button>
        </form>
        <div className="posts-container">
            {posts.map((post) => {
               return (
                  <div className="post-card" key={post.id}>
                     <h2 className="post-title">{post.title}</h2>
                     <p className="post-body">{post.body}</p>
                     <button className="button" onClick={() => deletePost(post.id)}>
                        Delete
                     </button>
                  </div>
               );
            })}
         </div>
    </div>
  );
};

export default PostApi;