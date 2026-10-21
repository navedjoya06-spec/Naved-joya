import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-panel">
      <p className="count-value" aria-live="polite">Counter: {count}</p>
      <div className="button-row">
        <button type="button" onClick={() => setCount((current) => current - 1)}>−</button>
        <button type="button" onClick={() => setCount((current) => current + 1)}>+</button>
      </div>
    </div>
  );
}

export default CounterApp;
