import React from "react";
import { ListGroup, Badge } from "react-bootstrap";
import ContractListitem from "./ContractListitem";

const ContractList = () => {
  const text =
    {
      "pickupCity":"Aaa",
      "deliveryCity":"Aaa",
      "weight": 100,
      "deliveryCost": 100,
      "recipientContact": "0543063691",
      status: "OPEN"
      
  }
 
  return (
    <ListGroup as="ul" className="mt-4" >
      <ContractListitem data={text} />
      <ContractListitem data={text} />
      <ContractListitem data={text} />
      <ContractListitem data={text} />
    </ListGroup>
  );
};

export default ContractList;
