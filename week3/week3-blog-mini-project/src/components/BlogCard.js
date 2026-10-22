import React from "react";

function BlogCard({ blog }) {
  return (
    <article className="blog-card">
      <div className="blog-image-wrapper">
        <img
          src={blog.image}
          alt={blog.title}
          className="blog-image"
        />
        <span className="blog-category">{blog.category}</span>
      </div>

      <div className="blog-content">
        <p className="blog-meta">
          {blog.date} <span>•</span> {blog.readTime}
        </p>

        <h2>{blog.title}</h2>

        <p className="blog-description">
          {blog.description}
        </p>

        <div className="blog-card-footer">
          <span className="blog-author">By {blog.author}</span>
          <a href="#articles" className="read-more">
            Read Article ↗
          </a>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;