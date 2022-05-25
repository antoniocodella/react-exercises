import React, { useState } from "react";
import { Container } from "./Container";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import { Hello } from "./Hello";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

export function App() {
  const [language, setLanguage] = useState("en");

  function handleChangeLanguage(e) {
    setLanguage(e.target.value);
  }

  return (
    <div>
      <LanguageContext.Provider value={language}>
        <Container title="React Exercises">
          <Hello />
          <GithubUserList />
          <DisplayLanguage />
        </Container>
      </LanguageContext.Provider>
    </div>
  );
}
