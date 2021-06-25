import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";
import TileUpdateForm from "./TileUpdateForm"
// import TilesDataService from "../Services/TilesData.service";

const UpdateTileModal = ({tileId}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleShow = (id) => {    
  //   const getTileData = async (id) => {
  //     const tileDataFromDatabase = await TilesDataService.getTile(id);
  //     console.log(tileDataFromDatabase)
  //   };
  //   setShow(true);
  //   getTileData();
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
        <TileUpdateForm tileId={tileId}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default UpdateTileModal
