import React from "react";
import { Card } from "react-bootstrap";

const Assignee = ({ driver }) => {
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
        </Card.Body>
      </Card>
    </>
  );
};

export default Assignee;
