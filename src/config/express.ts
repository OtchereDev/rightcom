import routeNotFoundMiddleware from "@middlewares/routeNotFoundMiddleware"
import errorHandler from "@middlewares/errorMiddleware"
import cors from "cors"
import express from "express"


const createServer = (): express.Application =>{
    const app = express()

    // middlewares
    app.use(cors())
    app.use(express.json())


    // routes goes here

    // route not found 
    app.use(routeNotFoundMiddleware)


    // error handle route middleware
    app.use(errorHandler)

    return app
}

export default createServer