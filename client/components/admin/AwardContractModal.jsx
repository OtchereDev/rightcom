import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import adminApiService from "../../api/adminServices";
import { ErrorContext } from "../../context/ErrorContext";
import BaseModal from "../shared/BaseModal";

const AwardContractModal = ({
  name,
  showModal,
  setShowModal,
  driverId,
  setResult,
}) => {
  const handleClose = () => setShowModal(() => false);
  const [loading, setLoading] = useState(false);

  const { setShowError, setErrorMessage, setType } = useContext(ErrorContext);

  const router = useRouter();
  const { id: contractId } = router.query;

  const handleOkay = async () => {
    setLoading(() => true);
    const result = await adminApiService.awardContract(contractId, driverId);
    setLoading(() => false);

    if (result.status == 200) {
      setType(() => "success");
      setErrorMessage(() => result?.message ?? "Successfull");

      setResult((prevData) => ({
        ...prevData,
        assignedApplicants: [...prevData.assignedApplicants, result?.data],
      }));
    } else {
      setType(() => "danger");
      setErrorMessage(() => result?.message ?? "Error");
    }

    setShowError(() => true);

    setShowModal(() => false);
  };

  return (
    <BaseModal
      okayText={"Award Contract"}
      cancelText={"No, cancel"}
      show={showModal}
      handleClose={handleClose}
      modalTitle={"Award Contract"}
      handleOk={handleOkay}
      loading={loading}
    >
      <p>Are you sure you want to award the contract to {name}</p>
    </BaseModal>
  );
};

export default AwardContractModal;
