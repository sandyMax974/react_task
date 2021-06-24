import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import TilesDataService from "../Services/TilesData.service";

const TileForm = () => {
  const [launchDate, setLaunchDate] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
    await TilesDataService.createTile(launchDate, status);
    // post method to API with form data
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Launch Date</Form.Label>
        <Form.Control
          id="date-input"
          type="date"
          onChange={(e) => setLaunchDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Status</Form.Label>
        <Form.Control
          id="status-select"
          as="select"
          onChange={(e) => setStatus(e.target[1].value)}
        >
          <option>-- Choose an option --</option>
          <option value="PENDING">Pending</option>
          <option value="ARCHIVE">Archive</option>
          <option value="LIVE">Live</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TileForm;
