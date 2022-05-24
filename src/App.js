import React, { useState } from "react";
import { Container } from "./Container";
import { GithubUser } from "./GithubUser";
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
      <select value={language} onChange={handleChangeLanguage}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
      </select>
      <LanguageContext.Provider value={language}>
        <Container title="React Exercises">
          <Hello />
          <GithubUser username="antoniocodella" />
          <DisplayLanguage />
        </Container>
      </LanguageContext.Provider>
    </div>
  );
}
