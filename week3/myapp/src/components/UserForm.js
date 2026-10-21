import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="form-layout">
      <div className="form-fields">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter name" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter email" />
      </div>
      <aside className="live-preview" aria-live="polite">
        <h3>Live Preview</h3>
        <p>Name: {name || "Not entered yet"}</p>
        <p>Email: {email || "Not entered yet"}</p>
      </aside>
    </div>
  );
}

export default UserForm;
