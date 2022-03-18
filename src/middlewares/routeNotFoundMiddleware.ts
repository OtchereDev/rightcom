import { Request,Response,NextFunction } from "express"
import * as createError from "http-errors"

const routeNotFoundMiddleware = (
    _req: Request,
    _res: Response,
    next: NextFunction
)=>{

//    const error: any = new Error("Not Found")

//     error.status = 404

//     next(error)

    next(createError.NotFound())
}

export default routeNotFoundMiddleware