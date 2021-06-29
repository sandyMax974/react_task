import React from "react";
import { Carousel, Badge } from "react-bootstrap";
import DeleteTaskModal from "../Components/DeleteTaskModal";
import UpdateTaskModal from "../Components/UpdateTaskModal";

const TasksBoard = (props) => {
  // console.log(props);
  return (
    <>
      <Carousel interval={null}>
        {props.tasks &&
          props.tasks.map((task, index) => {
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
                    <DeleteTaskModal task={task} props={props} />
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
          })}
      </Carousel>
    </>
  );
};

export default TasksBoard;
