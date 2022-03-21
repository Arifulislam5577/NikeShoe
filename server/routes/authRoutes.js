import express from "express";
import { getAllUsers, signin, signup } from "../controllers/authControllers.js";
import { protectByAdmin } from "../middlewares/protectedMiddleware.js";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/").get(protectByAdmin, getAllUsers);

export default router;
