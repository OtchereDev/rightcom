import * as moduleAlias from "module-alias"
import dotenv from "dotenv"
import createServer from "@config/express";

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


const port = process.env.PORT || 3000

const startServer= async ()=>{
    const app = await createServer()

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


