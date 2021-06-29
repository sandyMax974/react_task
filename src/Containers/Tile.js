import React, { Component } from "react";
import DeleteTileModal from "../Components/DeleteTileModal";
import UpdateTileModal from "../Components/UpdateTileModal";
import NewTaskModal from "../Components/NewTaskModal";
import TasksBoard from "./TasksBoard";
import { Card, Badge } from "react-bootstrap";

class Tile extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   tasks: [],
    // };
  }

  // getTasksList = async () => {
  //   const tasksListFromDatabase = await TasksDataService.getAllTasks(
  //     this.props.tile.id
  //   );
  //   this.setState({ tasks: tasksListFromDatabase.data });
  // };

  // componentDidMount = () => {
  //   this.getTasksList();
  // };

  // shouldComponentUpdate = () => {
  //   this.getTasksList();
  //   return true;
  // };

  render() {
    // console.log(this.props);
    return (
      <Card>
        <Card.Header>
          <h4>
            <div style={{ float: "left" }}>
              <Badge variant="dark">#{this.props.tile.id}</Badge>
            </div>
            <div style={{ float: "right" }}>
              <Badge variant="secondary">
                {this.props.tile.status.toUpperCase()}
              </Badge>{" "}
              <Badge variant="secondary">{this.props.tile.launchDate}</Badge>
            </div>
          </h4>
        </Card.Header>
        <TasksBoard
          tasks={this.props.tasks}
          getAllData={this.props.getAllData}
        />
        <Card.Footer className="text-muted">
          <NewTaskModal props={this.props} />{" "}
          <UpdateTileModal props={this.props} />{" "}
          <DeleteTileModal props={this.props} />
        </Card.Footer>
      </Card>
    );
  }
}

export default Tile;
