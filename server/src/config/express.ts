import routeNotFoundMiddleware from "@middlewares/routeNotFoundMiddleware"
import errorHandler from "@middlewares/errorMiddleware"
import cors from "cors"
import express from "express"
import AdminRouter from "@routes/adminRoutes"
import DriverRoutes from "@routes/driverRoutes"


const createServer = (): express.Application =>{
    const app = express()

    // middlewares
    app.use(cors())
    app.use(express.json())


    // routes goes here
    app.use(AdminRouter)
    app.use(DriverRoutes)

    // route not found 
    app.use(routeNotFoundMiddleware)


    // error handle route middleware
    app.use(errorHandler)

    return app
}

export default createServer