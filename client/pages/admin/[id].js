import React from "react";
import { Badge } from "react-bootstrap";
import Pagination from "../../components/BasePagination";
import DriverApplicatList from "../../components/DriverApplicatList";

const Index = () => {
    const data ={
        "pickupCity":"Aaa",
        "deliveryCity":"Aaa",
        "weight": 100,
        "deliveryCost": 100,
        "recipientContact": "0543063691",
        status: "OPEN"
    }
  return (
    <div>
      <h3 className="text-center my-3">Contract Details</h3>
      <div className="container">
        <h5>
          <Badge bg="primary" pill>
            {data.status}
          </Badge>
        </h5>
        <p>Pickup Address: {data.pickupCity}</p>
        <p>Delivery Address: {data.deliveryCity}</p>

        <p>Weight: {data.weight}</p>

        <p>Delivery cost: GHS {data.deliveryCost}</p>

        <p>Recipient Contact : {data.recipientContact}</p>

        <div className="mt-4">
            <h4>
                Applicants:
            </h4>
            
            <DriverApplicatList/>

            <Pagination pageCount={4} pageIndex={1} setPageIndex={()=>console.log("hello")} />
        </div>
      </div>


    </div>
  );
};

export default Index;
