import React, { useState } from "react";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const blogs = [
    {
      id: 1,
      title: "The Art of Slow Living in a Fast World",
      category: "LIFESTYLE",
      date: "Oct 18, 2026",
      readTime: "5 min read",
      author: "Aarav Sharma",
      description:
        "Discover how slowing down, embracing simplicity and being present can transform your everyday life.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      title: "Finding Inspiration in Everyday Moments",
      category: "INSPIRATION",
      date: "Oct 16, 2026",
      readTime: "4 min read",
      author: "Priya Verma",
      description:
        "Small moments often hold the biggest lessons. Learn to notice beauty in the ordinary.",
      image:
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      title: "A Beginner's Guide to Creative Thinking",
      category: "CREATIVITY",
      date: "Oct 14, 2026",
      readTime: "6 min read",
      author: "Rohan Mehta",
      description:
        "Practical ways to unlock new ideas, build creative habits and see familiar things differently.",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      title: "Building Better Habits, One Day at a Time",
      category: "PERSONAL GROWTH",
      date: "Oct 12, 2026",
      readTime: "7 min read",
      author: "Ananya Patel",
      description:
        "Forget overnight success. Build small, consistent habits that help you grow over time.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 5,
      title: "The Joy of Exploring New Places",
      category: "TRAVEL",
      date: "Oct 10, 2026",
      readTime: "5 min read",
      author: "Kabir Khan",
      description:
        "From quiet streets to beautiful landscapes, discover how travel changes your perspective.",
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 6,
      title: "Digital Wellness: Finding Your Balance",
      category: "WELLNESS",
      date: "Oct 08, 2026",
      readTime: "4 min read",
      author: "Meera Joshi",
      description:
        "Create a healthier relationship with technology and make more room for real-life moments.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div className="app" id="home">
      <Navbar />

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <span className="hero-tag">A BLOG FOR THE CURIOUS</span>

            <h1>
              Thoughts worth
              <br />
              <span>sharing.</span>
            </h1>

            <p>
              Stories, ideas and perspectives to inspire
              your everyday life. Take a moment, explore
              something new and stay curious.
            </p>

            <a href="#articles" className="hero-button">
              Discover Stories <span>↗</span>
            </a>
          </div>

          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85"
              alt="Notebook and creative writing"
            />
            <div className="hero-note">
              <span>✳</span>
              <div>
                <strong>A little inspiration</strong>
                <p>For your everyday</p>
              </div>
            </div>
          </div>
        </section>

        <section className="search-section">
          <div>
            <p className="section-label">FIND YOUR NEXT READ</p>
            <h2>What interests you?</h2>
          </div>

          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search articles, topics, authors..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </section>

        <BlogList blogs={blogs} searchTerm={searchTerm} />
      </main>

      <Footer />
    </div>
  );
}

export default App;