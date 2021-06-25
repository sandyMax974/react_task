import React from "react";
import DeleteTileModal from "./DeleteTileModal"
import UpdateTileModal from "./UpdateTileModal";
import { Card, Button } from "react-bootstrap";

const Tile = ({ setTiles, tiles, tileId, tileStatus, tileLaunchDate }) => {
  return (
    <Card>
      <Card.Header>
        Tile #{tileId} | Status: {tileStatus} |{" "}
        {tileLaunchDate}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          This is where the caroussel with the tasks will be
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <UpdateTileModal  tileId={tileId} tiles={tiles} setTiles={setTiles}/>{" "}
        <DeleteTileModal tileId={tileId} tiles={tiles} setTiles={setTiles}/>
      </Card.Footer>
    </Card>
  );
};

export default Tile;
