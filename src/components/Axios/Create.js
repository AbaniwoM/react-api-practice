import React, { useState, useEffect } from 'react';
import axios from 'axios';

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  // GET with Axios
  useEffect(() => {
    const fetchPost = async () => {
        try {
            let response = await client.get('?_limit=10');
            setPosts(response.data);
        } catch (error)  {
            console.log(error);
        };
    };
    fetchPost();
  }, []);
  
  // Post with Axios
  const addPosts = async (title, body) => {
    try {
        let response = await client.post('?_limit=10', {
            title: title,
            body: body,
            mode: 'cors',
            userId: Math.random.toString(36).slice(2),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        setPosts((posts) => [response.data, ...posts]);
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
  
  // Delete with Axios
  const deletePost = async (id) => {
    try {
      const response = await client.delete(`${id}`, {
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
  )
}

export default Create;