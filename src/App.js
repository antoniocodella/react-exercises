import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { Counter } from "./Counter";

export function App() {
  return (
    <Container title="React Exercises">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome name="Mario" />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
