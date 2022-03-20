import React from 'react'
import DriverApplicant from './DriverApplicant'


const DriverApplicatList = () => {
  const driver = {
    fullName: "Oliver Otchere",
    mobilePhone: "9383533333",
    vehicleDetail: "A pickup car",
    driverLicenseNumber: "779383533333343",
  };
  return (
    <div className='d-flex  flex-wrap'>
        <DriverApplicant driver={driver}/>
        <DriverApplicant driver={driver} />
        <DriverApplicant driver={driver} />
    </div>
  )
}

export default DriverApplicatList