import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import TasksDataService from "../Services/Tasks.Data.Service";

const TaskUpdateForm = (props) => {
  const [title, setTitle] = useState("");
  const [order, setOrder] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [tile, setTile] = useState(props.task.tile);

  const handleSubmit = async (id) => {
    const data = {
      title: title,
      order: order,
      description: description,
      type: type,
      tile: tile,
    };
    await TasksDataService.updateTask(id, data);
  };

  return (
    <Form onSubmit={() => handleSubmit(props.task.id)}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          type="text"
          defaultValue={props.task.title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Order</Form.Label>
        <Form.Control
          name="order"
          type="text"
          defaultValue={props.task.order}
          onChange={(e) => setOrder(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          type="text"
          defaultValue={props.task.description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Type</Form.Label>
        <Form.Control
          name="type"
          type="text"
          defaultValue={props.task.type}
          onChange={(e) => setType(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TaskUpdateForm;
