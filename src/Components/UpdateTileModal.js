import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import TileUpdateForm from "./TileUpdateForm";

const UpdateTileModal = ({ tile }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <TileUpdateForm tile={tile} />
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
