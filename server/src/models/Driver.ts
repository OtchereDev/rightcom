import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export default class Driver {
  constructor(
    _id: ObjectId,
    fullName: string,
    mobilePhone: string,
    vehicleDetail: string,
    driverLicenseNumber: string,
  ) {
      this._id = _id
      this.fullName = fullName
      this.mobilePhone = mobilePhone
      this.vehicleDetail = vehicleDetail
      this.driverLicenseNumber = driverLicenseNumber
  }

  @ObjectIdColumn()
  _id: string | ObjectId;

  @Column()
  fullName: string;

  @Column({ length: 10 })
  mobilePhone: string;

  @Column()
  vehicleDetail: string;

  @Column({
    length: 15,
  })
  driverLicenseNumber: string;
}
