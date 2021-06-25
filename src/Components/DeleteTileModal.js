import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";
import TilesDataService from '../Services/TilesData.service';
import TileBoard from "../Containers/TilesBoard"
import App from "../App"
import ReactDOM from "react-dom";

const DeleteTileModal = ({ tiles, setTiles, tileId }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleDeletion = async (id) => {
    await TilesDataService.delete(id)
    setShow(false);
    // setTiles(tiles.filter((tile) => tile.id !== tileId))
    setState()
  }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>If you delete this tile, all associated tasks will be delete.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="danger" onClick={() => handleDeletion(tileId)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteTileModal;
