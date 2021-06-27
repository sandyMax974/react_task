import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import TilesDataService from "../Services/TilesData.service";

const DeleteTileModal = ({ tiles, setTiles, tile }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeletion = async (id) => {
    await TilesDataService.deleteTile(id);
    setShow(false);
    setTiles(tiles.filter((tile) => tile.id !== id));
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          If you delete this tile, all associated tasks will be delete.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="danger" onClick={() => handleDeletion(tile.id)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteTileModal;
