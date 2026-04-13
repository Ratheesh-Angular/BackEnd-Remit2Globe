import { Router } from "express";
import { beneficiaryController } from "../controllers/beneficiary.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();

// All beneficiary routes require login
router.use(protect);

router.get("/", beneficiaryController.list);
router.post("/", beneficiaryController.create);
router.get("/:id", beneficiaryController.getOne);
router.patch("/:id", beneficiaryController.update);
router.delete("/:id", beneficiaryController.remove);

export default router;
