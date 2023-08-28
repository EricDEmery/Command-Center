import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useGlobalState } from '../context/GlobalState.js';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router'; // Import useRouter
import authService from "../services/auth.service";
import authHeader from "../services/auth.headers"; // Import the authHeader function

const LFG = () => {
  const { state } = useGlobalState();
  const { user } = state;
  const router = useRouter(); // Get the router object
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState('');

  useEffect(() => {
    // Check if user is not authenticated and redirect to login
    if (!user) {
      router.push('/'); // Redirect to the login page
    }
  }, [user, router]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://8000-ericdemery-commandcente-zcd9qh1wx6l.ws-us104.gitpod.io/api/posts/', {
        headers: authHeader(), // Use the authHeader function here
      });
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
      const postData = {
        content: newPostText,
        author: user.user_id // Make sure this is correctly retrieved
      };
  
      await axios.post('/api/posts/', postData, {
        headers: authHeader(), // Use the authHeader function here
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
        <h1 className="text-center text-warning">Looking for Gamers</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={createPost}>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={newPostText}
                  onChange={(e) => setNewPostText(e.target.value)}
                  placeholder="Post in this thread to find new teammates..."
                />
              </div>
              <div className="row text-center mt-4">
                <div className="col">
                  <button type="submit" className="btn btn-warning">
                    Submit Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6 offset-md-3">
            <h2>Posts</h2>
            {posts.map((post) => (
              <div className="card mb-3 border border-warning bg-dark" key={post.id}>
                <div className="card-body">
                  <p className="card-text text-warning">{post.epic_id}</p>
                  <p className="card-text text-light">{post.content}</p>
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
