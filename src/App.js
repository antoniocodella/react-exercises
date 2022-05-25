import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { NewGithubUser } from "./NewGithubUser";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <Container title="React Exercises">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome name="Mario" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
