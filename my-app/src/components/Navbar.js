import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Use Link component for the brand */}
          <h4 className="navbar-brand">Command Center</h4>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Use Link component for navigation links */}
            <li className="nav-item">
              <Link href="/Home">
                <button className="nav-link active" type="button">
                  Home
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/lfg">
                <button className="nav-link active" type="button">
                  LFG
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <button className="nav-link active" type="button">
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
