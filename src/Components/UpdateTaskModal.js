import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import TaskUpdateForm from "./TaskUpdateForm";

const UpdateTaskModal = ({ task, tasks, setTasks }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-secondary" size="sm" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update task details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskUpdateForm task={task} />
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

export default UpdateTaskModal;
