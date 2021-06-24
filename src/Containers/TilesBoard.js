import React, { useState, useEffect } from "react";
import TilesDataService from "../Services/TilesData.service";
import { Card } from "react-bootstrap";

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
          <Card style={{ width: "50rem" }} key={index}>
            <Card.Header>
              Tile #{tile.url[tile.url.length - 1]} | Status: {tile.status}
            </Card.Header>
            <Card.Body>
              <Card.Text>
                This is where the caruossel with the tasks will be
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            <Card.Footer className="text-muted">{tile.launchDate}</Card.Footer>
          </Card>
        );
      })}
    </div>
  );
};

export default TilesBoard;
