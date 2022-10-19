import React, { useState, useEffect, useRef } from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  const audioRef = useRef(props.phonetics[0].audio);

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    (audioRef) => setClicked(false);
    if (clicked) {
      audioRef();
    } else {
      return null;
    }
  });

  return (
    <div className="Phonetic mt-4">
      <button onClick={() => setClicked}>Listen</button>

      <span className="phonetics ms-4">{props.phonetics[0].text} </span>
    </div>
  );
}
