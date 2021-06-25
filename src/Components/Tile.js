import React from "react";
import DeleteTileModal from "./DeleteTileModal"
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
        <Button variant="primary">Update</Button>{" "}
        <DeleteTileModal tileId={tileId} tiles={tiles} settiles={setTiles}/>
      </Card.Footer>
    </Card>
  );
};

export default Tile;
