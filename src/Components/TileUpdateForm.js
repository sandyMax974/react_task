import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import TilesDataService from "../Services/TilesData.service";

const TileUpdateForm = (props) => {
  const [launchDate, setLaunchDate] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (id) => {
    const data = { launchDate: launchDate, status: status };
    await TilesDataService.updateTile(id, data); // need to check that service - issue with partial_update on the backend
  };

  console.log(props);
  return (
    <Form onSubmit={() => handleSubmit(props.props.tile.id)}>
      <Form.Group>
        <Form.Label>Launch Date</Form.Label>
        <Form.Control
          name="launch-date"
          type="date"
          defaultValue={props.props.tile.launchDate}
          onChange={(e) => setLaunchDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Status</Form.Label>
        <Form.Control
          name="status"
          as="select"
          defaultValue={props.props.tile.status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">-- Choose an option --</option>
          <option value="pending">Pending</option>
          <option value="archive">Archive</option>
          <option value="live">Live</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TileUpdateForm;
