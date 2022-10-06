import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic mt-4">
      <span>
        {" "}
        <a href={props.phonetics[0].audio} target="_blank" rel="noreferrer">
          Listen
        </a>{" "}
      </span>

      <span className="phonetics ms-4">{props.phonetics[0].text} </span>
    </div>
  );
}
