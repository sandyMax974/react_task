import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import TasksDataService from "../Services/Tasks.Data.Service";

const DeleteTaskModal = ({ tasks, setTasks, task }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeletion = async (id) => {
    await TasksDataService.deleteTask(id);
    setShow(false);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <Button variant="outline-danger" size="sm" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="danger" onClick={() => handleDeletion(task.id)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteTaskModal;
