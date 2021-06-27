import React from "react";
import { Carousel } from "react-bootstrap";

const TasksBoard = ({ tasks }) => {
  return (
    <Carousel>
      {tasks.map((task, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              // className="d-block w-100"
              src="https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg"
              alt={`${index} slide`}
            />
            <Carousel.Caption>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default TasksBoard;
