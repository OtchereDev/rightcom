import React from "react";
import BaseModal from "./BaseModal";

const AwardContractModal = ({ name, showModal, setShowModal }) => {
  const handleClose = () => setShowModal(()=>false);

  return (
    <BaseModal
      okayText={"Award Contract"}
      cancelText={"No, cancel"}
      show={showModal}
      handleClose={handleClose}
      modalTitle={"Award Contract"}
    >
      <p>Are you sure you want to award the contract to {name}</p>
    </BaseModal>
  );
};

export default AwardContractModal;
