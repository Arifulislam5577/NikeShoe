import express from "express";
import {
  createOrder,
  getAllOrders,
  userOrder,
} from "../controllers/orderControllers.js";
const router = express.Router();
import { protect, protectByAdmin } from "../middlewares/protectedMiddleware.js";

router.route("/").post(protect, createOrder);
router.route("/").get(protect, userOrder);
router.route("/admin").get(protectByAdmin, getAllOrders);
export default router;
