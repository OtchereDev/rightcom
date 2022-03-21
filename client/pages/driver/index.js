import Head from 'next/head'
import React, { useState } from 'react'
import driverApiService from '../../api/driverServices'
import DriverContractList from '../../components/driver/DriverContractList'


const index = ({result}) => {
  const [items, setItems] = useState(result.data ?? [])

  return (
    <div className='container'>
        <Head>
            <title>
                RightCom - Admin Portal
            </title>
        </Head>
        <h3 className='text-center my-4'>
            Welcome To The Driver Portal
        </h3>

        <DriverContractList contracts={items} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const result = await driverApiService.getAllContracts();
  return {
    props: { result },
  };
};

export default index