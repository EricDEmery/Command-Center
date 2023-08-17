import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <h4 className="navbar-brand" href="#">Command Center</h4>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link active" onClick={() => props.setPage("Home")} aria-current="page">Home</button>
          </li>
          <li className="nav-item">
            <button className="nav-link active" onClick={() => props.setPage("LFG")} aria-current="page">LFG</button>
          </li>
          <li className="nav-item">
            <button className="nav-link active" onClick={() => props.setPage("About Us")} aria-current="page">About Us</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  )
}