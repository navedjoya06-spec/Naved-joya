import React from "react";

function Footer() {
  return (
    <footer className="site-footer" id="about">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#home" className="blog-logo">
            <span className="logo-icon">B.</span>
            <span>THE DAILY BLOG</span>
          </a>
          <p>
            A little inspiration for your everyday life.
            Stories that inform, ideas that inspire.
          </p>
        </div>

        <div className="footer-right">
          <p>Made with passion &amp; React.</p>
          <p>© {new Date().getFullYear()} The Daily Blog</p> 
<div className="developer-credit">
  <p>
    Designed &amp; Developed by{" "}
    <strong>Naved Joya</strong>
  </p>
  <span>
    Built with <span className="heart">♥</span> using React
  </span>
</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;