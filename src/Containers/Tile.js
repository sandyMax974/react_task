import React, { useState, useEffect } from "react";
import TasksDataService from "../Services/Tasks.Data.Service";
import DeleteTileModal from "../Components/DeleteTileModal";
import UpdateTileModal from "../Components/UpdateTileModal";
import NewTaskModal from "../Components/NewTaskModal";
import TasksBoard from "./TasksBoard";
import { Card, Badge } from "react-bootstrap";

const Tile = ({ tile, setTiles, tiles }) => {
  const [tasks, setTasks] = useState([]);

  // need to split these to be more specific on what to do and when
  // mount => connect to BE and retrieve associated tasks

  // useEffect(() => {
  console.log(`taskBoard - useEffect is firing`); // this useEffect is causing an infinite loop
  const getTasksList = async () => {
    const tasksListFromDatabase = await TasksDataService.getAllTasks(tile.id);
    setTasks(tasksListFromDatabase.data);
  };
  // getTasksList();
  // });

  return (
    <Card>
      <Card.Header>
        <h4>
          <div style={{ float: "left" }}>
            <Badge variant="dark">#{tile.id}</Badge>
          </div>
          <div style={{ float: "right" }}>
            <Badge variant="secondary">{tile.status.toUpperCase()}</Badge>{" "}
            <Badge variant="secondary">{tile.launchDate}</Badge>
          </div>
        </h4>
      </Card.Header>
      <TasksBoard tasks={tasks} setTasks={setTasks} />
      <Card.Footer className="text-muted">
        <NewTaskModal tileId={tile.id} tiles={tiles} setTiles={setTiles} />{" "}
        <UpdateTileModal tile={tile} tiles={tiles} setTiles={setTiles} />{" "}
        <DeleteTileModal tile={tile} tiles={tiles} setTiles={setTiles} />
      </Card.Footer>
    </Card>
  );
};

export default Tile;
