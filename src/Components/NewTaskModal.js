import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import TaskForm from "./TaskForm";

const NewTaskModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter new task details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskForm tile={props} />
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

export default NewTaskModal;
