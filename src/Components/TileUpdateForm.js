import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import TilesDataService from "../Services/TilesData.service";

const TileUpdateForm = ({ tileId }) => {
  const [launchDate, setLaunchDate] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const getTileData = async (id) => {
      const tileData = await TilesDataService.getTile(id);
      setLaunchDate(tileData.data.launchDate);
      setStatus(tileData.data.status);
    };
    getTileData(tileId);
  }, []);

  const handleSubmit = async (id) => {
    const data = { launchDate: launchDate, status: status };
    await TilesDataService.updateTile(id, data);
  };

  return (
    <Form onSubmit={() => handleSubmit(tileId)}>
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
          defaultValue={status} // come back to this
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
