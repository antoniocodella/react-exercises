import React from "react";
import { LanguageContext } from "./LanguageContext";

const greeting = {
  en: { ciao: "Hello" },
  it: { ciao: "Ciao" },
};

export class DisplayLanguage extends React.Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {(language) => {
          return (
            <div>
              <h1>{language}</h1>
              {greeting[language].ciao}
            </div>
          );
        }}
      </LanguageContext.Consumer>
    );
  }
}
