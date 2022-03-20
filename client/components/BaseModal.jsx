import React from "react";
import { Modal, Button } from "react-bootstrap";

const BaseModal = ({
  show,
  handleClose,
  handleOk,
  cancelText,
  okayText,
  children,
  modalTitle,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {cancelText ?? "Close"}
        </Button>
        <Button variant="primary" onClick={handleOk}>
          {okayText ?? "Save"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BaseModal;
