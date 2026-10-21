
import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px"
      }}
    >
      <h2>Registration Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          display: "block",
          width: "95%",
          padding: "10px",
          marginBottom: "12px"
        }}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          display: "block",
          width: "95%",
          padding: "10px",
          marginBottom: "12px"
        }}
      />

      <h3>Live Preview:</h3>
      <p>Name: {name || "Not entered yet"}</p>
      <p>Email: {email || "Not entered yet"}</p>
    </div>
  );
}

export default UserForm;
