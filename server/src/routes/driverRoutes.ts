import { applyForContract, getAllContracts } from "@server/controllers/driverController";
import { Router } from "express";

const router = Router()

router.get("/get-all-contracts", getAllContracts)
router.post("/apply-for-contract/:id", applyForContract)

export default router