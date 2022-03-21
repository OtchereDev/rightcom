import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import adminApiService from "../../api/adminServices";
import AssigneesList from "../../components/admin/AssignesList";
import DriverApplicatList from "../../components/admin/DriverApplicatList";

const Index = ({ data }) => {
  const [result, setResult] = useState({ ...data });
  return (
    <div>
      <h3 className="text-center my-3">Contract Details</h3>
      <div className="container">
        <h5>
          <Badge bg="primary" pill>
            {result.status}
          </Badge>
        </h5>
        <p>Pickup Address: {result.pickupCity}</p>
        <p>Delivery Address: {result.deliveryCity}</p>

        <p>Weight: {result.weight}</p>

        <p>Delivery cost: GHS {result.deliveryCost}</p>

        <p>Recipient Contact : {result.recipientContact}</p>

        <div className="mt-4">
          <h4>Applicants:</h4>

          {result?.applicants?.length > 0 ? (
            <DriverApplicatList setResult={setResult} applicants={result.applicants} />
          ) : (
            <p>No applicants yet</p>
          )}

        </div>

        <div className="mt-4">
          <h4>Assignes:</h4>

          {result?.assignedApplicants?.length > 0 ? (
            <AssigneesList assignees={result.assignedApplicants} />
          ) : (
            <p>No Assignes yet</p>
          )}

        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ req, query }) => {
  const result = await adminApiService.getDrivers(query?.id);

  if (result.status == 200) {
    return {
      props: {
        data: result.data,
      },
    };
  }

  return {
    notFound: true,
  };
};

export default Index;
