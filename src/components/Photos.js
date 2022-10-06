import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Photos(props) {
  let [photos, setPhotos] = useState(null);

  const pexelsApiKey =
    "563492ad6f917000010000014e76e8617cae4b06b896f69e9b0a4a8e";
  const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${props.keyword}&per_page=1`;
  const headers = { Authorisation: `Bearer ${pexelsApiKey}` };

  function handlePhotos(response) {
    setPhotos(response.data.photos);
  }

  useEffect(() => {
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePhotos);
  }, [props.keyword, pexelsApiUrl]);

  if (photos) {
    return (
      <section>
        <div className="Photos row">
          {photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <img src={photo.src.tiny} alt={props.keyword} />
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
