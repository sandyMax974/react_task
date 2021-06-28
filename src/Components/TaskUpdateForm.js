import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import TasksDataService from "../Services/Tasks.Data.Service";

const TaskUpdateForm = (props) => {
  const [title, setTitle] = useState(props.task.task.title);
  const [order, setOrder] = useState(props.task.task.order);
  const [description, setDescription] = useState(props.task.task.description);
  const [type, setType] = useState(props.task.task.type);
  const [tile, setTile] = useState(props.task.task.tile);

  console.log("update task form", props.task.task);
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
    <Form onSubmit={() => handleSubmit(props.task.task.id)}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          type="text"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Order</Form.Label>
        <Form.Control
          name="order"
          type="text"
          defaultValue={order}
          onChange={(e) => setOrder(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          type="text"
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Type</Form.Label>
        <Form.Control
          name="type"
          type="text"
          defaultValue={type}
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
