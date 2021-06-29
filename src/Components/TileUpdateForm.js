import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import TilesDataService from "../Services/TilesData.service";

const TileUpdateForm = (props) => {
  const [launchDate, setLaunchDate] = useState(props.props.tile.launchDate);
  const [status, setStatus] = useState(props.props.tile.status);

  const handleSubmit = async (id) => {
    const data = { launchDate: launchDate, status: status };
    await TilesDataService.updateTile(id, data);
  };

  return (
    <Form onSubmit={() => handleSubmit(props.props.tile.id)}>
      <Form.Group>
        <Form.Label>Launch Date</Form.Label>
        <Form.Control
          name="launch-date"
          type="date"
          defaultValue={launchDate}
          onChange={(e) => setLaunchDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Status</Form.Label>
        <Form.Control
          name="status"
          as="select"
          defaultValue={status}
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
