import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="blog-logo">
          <span className="logo-icon">B.</span>
          <span>THE DAILY BLOG</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#articles">Articles</a>
          <a href="#about">About</a>
        </div>

        <a href="#articles" className="nav-button">
          Explore Blogs ↗
        </a>
      </div>
    </nav>
  );
}

export default Navbar;