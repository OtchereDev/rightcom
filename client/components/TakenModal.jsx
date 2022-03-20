import React, { useState } from "react";
import BaseModal from "./BaseModal";

const TakenModal = ({ showState, setShowState, contractId }) => {
  const handleClose = () => {
    setShowState(() => !showState);
  };
  return (
    <BaseModal
      show={showState}
      okayText={"Change"}
      modalTitle={"Mark Contract as Taken"}
      handleClose={handleClose}
    >
      <p>Are you sure you want to make this contract as taken?</p>
    </BaseModal>
  );
};

export default TakenModal;
