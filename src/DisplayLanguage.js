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
          return <div>{greeting[language].ciao}</div>;
        }}
      </LanguageContext.Consumer>
    );
  }
}
