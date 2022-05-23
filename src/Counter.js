import React, { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  function handleIncrementCounter() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrementCounter}>Increment</button>
    </div>
  );
}
