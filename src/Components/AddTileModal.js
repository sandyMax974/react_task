import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import TileForm from "./TileForm";

const AddTileModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create New Tile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter new tile details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TileForm />
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

export default AddTileModal;
