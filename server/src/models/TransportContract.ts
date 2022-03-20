import { ObjectId } from 'mongodb';
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';
import Driver from './Driver';

enum statusEnum {
  OPEN ,CLOSED, TAKEN
  
}


@Entity()
export default class TransportContract {
  @ObjectIdColumn()
  _id: string | ObjectId;

  @Column()
  pickupCity: string;

  @Column()
  deliveryCity: string;

  @Column()
  recipientContact: string

  @Column({
    type: 'double precision',
  })
  weight: number;

  @Column({
    type: 'double precision',
  })
  deliveryCost: number;

  @Column({
    type: 'enum',
    enum: statusEnum,
    default: "OPEN",
    nullable:false
  })
  status: string;

  @Column(() => Driver)
  applicants: Driver[];

  @Column(() => Driver,)
  assignedApplicant: Driver;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
