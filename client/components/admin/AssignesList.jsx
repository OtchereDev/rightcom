import React from "react";
import Assignee from "./Assignee";

const AssigneesList = ({ assignees }) => {
  return (
    <div className="d-flex  flex-wrap">
      {assignees?.map((driver) => (
        <Assignee driver={driver} key={driver._id} />
      ))}
    </div>
  );
};

export default AssigneesList;
