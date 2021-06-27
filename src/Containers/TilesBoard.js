import React, { useState, useEffect } from "react";
import TilesDataService from "../Services/TilesData.service";
import Tile from "./Tile";
import AddTileModal from "../Components/AddTileModal";
import { Button, ButtonGroup, Container, Row, Col } from "react-bootstrap";

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
  // const getFilterTileList = async (status) => {
  //   const filteredTileList = await TilesDataService.getTileByStatus(status);
  //   setTiles(filteredTileList.data);
  // };

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
        <Button
          size="sm"
          variant="info"
          // onClick={() => getFilterTileList("live")}
        >
          Live
        </Button>
        <Button
          size="sm"
          variant="info"
          // onClick={() => getFilterTileList("pending")}
        >
          Pending
        </Button>
        <Button
          size="sm"
          variant="info"
          // onClick={() => getFilterTileList("archive")}
        >
          Archive
        </Button>
      </ButtonGroup>{" "}
      <Button size="sm" variant="info">
        Reset
      </Button>
      <hr />
      <Container>
        <Row className="show-grid">
          {tiles.map((tile, index) => {
            return (
              // <div key={index}>
              <Col key={index} md={6}>
                <Tile
                  tiles={tiles}
                  setTiles={setTiles}
                  tileId={tile.id}
                  tileStatus={tile.status}
                  tileLaunchDate={tile.launchDate}
                />
                <hr />
              </Col>
              // </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default TilesBoard;
