import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <h3 className="mb-2">{props.meaning.partOfSpeech}</h3>
      <div className="Synonym-box">
        {props.meaning.synonyms.map(function (synonym, index) {
          return (
            <ul className="Synonyms">
              <li key={index}> {synonym}</li>
            </ul>
          );
        })}
      </div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition mt-4"> {definition.definition}</div>

            <div className="example">{definition.example}</div>
          </div>
        );
      })}
    </div>
  );
}
