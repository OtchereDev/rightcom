import React from "react";
import DriverContractItem from "./DriverContractItem";

const DriverContractList = ({ contracts }) => {
  return (
    <div className="d-flex flex-wrap">
      {contracts?.map((contract) => (
        <DriverContractItem data={contract} key={contract._id} />
      ))}
    </div>
  );
};

export default DriverContractList;
