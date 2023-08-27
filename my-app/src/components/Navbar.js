import React from 'react';
import Link from 'next/link';
import '/src/pages/css/style.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
        {/* Use Link component for the brand */}
        <h4 className="navbar-brand text-dark">Command Center</h4>
        <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Use Link component for navigation links */}
            <li className="nav-item">
              <Link href="/Home">
                <button className="btn btn-warning me-2 text-dark">
                  Home
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/lfg">
                <button className="btn btn-warning me-2 text-dark">
                  LFG
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <button className="btn btn-warning me-2 text-dark">
                  About Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
