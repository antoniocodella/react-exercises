import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: { ciao: "Hello" },
  it: { ciao: "Ciao" },
};

export class DisplayLanguage extends React.Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {(language) => {
          return <div>{Strings[language].ciao}</div>;
        }}
      </LanguageContext.Consumer>
    );
  }
}
