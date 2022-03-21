import Link from "next/link";
import React, { useState } from "react";
import { ListGroup, Badge, Dropdown } from "react-bootstrap";
import ChangeStatusModal from "./ChangeStatusModal";
import TakenModal from "./TakenModal";

const ContractListitem = ({ data, setItems }) => {
  const [takenModalShow, setTakenModalShow] = useState(false);
  const [changeStatusModalShow, setChangeStatusModalShow] = useState(false);
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start mb-4"
    >
      <div className="ms-2 me-auto">
        <p>Pickup Address: {data.pickupCity}</p>
        <p>Delivery Address: {data.deliveryCity}</p>

        <p>Weight: {data.weight}</p>

        <p>Delivery cost: GHS {data.deliveryCost}</p>

        <p>Recipient Contact : {data.recipientContact}</p>
        <h5>
          <Badge bg="primary" pill>
            {data.status}
          </Badge>
        </h5>

        <Link href={`/admin/${data._id}` ?? "/admin/agsgdgdhd"}>
          <a>View Details</a>
        </Link>
      </div>
      <TakenModal
        showState={takenModalShow}
        setShowState={setTakenModalShow}
        contractId={data?._id}
        setItems={setItems}
      />
      <ChangeStatusModal
        showState={changeStatusModalShow}
        setShowState={setChangeStatusModalShow}
        contractId={data?._id}
        setItems={setItems}
      />
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Actions
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setTakenModalShow(() => true)}>
            Mark as Taken
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setChangeStatusModalShow(() => true)}>
            Change Status
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ListGroup.Item>
  );
};

export default ContractListitem;
