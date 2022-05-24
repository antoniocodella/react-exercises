import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const greeting = {
  en: { ciao: "Hello" },
  it: { ciao: "Ciao" },
};

export function DisplayLanguage() {
  const language = useContext(LanguageContext);

  return (
    <div>
      <h1>{language}</h1>
      {greeting[language].ciao}
    </div>
  );
}
