function Greeting({ name, topic }) {
  return (
    <article className="greeting-card">
      <h3>Hello, {name}!</h3>
      <p>You are learning {topic} today.</p>
    </article>
  );
}

export default Greeting;
