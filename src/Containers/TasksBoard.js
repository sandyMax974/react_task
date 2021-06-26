import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import TasksDataService from "../Services/Tasks.Data.Service";
import Task from "./Task";

const TasksBoard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasksList = async () => {
      const tasksListFromDatabase = await TasksDataService.getAllTasks();
      setTasks(tasksListFromDatabase.data);
    };
    getTasksList();
  }, []);

  return (
    <Carousel slide={false}>
      {/* <TaskList /> */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>
            Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla
            vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit
            libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a
            pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>
            Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla
            vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit
            libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a
            pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default TasksBoard;
