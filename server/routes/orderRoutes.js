import express from "express";
import { createOrder, userOrder } from "../controllers/orderControllers.js";
const router = express.Router();
import { protect } from "../middlewares/protectedMiddleware.js";

router.route("/").post(protect, createOrder);
router.route("/").get(protect, userOrder);
export default router;
