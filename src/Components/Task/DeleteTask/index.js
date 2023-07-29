import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteTask({ handleDelete, task }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleConfirm() {
    handleDelete(task?.id);
    handleClose();
  }

  return (
    <>
      <Button
        style={{ marginLeft: "20px" }}
        onClick={handleShow}
        variant="danger"
      >
        Delete
      </Button>

      <Modal
        style={{ marginTop: "90px" }}
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteTask;
