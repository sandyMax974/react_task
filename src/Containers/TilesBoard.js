import React, { useState, useEffect } from "react";

const TilesBoard = () => {
  const [tiles, setTiles] = useState([]);

  // Temporary tiles list to see result on page
  const staticTilesList = [
    {
      url: "http://localhost:8000/api/tiles/1",
      launchDate: "2021-06-25",
      status: "pending",
    },
    {
      url: "http://localhost:8000/api/tiles/2",
      launchDate: "2021-07-01",
      status: "pending",
    },
    {
      url: "http://localhost:8000/api/tiles/3",
      launchDate: "2021-05-31",
      status: "archive",
    },
  ];

  return (
    <div>
      {staticTilesList.map((tile) => {
        return <p>{tile.url}</p>;
      })}
    </div>
  );
};

export default TilesBoard;
