import React from "react";
import { Carousel, Badge } from "react-bootstrap";
import DeleteTaskModal from "../Components/DeleteTaskModal";

const TasksBoard = ({ tasks, setTasks }) => {
  return (
    <Carousel>
      {tasks.map((task, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src="https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg"
              alt={`${index} slide`}
            />
            <Carousel.Caption>
              <DeleteTaskModal
                taskId={task.id}
                tasks={tasks}
                setTasks={setTasks}
              />
              <div>
                <Badge variant="secondary">{task.title}</Badge>
              </div>
              <div style={{ margin: "1em" }}>{task.description}</div>
              <div>
                <Badge variant="secondary">#{task.order}</Badge>{" "}
                <Badge variant="secondary">{task.type}</Badge>
                {task.tile}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default TasksBoard;
