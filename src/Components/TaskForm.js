import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import TasksDataService from "../Services/Tasks.Data.Service";

const TaskForm = (props) => {
  const [title, setTitle] = useState("");
  const [order, setOrder] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async (tileId) => {
    await TasksDataService.createTask(title, order, description, type, tileId);
  };
  console.log(props);
  return (
    <Form onSubmit={() => handleSubmit(props.props.props.tile.id)}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Order</Form.Label>
        <Form.Control
          name="order"
          type="text"
          onChange={(e) => setOrder(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Type</Form.Label>
        <Form.Control
          name="type"
          type="text"
          onChange={(e) => setType(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TaskForm;
