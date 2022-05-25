import { useCounter } from "./useCounter";

export function Counter({ initialValue = 0 }) {
  const { count, onDecrement, onIncrement, onReset } = useCounter(initialValue);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
