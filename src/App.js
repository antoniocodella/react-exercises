import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { NewGithubUser } from "./NewGithubUser";
import { ShowGithubUser } from "./ShowGithubUser";
import { NotFound } from "./NotFound";
import { Links } from "./Links";

export function App() {
  return (
    <BrowserRouter>
      <Container
        title={
          <div>
            <h1>React Exercises</h1>
            <Links />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Welcome name="Mario" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
