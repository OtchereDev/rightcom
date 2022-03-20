import { Request,Response,NextFunction } from "express"

const errorHandler = (
    error: any,
    _req: Request,
    res: Response,
    _next: NextFunction
)=>{

    res.status( error.status || 500).send({
        status: error.status || 500,
        message: error.message
    })
}

export default errorHandler