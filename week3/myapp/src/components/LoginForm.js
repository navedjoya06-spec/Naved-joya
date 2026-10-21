import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const cleanName = username.trim();
    if (!cleanName) {
      setMessage("Please username enter karo.");
      return;
    }
    setUsername(cleanName);
    setMessage("");
    setIsLoggedIn(true);
  }

  if (isLoggedIn) {
    return (
      <div className="login-success" aria-live="polite">
        <h3>Welcome, {username}!</h3>
        <button type="button" onClick={() => setIsLoggedIn(false)}>Logout</button>
      </div>
    );
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter username" />
      {message && <p className="field-error">{message}</p>}
      <button type="submit">Login</button>
      <p className="login-help">Please login to continue.</p>
    </form>
  );
}

export default LoginForm;
