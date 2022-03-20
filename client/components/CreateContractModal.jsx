import React, { useState } from "react";
import BaseModal from "./BaseModal";
import { Form } from "react-bootstrap";

const CreateContractModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");
  const [weight, setWeight] = useState(0);
  const [recipientContact, setRecipientContact] = useState("");
  const [deliveryCost, setDeliveryCost] = useState(0);

  const handleClose = () => {
    setShowModal(() => false);
  };

  return (
    <BaseModal
      handleClose={handleClose}
      show={showModal}
      modalTitle={"Create a transport contract"}
    >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Pickup Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the pickup address"
            value={pickupAddress}
            onChange={(e) => setPickupAddress(() => e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Delivery Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the delivery address"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(() => e.target.value)}
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
          <Form.Label>Recipient Contact</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the recipient contact"
            value={recipientContact}
            onChange={(e) => setRecipientContact(() => e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Delivery Cost</Form.Label>
          <Form.Control
            type="text"
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
