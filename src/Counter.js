import React, { useEffect, useState } from "react";

export function Counter({ initialValue = 0, onCounterChange }) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    onCounterChange(count);
  }, [count]);

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
