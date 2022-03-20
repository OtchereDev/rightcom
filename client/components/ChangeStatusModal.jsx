import React, { useState } from "react";
import BaseModal from "./BaseModal";
import {Form} from "react-bootstrap"

const ChangeStatusModal = ({ showState, setShowState, contractId }) => {
  const handleClose = () => {
    setShowState(() => !showState);
  };

  const [status, setStatus] = useState("")
  
  return (
    <BaseModal
      show={showState}
      okayText={"Change"}
      modalTitle={"Mark Contract as Taken"}
      handleClose={handleClose}
    >
      <p>Change the status of the contract below</p>
      <Form.Select onChange={e=>setStatus(e.target.valaue)}  aria-label="Default select example">
        <option>Select status of the contract </option>
        <option selected={status == "OPEN"} value="OPEN">Open</option>
        <option selected={status == "TAKEN"} value="TAKEN">Closed</option>
        <option selected={status == "CLOSED"} value="CLOSED">Taken</option>
      </Form.Select>
    </BaseModal>
  );
};

export default ChangeStatusModal;
