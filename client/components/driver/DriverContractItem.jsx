import React, { useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import ApplyContractModal from "./ApplyContractModal";

const DriverContractItem = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Card style={{ width: "25rem" }} className="m-1">
        <Card.Body>
          <h5>
            <Badge bg="primary" pill>
              {data.status}
            </Badge>
          </h5>
          <Card.Subtitle className="mb-2 ">
            Pickup Address: {data.pickupCity}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 ">
            Delivery Address: {data.deliveryCity}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 ">Weight: {data.weight}</Card.Subtitle>
          <Card.Subtitle className="mb-2 ">
            Delivery cost: GHS {data.deliveryCost}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 ">
            Recipient Contact : {data.recipientContact}
          </Card.Subtitle>

          <Button onClick={() => setShowModal(() => true)} variant="secondary">
            Apply For Contract
          </Button>
        </Card.Body>
      </Card>

      <ApplyContractModal
        contractId={data._id}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default DriverContractItem;
