import React, { useContext, useState } from "react";
import BaseModal from "../shared/BaseModal";
import { Form } from "react-bootstrap";
import { statusChanger } from "../../utils/statusChanger";
import { ErrorContext } from "../../context/ErrorContext";
import adminApiService from "../../api/adminServices";

const ChangeStatusModal = ({
  showState,
  setShowState,
  contractId,
  setItems,
}) => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setShowState(() => !showState);
  };

  const { setShowError, setErrorMessage, setType } = useContext(ErrorContext);

  const handleOkay = async () => {
    await statusChanger(
      setLoading,
      setType,
      setErrorMessage,
      setItems,
      setShowError,
      setShowState,
      contractId,
      adminApiService.changeStatus,
      status
    );
  };

  return (
    <BaseModal
      show={showState}
      okayText={"Change"}
      modalTitle={"Mark Contract as Taken"}
      handleClose={handleClose}
      handleOk={handleOkay}
      loading={loading}
    >
      <p>Change the status of the contract below</p>
      <Form.Select
        onChange={(e) => setStatus(e.target.value)}
        aria-label="Default select example"
      >
        <option>Select status of the contract </option>
        <option selected={status == "OPEN"} value="OPEN">
          Open
        </option>
        <option selected={status == "TAKEN"} value="TAKEN">
          Closed
        </option>
        <option selected={status == "CLOSED"} value="CLOSED">
          Taken
        </option>
      </Form.Select>
    </BaseModal>
  );
};

export default ChangeStatusModal;
