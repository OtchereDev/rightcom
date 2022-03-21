import Head from "next/head";
import React, { useState } from "react";
import CreateContractModal from "../../components/admin/CreateContractModal";
import ContractList from "../../components/admin/ContractList";
import driverApiService from "../../api/driverServices";

const Index = ({ result }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [items, setItems] = useState(result.data ?? [])

  return (
    <div className="container">
      <Head>
        <title>RightCom - Admin Portal</title>
      </Head>
      <h3 className="text-center my-4">Welcome To The Admin Portal</h3>

      <div className="d-flex justify-content-end">
        <button
          onClick={() => setShowCreateModal(() => true)}
          className="btn btn-success"
        >
          Create A Contract
        </button>
      </div>
      <CreateContractModal
        showModal={showCreateModal}
        setShowModal={setShowCreateModal}
        setItems={setItems}
      />
      {result?.status == 200 && <ContractList items={items} setItems={setItems} />}
    </div>
  );
};

export const getServerSideProps = async () => {
  const result = await driverApiService.getAllContracts();
  return {
    props: { result },
  };
};

export default Index;
