import React, { Component } from "react";
import TasksDataService from "../Services/Tasks.Data.Service";
import { Carousel, Badge } from "react-bootstrap";
import DeleteTaskModal from "../Components/DeleteTaskModal";
import UpdateTaskModal from "../Components/UpdateTaskModal";

export default class TasksBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isFetching: false,
    };
  }

  getTasksList = async () => {
    this.setState({ ...this.props, isFetching: true });
    const tasksListFromDatabase = await TasksDataService.getAllTasks(
      this.props.tile.tile.id
    );
    this.setState({ tasks: tasksListFromDatabase.data, isFetching: false });
  };

  componentDidMount = () => {
    this.getTasksList();
  };

  render() {
    console.log("TaskBoard render");
    return (
      <>
        <Carousel interval={null}>
          {this.state.tasks &&
            this.state.tasks.map((task, index) => {
              {
                if (task) {
                  return (
                    <Carousel.Item key={`task-${index}`}>
                      <img
                        className="d-block w-100"
                        src="https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg"
                        alt={`${index} slide`}
                      />
                      <Carousel.Caption>
                        <div style={{ marginBottom: "1em" }}>
                          <UpdateTaskModal task={task} />{" "}
                          <DeleteTaskModal
                            task={task}
                            getTasksList={this.getTasksList}
                          />
                        </div>
                        <h5>{task.title}</h5>
                        <div style={{ margin: "1em" }}>{task.description}</div>
                        <div>
                          <Badge variant="secondary">#{task.order}</Badge>{" "}
                          <Badge variant="secondary">{task.type}</Badge>
                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                }
                // else {
                //   return (
                //     <Carousel.Item key={`task-${index}`}>
                //       <img
                //         className="d-block w-100"
                //         src="https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg"
                //         alt={`${index} slide`}
                //       />
                //       <Carousel.Caption>
                //         <h5>There is no tasks for this tile yet</h5>
                //       </Carousel.Caption>
                //     </Carousel.Item>
                //   );
                // }
              }
            })}
        </Carousel>
      </>
    );
  }
}
