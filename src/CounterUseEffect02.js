import React, { useEffect, useState } from "react";

export function CounterUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(countInterval);
    };
  }, []);

  return <h1>{count}</h1>;
}
