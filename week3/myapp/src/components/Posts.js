import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Posts load nahi ho paaye. Please try again.");
        const data = await response.json();
        setPosts(data.slice(0, 10));
      } catch (requestError) {
        if (requestError.name !== "AbortError") setError(requestError.message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    fetchPosts();
    return () => controller.abort();
  }, []);

  if (loading) return <p className="status">Loading posts...</p>;
  if (error) return <p className="status error">{error}</p>;

  return (
    <div className="posts-list">
      {posts.map((post) => (
        <article className="post-card" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}

export default Posts;
