import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { NewGithubUser } from "./NewGithubUser";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <BrowserRouter>
      <Container
        title={
          <div>
            <h1>React Exercises</h1>
            <div>
              <Link to="/">Home</Link>|<Link to="/counter">Counter</Link>|
              <Link to="/users/:username">Github User</Link>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Welcome name="Mario" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
