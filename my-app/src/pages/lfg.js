import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useGlobalState } from '../context/GlobalState.js';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import { Container, Table } from 'react-bootstrap';
import authHeader from '../services/auth.headers';

const LFG = () => {
  const { state } = useGlobalState();
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState([]);

  const storedUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;
  const loggedInUser = storedUser || state.user;

  const user = loggedInUser;
  const userEpicId = user ? user.epic_id : null;

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://8000-ericdemery-commandcente-zcd9qh1wx6l.ws-us104.gitpod.io/api/posts/', {
        headers: authHeader(),
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
    try {
      const postData = {
        content: newPostText,
        author: user.user_id,
      };

      await axios.post('https://8000-ericdemery-commandcente-zcd9qh1wx6l.ws-us104.gitpod.io/api/create-post/', postData, {
        headers: authHeader(),
      });

      fetchPosts();
      setNewPostText('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
    e.target.reset();
  };

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

