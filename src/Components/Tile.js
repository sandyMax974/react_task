import React from "react";
import { Card, Button } from "react-bootstrap";

const Tile = ({ tileId, tileStatus, tileLaunchDate }) => {
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
        <Button variant="primary">Delete</Button>
        {/* <DeleteTileModal /> */}
      </Card.Footer>
    </Card>
  );
};

export default Tile;
