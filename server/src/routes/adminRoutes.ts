import { awardContract, changeContractStatus, contractAppliedDriver, contractTaken, publishContract } from "@server/controllers/adminController";
import { Router } from "express";

const router = Router()

router.post("/add-contract", publishContract)
router.patch("/change-contract-status/:id", changeContractStatus)
router.get("/get-applied-drivers/:id", contractAppliedDriver)
router.post("/contract-taken/:id", contractTaken)
router.post("/award-contract/:id", awardContract)


export default router