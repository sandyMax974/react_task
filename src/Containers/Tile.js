import React, { useState, useEffect } from "react";
import TasksDataService from "../Services/Tasks.Data.Service";
import DeleteTileModal from "../Components/DeleteTileModal";
import UpdateTileModal from "../Components/UpdateTileModal";
import NewTaskModal from "../Components/NewTaskModal";
import TasksBoard from "./TasksBoard";
import { Card, Badge } from "react-bootstrap";

const Tile = ({ setTiles, tiles, tileId, tileStatus, tileLaunchDate }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasksList = async () => {
      const tasksListFromDatabase = await TasksDataService.getAllTasks(tileId); // need to filter the GET request here
      setTasks(tasksListFromDatabase.data);
    };
    getTasksList();
  }, []);

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
      <TasksBoard tileId={tileId} tasks={tasks} />
      <Card.Footer className="text-muted">
        <NewTaskModal tileId={tileId} tiles={tiles} setTiles={setTiles} />{" "}
        <UpdateTileModal tileId={tileId} tiles={tiles} setTiles={setTiles} />{" "}
        <DeleteTileModal tileId={tileId} tiles={tiles} setTiles={setTiles} />
      </Card.Footer>
    </Card>
  );
};

export default Tile;
