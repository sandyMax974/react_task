import React, { useState, useEffect } from "react";
import TilesDataService from "../Services/TilesData.service";
import Tile from "../Components/Tile";
import { Container, Row, Col } from "react-bootstrap";

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
      <h1>Tile Board</h1>
      {tiles.map((tile, index) => {
        return (
          <div key={index}>
            <Tile
              tileUrl={tile.url}
              tileStatus={tile.status}
              tileLaunchDate={tile.launchDate}
            />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default TilesBoard;
