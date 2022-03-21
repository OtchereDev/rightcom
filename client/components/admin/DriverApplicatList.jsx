import React from "react";
import DriverApplicant from "./DriverApplicant";

const DriverApplicatList = ({ applicants, setResult }) => {
  return (
    <div className="d-flex  flex-wrap">
      {applicants?.map((driver) => (
        <DriverApplicant
          setResult={setResult}
          driver={driver}
          key={driver._id}
        />
      ))}
    </div>
  );
};

export default DriverApplicatList;
