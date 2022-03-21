import * as moduleAlias from "module-alias"
import dotenv from "dotenv"

import 'module-alias/register';

dotenv.config()

const sourcePath = "src";

moduleAlias.addAlias({
    "@server": sourcePath,
    "@config": `${sourcePath}/config`,
    "@controllers": `${sourcePath}/controllers`,
    "@middlewares": `${sourcePath}/middlewares`,
    "@routes": `${sourcePath}/routes`,
    "@models": `${sourcePath}/models`
})

import createServer from "@config/express";
import MongoConnection from "@config/data-source"

const port = process.env.PORT || 3001

const startServer= async ()=>{
    const app = await createServer()

    await MongoConnection.initialize()

    const server = app.listen({port},()=>{
       console.log(`Server ready on http://localhost:${port}`)
    })

    const signalTraps:NodeJS.Signals[] = ["SIGTERM", "SIGINT", "SIGUSR2"]

    signalTraps.forEach((type)=>{
        process.once(type,()=>{
            console.log(`process.once ${type}`)
            server.close(()=>{
                console.log("Server closed gracefully")
            })
        })
    })
}

startServer()


