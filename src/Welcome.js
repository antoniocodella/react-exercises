import React from "react";

export function Welcome({ name = "User" }) {
  return (
    <div>
      <p>Welcome {name}!</p>
    </div>
  );
}
