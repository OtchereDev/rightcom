import Joi from "joi"


export const TransportContractSchema = Joi.object({
    pickupCity: Joi.string().required(),
    deliveryCity: Joi.string().required(),
    weight: Joi.number().precision(2).required(),
    deliveryCost: Joi.number().precision(2).required(),
    recipientContact: Joi.string().pattern(/^[0-9]*$/).length(10).message("Provide a valid phone number").required(),
})

export const MongoIdSchema = Joi.object({
    id: Joi.string().hex().length(24).required(),
})

export const changeContractSchema = Joi.object({
    status : Joi.string().required()
})

export const DriverSchema = Joi.object({
    fullName: Joi.string().required(),
    mobilePhone: Joi.string().pattern(/^[0-9]*$/).length(10).message("Provide a valid phone number").required(),
    vehicleDetail: Joi.string().required(),
    driverLicenseNumber: Joi.string().length(15).required()
})
