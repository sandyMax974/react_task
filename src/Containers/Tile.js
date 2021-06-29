import React from "react";
import DeleteTileModal from "../Components/DeleteTileModal";
import UpdateTileModal from "../Components/UpdateTileModal";
import NewTaskModal from "../Components/NewTaskModal";
import TasksBoard from "./TasksBoard";
import { Card, Badge } from "react-bootstrap";

const Tile = (props) => {
  return (
    <Card>
      <Card.Header>
        <h4>
          <div style={{ float: "left" }}>
            <Badge variant="dark">#{props.tile.id}</Badge>
          </div>
          <div style={{ float: "right" }}>
            <Badge variant="secondary">{props.tile.status.toUpperCase()}</Badge>{" "}
            <Badge variant="secondary">{props.tile.launchDate}</Badge>
          </div>
        </h4>
      </Card.Header>
      <TasksBoard tasks={props.tasks} getAllData={props.getAllData} />
      <Card.Footer className="text-muted">
        <NewTaskModal props={props} /> <UpdateTileModal props={props} />{" "}
        <DeleteTileModal props={props} />
      </Card.Footer>
    </Card>
  );
};

export default Tile;
