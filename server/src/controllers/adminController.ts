import { TransportContractRepo } from '@server/config/data-source';
import TransportContract from '@server/models/TransportContract';
import {
  MongoIdSchema,
  TransportContractSchema,
} from '@server/utils/validateSchema';
import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import { ObjectId } from 'mongodb';

export const publishContract = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data: TransportContract = req.body;

    const result = TransportContractSchema.validate(data);
    if (result.error) {
      throw createError.BadRequest(result.error.message);
    }

    const newContract = new TransportContract();

    newContract.pickupCity = data.pickupCity;
    newContract.deliveryCity = data.deliveryCity;
    newContract.deliveryCost = data.deliveryCost;
    newContract.weight = data.weight;
    newContract.status = 'OPEN';
    newContract.applicants = [];
    newContract.assignedApplicant = null;
    newContract.recipientContact = data.recipientContact

    await TransportContractRepo.save(newContract);

    res.status(200).json({
      message: 'Successfully Created',
      data: newContract,
    });

    return;
  } catch (error: any) {
    next(error);
  }
};

export const changeContractStatus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const status: string[] = ['OPEN', 'CLOSED', 'TAKEN'];
    const validateId = MongoIdSchema.validate(req.params);

    if (validateId.error) {
      throw createError.BadRequest(
        'Please provide a valid transport contract id',
      );
    }

    if (!status.includes(req.body.status?.toUpperCase())) {
      throw createError.BadRequest(
        "Status can be any one of these: ['OPEN', 'CLOSED', 'TAKEN']",
      );
    }

    const contract = await TransportContractRepo.findOneBy({
      _id: new ObjectId(req.params.id),
    });

    if (!contract) {
      throw createError.BadRequest(
        `Transport contract with id ${req.params.id} does not exit`,
      );
    }

    await TransportContractRepo.findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      {
        $set: { status: req.body.status.toUpperCase() },
      },
    );

    res.status(200).json({
      message: 'Successfully update',
    });

    return;
  } catch (error) {
    next(error);
  }
};

export const contractAppliedDriver = async (
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
    const contract = await TransportContractRepo.findOneBy({
      _id: new ObjectId(req.params.id),
    });

    if (!contract) {
      throw new createError.BadRequest(
        `Transport contract with id ${req.params.id} does not exit`,
      );
    }

    res.status(200).json({
      message: 'Successfully Fetched',
      contract,
    });

    return;
  } catch (error) {
    next(error);
  }
};

export const awardContract = async (
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

    const validateBody = MongoIdSchema.validate(req.body);

    if (validateBody.error) {
      throw createError.BadRequest('Please provide a valid driver id');
    }

    const contract = await TransportContractRepo.findOneBy({
      _id: new ObjectId(req.params.id),
    });

    if (!contract) {
      throw createError.BadRequest(
        `Transport contract with id ${req.params.id} does not exit`,
      );
    }

    const driver = contract.applicants.filter((applicant) => {
      return applicant._id === req.body.id;
    });

    if (driver.length <= 0)
      throw createError.BadRequest('Applicant Driver not found');

    await TransportContractRepo.findOneAndUpdate(
      { id: new ObjectId(req.params.id) },
      {
        $set: {
          assignedApplicant: driver[0],
          status: 'TAKEN',
        },
      },
    );

    res.status(200).json({
      message: 'Driver successfully assigned to contract',
      data: driver[0],
    });

    return;
  } catch (error) {
    next(error);
  }
};

export const contractTaken = async (
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

    const contract = await TransportContractRepo.findOneBy({
      _id: new ObjectId(req.params.id),
    });

    if (!contract) {
      throw createError.BadRequest(
        `Transport contract with id ${req.params.id} does not exit`,
      );
    }

    await TransportContractRepo.findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      {
        $set: { status: 'TAKEN' },
      },
    );

    res.status(200).json({
      message: 'Successfully update',
    });

    return;
  } catch (error) {
    next(error);
  }
};
