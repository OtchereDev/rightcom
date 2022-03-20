import Head from 'next/head'
import React from 'react'
import BaseLink from '../../components/BaseLink'
import CreateContractModal from '../../components/CreateContractModal'
import ContractList from '../../components/ContractList'

const Index = () => {
  return (
    <div className='container'>
        <Head>
            <title>
                RightCpom - Admin Portal
            </title>
        </Head>
        <h3 className='text-center my-4'>
            Welcome To The Admin Portal
        </h3>

        <div className='d-flex justify-content-end'>
            <button className='btn btn-success'>
                Create A Contract
            </button>
        </div>
        <CreateContractModal/>
        <ContractList/>
        <BaseLink route={"create-contract"} text={"Create a transport contract"} />
        <BaseLink route={"chae-contract"} text={"Create a transport contract"} />
        <BaseLink route={"create-contract"} text={"Create a transport contract"} />
        <BaseLink route={"create-contract"} text={"Create a transport contract"} />
    </div>
  )
}

export default Index