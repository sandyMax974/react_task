import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import TileUpdateForm from "./TileUpdateForm";
import TilesDataService from "../Services/TilesData.service";

const UpdateTileModal = ({ tileId }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   const [date, setDate] = useState("")
  //   const [status, setStatus] = useState("")

  // const handleShow = () => {
  //   const getTileData = async (id) => {
  //     const tileData = await TilesDataService.getTile(id);
  //     setDate(tileData.data.launchDate);
  //     setStatus(tileData.data.status);
  //   }
  //   setShow(true);
  //   getTileData(tileId);
  // }

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update tile details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TileUpdateForm tileId={tileId} /> {/* date={date} status={status} */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateTileModal;
