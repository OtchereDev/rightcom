import React, { useContext, useState } from "react";
import BaseModal from "../shared/BaseModal";
import { Form } from "react-bootstrap";
import adminApiService from "../../api/adminServices";
import { ErrorContext } from "../../context/ErrorContext";

const CreateContractModal = ({ showModal, setShowModal, setItems }) => {
  const [deliveryCity, setDeliveryCity] = useState("");
  const [pickupCity, setPickupCity] = useState("");
  const [weight, setWeight] = useState("");
  const [recipientContact, setRecipientContact] = useState("");
  const [deliveryCost, setDeliveryCost] = useState("");

  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const { setShowError, setErrorMessage, setType } = useContext(ErrorContext);

  const handleOkay = async () => {
    if (pickupCity.length <= 0) {
      return setFormError("Pickup Address cannot be empty");
    } else if (deliveryCity.length <= 0) {
      return setFormError("Delivery Address cannot be empty");
    } else if (
      !/^[0-9]*$/.test(recipientContact) ||
      !(recipientContact.length == 10)
    ) {
      return setFormError("Provide a valid phone number");
    } else if (weight <= 0) {
      return setFormError("Weight cannot be less than or equal to zero");
    } else if (deliveryCost <= 0) {
      return setFormError("Delivery cost cannot be less than or equal to zero");
    }

    setFormError(() => "");
    const contract = {
      deliveryCity,
      pickupCity,
      weight,
      recipientContact,
      deliveryCost,
    };
    setLoading(() => true);
    const result = await adminApiService.createContract(contract);

    if (result.status == 200) {
      setType(() => "success");
      setErrorMessage(() => result?.message ?? "Successfull");

      setItems((prevData) => [result?.contract, ...prevData]);

      setDeliveryCity(() => "");
      setPickupCity(() => "");
      setWeight(() => "");
      setRecipientContact(() => "");
      setDeliveryCost(() => "");
    } else {
      setType(() => "danger");
      setErrorMessage(() => result?.message ?? "Error");
    }

    setShowError(() => true);

    setShowModal(() => false);
    setLoading(() => false);
  };

  const handleClose = () => {
    setShowModal(() => false);
  };

  return (
    <BaseModal
      handleClose={handleClose}
      show={showModal}
      modalTitle={"Create a transport contract"}
      loading={loading}
      handleOk={handleOkay}
    >
      <Form>
        {formError?.length > 0 && <p className="text-danger">{formError}</p>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Pickup Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the pickup address"
            value={pickupCity}
            onChange={(e) => setPickupCity(() => e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Delivery Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the delivery address"
            value={deliveryCity}
            onChange={(e) => setDeliveryCity(() => e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Recipient Contact</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the recipient contact"
            value={recipientContact}
            onChange={(e) => setRecipientContact(() => e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter the item weight"
            value={weight}
            onChange={(e) => setWeight(() => e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Delivery Cost</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter the delivery cost"
            value={deliveryCost}
            onChange={(e) => setDeliveryCost(() => e.target.value)}
          />
        </Form.Group>
      </Form>
    </BaseModal>
  );
};

export default CreateContractModal;
