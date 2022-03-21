import React, { useContext, useState } from "react";
import BaseModal from "../shared/BaseModal";
import { Form } from "react-bootstrap";
import { ErrorContext } from "../../context/ErrorContext";
import driverApiService from "../../api/driverServices";

const ApplyContractModal = ({ showModal, setShowModal, contractId }) => {
  const [fullName, setFullName] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [vehicleDescription, setVehicleDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const { setShowError, setErrorMessage, setType } = useContext(ErrorContext);

  const handleOkay = async () => {
    if (fullName.length <= 0) {
      return setFormError("Full Name cannot be empty");
    } else if (!/^[0-9]*$/.test(mobilePhone) || !(mobilePhone.length == 10)) {
      return setFormError("Provide a valid phone number");
    } else if (licenseNumber?.length !== 15) {
      return setFormError("License Number must be 15 characters");
    } else if (vehicleDescription?.length <= 0) {
      return setFormError("Vehicle Description cannot be empty");
    }

    setFormError(() => "");
    const applicant = {
      fullName,
      mobilePhone,
      vehicleDetail: vehicleDescription,
      driverLicenseNumber: licenseNumber,
    };
    setLoading(() => true);
    const result = await driverApiService.applyForContract(
      contractId,
      applicant
    );

    if (result.status == 200) {
      setType(() => "success");
      setErrorMessage(() => result?.message ?? "Successfull");

      setFullName(() => "");
      setMobilePhone(() => "");
      setVehicleDescription(() => "");
      setLicenseNumber(() => "");
    } else {
      setType(() => "danger");
      setErrorMessage(() => result?.message ?? "Error");
    }

    setShowError(() => true);

    setShowModal(() => false);
    setLoading(() => false);
  };

  const handleClose = () => setShowModal(() => false);

  return (
    <BaseModal
      modalTitle={"Apply for contract"}
      handleClose={handleClose}
      okayText={"Apply"}
      show={showModal}
      loading={loading}
      handleOk={handleOkay}
    >
      <Form>
        {formError?.length > 0 && <p className="text-danger">{formError}</p>}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(() => e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Mobile Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your mobile phone"
            value={mobilePhone}
            onChange={(e) => setMobilePhone(() => e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Drivers License Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Drivers License Number"
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(() => e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Vehicle Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={vehicleDescription}
            onChange={(e) => setVehicleDescription(() => e.target.value)}
          />
        </Form.Group>
      </Form>
    </BaseModal>
  );
};

export default ApplyContractModal;
