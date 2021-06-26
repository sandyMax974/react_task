import React, { useState, useEffect } from "react";
import TilesDataService from "../Services/TilesData.service";
import Tile from "./Tile";
import AddTileModal from "../Components/AddTileModal";
import { Button, ButtonGroup } from "react-bootstrap";

const TilesBoard = () => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const getTilesList = async () => {
      const tilesListFromDatabase = await TilesDataService.getAllTiles();
      setTiles(tilesListFromDatabase.data);
    };
    getTilesList();
  }, []);

  // Add filter options
  return (
    <div>
      <h1>
        Tile Board
        <span style={{ float: "right" }}>
          <AddTileModal tiles={tiles} setTiles={setTiles} />
        </span>
      </h1>
      <hr />
      <ButtonGroup aria-label="tile-status-filter">
        <Button size="sm" variant="info">
          Live
        </Button>
        <Button size="sm" variant="info">
          Pending
        </Button>
        <Button size="sm" variant="info">
          Archive
        </Button>
      </ButtonGroup>{" "}
      <Button size="sm" variant="info">
        Reset
      </Button>
      <hr />
      {tiles.map((tile, index) => {
        return (
          <div key={index}>
            <Tile
              tiles={tiles}
              setTiles={setTiles}
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
