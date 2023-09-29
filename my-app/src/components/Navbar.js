import React from 'react';
import Link from 'next/link';
import authService from '../services/auth.service';
import { useRouter } from 'next/router';
import style from "../pages/css/style.css"

export default function Navbar() {

  const router = useRouter();
  const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;

  const handleLogout = () => {
    authService.logout();
    router.push('/Home'); // Redirect to login page after logout
  };

  // hello
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
        <h4 className="navbar-brand text-dark">Command Center</h4>
        <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/Home" className="custom-link btn btn-warning me-2">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/lfg" className="custom-link btn btn-warning me-2">LFG</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="custom-link btn btn-warning me-2">About Us</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="/" role="button" id="profileDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Profile
              </Link>
              <div className="dropdown-menu bg-dark" aria-labelledby="profileDropdown">
                {user ? (
                  <>
                    <Link href="/profile" className="dropdown-item text-warning pr-5">Dashboard</Link>
                    <button className="dropdown-item text-warning" onClick={handleLogout}>Logout</button>
                  </>
                 ) : (
                  <Link href="/" className="dropdown-item text-warning">Login</Link>
                )}
          
                
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  
}
