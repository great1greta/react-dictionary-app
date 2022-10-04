import React from "react";

export default function Phonetic(props) {
  console.log(props);
  return (
    <div className="Phonetic">
      <a href={props.phonetics[0].audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <br />
      {props.phonetics[0].text}
    </div>
  );
}
