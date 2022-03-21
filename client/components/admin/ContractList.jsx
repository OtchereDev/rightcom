import React from "react";
import { ListGroup } from "react-bootstrap";
import ContractListitem from "./ContractListitem";

const ContractList = ({ items, setItems }) => {
  return (
    <ListGroup as="ul" className="mt-4">
      {items?.map((item) => (
        <ContractListitem data={item} key={item._id} setItems={setItems} />
      ))}
    </ListGroup>
  );
};

export default ContractList;
