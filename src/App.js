import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Container } from "./Container";

export function App() {
  return (
    <Container title="React Exercises">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome name="Mario" />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
