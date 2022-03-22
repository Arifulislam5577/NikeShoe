import express from "express";
import { createDeal, getDeals } from "../controllers/dealControllers.js";
const router = express.Router();

router.route("/").post(createDeal);
router.route("/").get(getDeals);

export default router;
