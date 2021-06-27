import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import TasksDataService from "../Services/Tasks.Data.Service";

const TaskForm = ({ tileId }) => {
  const [title, setTitle] = useState("");
  const [order, setOrder] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async (tileId) => {
    await TasksDataService.createTask(title, order, description, type, tileId);
  };

  return (
    <Form onSubmit={() => handleSubmit(tileId)}>
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

      {/* <Form.Group>
        <Form.Label>Status</Form.Label>
        <Form.Control
          name="status"
          as="select"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">-- Choose an option --</option>
          <option value="pending">Pending</option>
          <option value="archive">Archive</option>
          <option value="live">Live</option>
        </Form.Control>
      </Form.Group> */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TaskForm;
