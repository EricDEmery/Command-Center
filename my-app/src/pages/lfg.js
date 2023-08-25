import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LFG = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://8000-ericdemery-commandcente-zcd9qh1wx6l.ws-us104.gitpod.io/api/posts/');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const createPost = async () => {
    try {
      await axios.post('https://8000-ericdemery-commandcente-zcd9qh1wx6l.ws-us104.gitpod.io/api/posts/', { text: newPostText });
      fetchPosts();
      setNewPostText('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <h1>Looking for Gamers</h1>
      <div>
        <h2>Create a Post</h2>
        <textarea
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
        />
        <button onClick={createPost}>Submit Post</button>
      </div>
      <div>
        <h2>Posts</h2>
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.text}</p>
            <button>View Comments</button> {/* Add comment viewing functionality */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LFG;
