import { useState } from "react";

export function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  function handleIncrementCounter() {
    setCount((c) => c + 1);
  }

  function handleDecrementCounter() {
    setCount((c) => c - 1);
  }

  function handleResetCounter() {
    setCount(initialValue);
  }

  return {
    count: count,
    onIncrement: handleIncrementCounter,
    onDecrement: handleDecrementCounter,
    onReset: handleResetCounter,
  };
}
