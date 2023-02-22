import React from "react";

function MapSample() {
  let cities = ["İzmir", "İstanbul", "Diyarbakır", "Ankara"];

  return (
    <>
      <ul>
        {cities.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default MapSample;
