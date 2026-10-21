
import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "350px",
        border: "1px solid #ddd",
        borderRadius: "12px"
      }}
    >
      <h2>Counter App</h2>

      <h1>Counter: {count}</h1>

      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: "10px 25px", margin: "5px" }}
      >
        +
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ padding: "10px 25px", margin: "5px" }}
      >
        -
      </button>
    </div>
  );
}

export default CounterApp;
