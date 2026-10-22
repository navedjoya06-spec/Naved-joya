import React from "react";
import BlogCard from "./BlogCard";

function BlogList({ blogs, searchTerm }) {
  const filteredBlogs = blogs.filter((blog) => {
    const searchText = searchTerm.toLowerCase();

    return (
      blog.title.toLowerCase().includes(searchText) ||
      blog.category.toLowerCase().includes(searchText) ||
      blog.author.toLowerCase().includes(searchText)
    );
  });

  return (
    <section className="blog-section" id="articles">
      <div className="section-heading">
        <div>
          <p className="section-label">THE LATEST STORIES</p>
          <h2>Explore Articles<span>.</span></h2>
        </div>
        <p className="section-subtitle">
          Ideas, inspiration and stories for curious minds.
        </p>
      </div>

      {filteredBlogs.length > 0 ? (
        <div className="blog-grid">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h3>No articles found</h3>
          <p>Try another title, category or author.</p>
        </div>
      )}
    </section>
  );
}

export default BlogList;