import React from "react";
import { Alert } from "react-bootstrap";

const ErrorComponent = ({ show, handleClose, message, type = "danger" }) => {
  if (show) {
    return (
      <Alert
        className="m-2 p-1"
        variant={type}
        onClose={handleClose}
        dismissible
      >
        <p>{message}</p>
      </Alert>
    );
  }
  return null;
};

export default ErrorComponent;
