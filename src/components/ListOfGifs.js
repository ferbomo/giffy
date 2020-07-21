import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  const { keyword } = params;

  const [gifs, setGifs] = useState({ loading: false, results: [] });

  useEffect(
    function () {
      setGifs((actualGifs) => ({ loading: true, results: actualGifs }));
      getGifs({ keyword }).then((gifs) => {
        setGifs({ loading: false, results: gifs });
      });
    },
    [keyword]
  );

  if (gifs.loading)
    return (
      <i>
        Cargando{" "}
        <span role="img" aria-label="Cyclone">
          🌀
        </span>
      </i>
    );

  return (
    <div>
      {gifs.results.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  );
}
