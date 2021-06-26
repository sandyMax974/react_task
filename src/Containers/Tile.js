import React from "react";
import DeleteTileModal from "../Components/DeleteTileModal";
import UpdateTileModal from "../Components/UpdateTileModal";
import TasksBoard from "./TasksBoard";
import { Card, Badge } from "react-bootstrap";

const Tile = ({ setTiles, tiles, tileId, tileStatus, tileLaunchDate }) => {
  return (
    <Card>
      <Card.Header>
        <h4>
          <div style={{ float: "left" }}>
            <Badge variant="dark">#{tileId}</Badge>
          </div>
          <div style={{ float: "right" }}>
            <Badge variant="secondary">{tileStatus.toUpperCase()}</Badge>{" "}
            <Badge variant="secondary">{tileLaunchDate}</Badge>
          </div>
        </h4>
      </Card.Header>
      {/* <Card.Body> */}
      <TasksBoard />
      {/* </Card.Body> */}
      <Card.Footer className="text-muted">
        <UpdateTileModal tileId={tileId} tiles={tiles} setTiles={setTiles} />{" "}
        <DeleteTileModal tileId={tileId} tiles={tiles} setTiles={setTiles} />
      </Card.Footer>
    </Card>
  );
};

export default Tile;
