import React, { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap";
import TilesDataService from "../Services/TilesData.service";

const TileUpdateForm = ({tileId}) => {
  const [date, setDate] = useState("")
  const [status, setStatus] = useState("")

  const getTileData = async (id) => {
    const tileData = await TilesDataService.getTile(id);
    setDate(tileData.data.launchDate);
    setStatus(tileData.data.status);
  }
  getTileData(tileId);

  const handleSubmit = () => {
      
  }

  return (
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label>Launch Date</Form.Label>
      <Form.Control name="date"type="date" value={date} onChange={setDate} />
    </Form.Group>

    <Form.Group>
      <Form.Label>Status</Form.Label>
      <Form.Control name="status" as="select" value={status} onChange={setStatus} >
        <option>-- Choose an option --</option>
        <option value="pending">Pending</option>
        <option value="archive">Archive</option>
        <option value="live">Live</option>
      </Form.Control>
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
  </Form>
  )
}

export default TileUpdateForm
