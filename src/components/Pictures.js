import React, { useState } from "react";
import axios from "axios";
import "./Pictures.css";

export default function Pictures(props) {
  let [photos, setPhotos] = useState(null);

  function showPictures(response) {
    setPhotos(response.data.photos);
  }

  const apiKey = "563492ad6f917000010000014e76e8617cae4b06b896f69e9b0a4a8e";
  const apiUrl = `https://api.pexels.com/v1/search?query=${props.photoKeyword}&per_page=9`;
  const headers = { Authorization: `Bearer ${apiKey}` };
  axios.get(apiUrl, { headers: headers }).then(showPictures);

  if (photos) {
    return (
      <section className="Pictures">
        <div className="row">
          {photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.landscape} target="_blank" rel="noreferrer">
                  <img src={photo.src.medium} alt="" className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
