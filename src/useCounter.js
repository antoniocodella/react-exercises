import { useCallback, useState } from "react";

export function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const handleIncrementCounter = useCallback(function handleIncrementCounter() {
    setCount((c) => c + 1);
  }, []);

  const handleDecrementCounter = useCallback(function handleDecrementCounter() {
    setCount((c) => c - 1);
  }, []);

  const handleResetCounter = useCallback(
    function handleResetCounter() {
      setCount(initialValue);
    },
    [initialValue]
  );

  return {
    count: count,
    onIncrement: handleIncrementCounter,
    onDecrement: handleDecrementCounter,
    onReset: handleResetCounter,
  };
}
