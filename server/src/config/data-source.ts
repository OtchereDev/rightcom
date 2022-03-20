import "reflect-metadata"
import { DataSource } from "typeorm"
import Driver from "@models/Driver"
import TransportContract from "@models/TransportContract"

const AppDataSource = new DataSource({
    type: "mongodb",
    database: process.env.DB,
    synchronize: true,
    logging: false,
    entities: [
        Driver,
        TransportContract
    ],
    migrations: [],
    subscribers: [],
})

export const TransportContractRepo = AppDataSource.getMongoRepository(TransportContract)

export const DriverRepo = AppDataSource.getMongoRepository(Driver)

export default AppDataSource
