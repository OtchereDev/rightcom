import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import AwardContractModal from "./AwardContractModal";

const DriverApplicant = ({driver}) => {
  

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Card style={{ width: "25rem" }} className="m-1">
        <Card.Body>
          <Card.Title>{driver.fullName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Mobile Phone : {driver.mobilePhone}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            License Number : {driver.driverLicenseNumber}
          </Card.Subtitle>
          <Card.Text>{driver.vehicleDetail}</Card.Text>
          <Button onClick={()=>setShowModal(()=> true)} variant="success">Award Contract</Button>
        </Card.Body>
      </Card>
      <AwardContractModal name={driver.fullName} showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default DriverApplicant;
