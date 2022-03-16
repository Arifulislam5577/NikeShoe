import express from "express";
import { profile } from "../controllers/profileControllers.js";
import { protect } from "../middlewares/protectedMiddleware.js";
const router = express.Router();

router.route("/profile").get(protect, profile);

export default router;
