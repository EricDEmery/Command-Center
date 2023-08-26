import React, { useState, useEffect } from 'react';
import axios from 'axios';
import request from "../services/api.request";
import { useGlobalState } from '../context/GlobalState.js';
import Link from "next/link";
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


const LFG = () => {
  const { state } = useGlobalState();
  const { user } = state;
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState('');

  let userId = '';
  if (user) {
    userId = user.user_id;
  }

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://8000-ericdemery-commandcente-zcd9qh1wx6l.ws-us104.gitpod.io/api/posts/');
      // headers: {
      //   Authorization: `Bearer ${accessToken}`
      // }
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async (e) => {
    e.preventDefault();
    e.target.reset();
    try {
      await request({
        url: '/posts/',
        method: 'POST',
        data: { content: newPostText, author: userId }
      });

      fetchPosts();
      setNewPostText('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  return (
    <>
    <Navbar />
    <div className="container mt-5">
      <h1 className="text-center">Looking for Gamers</h1>
      {/* Create a Post form */}
      <div className="row">
        {/* Other form components */}
        <form onSubmit={createPost}>
          {/* Post content input */}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
              placeholder="Enter your post..."
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit Post</button>
        </form>
      </div>
      {/* Display posts */}
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <h2>Posts</h2>
          {posts.map(post => (
            <div className="card mb-3" key={post.id}>
              <div className="card-body">
                <p className="card-text">{post.content}</p>
                <p className="card-text">{post.epic_id}</p> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};


export default LFG;
