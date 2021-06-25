import React, { useState, useEffect } from "react";
import TilesDataService from "../Services/TilesData.service";
import Tile from "../Components/Tile";
import AddTileModal from "../Components/AddTileModal";
import {} from "react-bootstrap";

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
      <h1>
        Tile Board
        <span style={{ float: "right" }}>
          <AddTileModal tiles={tiles} setTiles={setTiles}/>
        </span>
      </h1>
      <hr />
      {tiles.map((tile, index) => {
        return (
          <div key={index}>
            <Tile
              tileId={tile.id}
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
