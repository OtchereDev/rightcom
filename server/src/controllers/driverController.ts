import { TransportContractRepo } from '@server/config/data-source';
import Driver from '@server/models/Driver';
import { DriverSchema, MongoIdSchema } from '@server/utils/validateSchema';
import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import { ObjectId } from 'mongodb';

export const applyForContract = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validateId = MongoIdSchema.validate(req.params);

    if (validateId.error) {
      throw createError.BadRequest(
        'Please provide a valid transport contract id',
      );
    }

    const data: Driver = req.body;

    const validateDriver = DriverSchema.validate(req.body);

    if (validateDriver.error) {
      throw createError.BadRequest(validateDriver.error.message);
    }

    const contract = await TransportContractRepo.findOneBy({
      _id: new ObjectId(req.params.id) 
    });

    if (!contract) {
      throw createError.BadRequest(
        `Transport contract with id ${req.params.id} does not exit`,
      );
    }

    const driver = new Driver(
      new ObjectId(),
      data.fullName,
      data.mobilePhone,
      data.vehicleDetail,
      data.driverLicenseNumber,
    )

    await TransportContractRepo.findOneAndUpdate({ _id: new ObjectId(req.params.id)}, {
      $push:{
        applicants: driver
      }
    })

    res.status(200).json({
      message: 'Successfully applied for contract',
    });

    return;
  } catch (error) {
    next(error);
  }
};

export const getAllContracts = async (_req: Request, res: Response) => {
  const contracts = await TransportContractRepo.find({
    order: { createdAt: 'DESC' },
  });

  res.status(200).json({
    message: 'Successfully fetched',
    data: contracts,
  });
  return;
};
