import React, { useState, useEffect } from "react";
import TilesDataService from "../Services/TilesData.service";

const TilesBoard = () => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const getTilesList = async () => {
      const tilesListFromDatabase = await TilesDataService.getAllTiles();
      setTiles(tilesListFromDatabase.data);
    };
    getTilesList();
  }, []);

  return (
    <div>
      {tiles.map((tile, index) => {
        return <p key={index}>{tile.url}</p>;
      })}
    </div>
  );
};

export default TilesBoard;
