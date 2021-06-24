import React from "react";
import { Card, Button } from "react-bootstrap";

const Tile = ({ tileUrl, tileStatus, tileLaunchDate }) => {
  return (
    <Card>
      <Card.Header>
        Tile #{tileUrl[tileUrl.length - 1]} | Status: {tileStatus} |{" "}
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
      </Card.Footer>
    </Card>
  );
};

export default Tile;
