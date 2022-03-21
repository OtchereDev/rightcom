import React, { useContext, useState } from "react";
import adminApiService from "../../api/adminServices";
import { ErrorContext } from "../../context/ErrorContext";
import { statusChanger } from "../../utils/statusChanger";
import BaseModal from "../shared/BaseModal";

const TakenModal = ({ showState, setShowState, contractId, setItems }) => {
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
      adminApiService.markAsTaken,
      "TAKEN"
    );
  };

  return (
    <BaseModal
      show={showState}
      okayText={"Change"}
      modalTitle={"Mark Contract as Taken"}
      handleClose={handleClose}
      loading={loading}
      handleOk={handleOkay}
    >
      <p>Are you sure you want to make this contract as taken?</p>
    </BaseModal>
  );
};

export default TakenModal;
