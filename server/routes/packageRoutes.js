import express from "express";
import { packageReq, singlePack } from "../controllers/packageControllers.js";
import { protect } from "../middlewares/protectedMiddleware.js";

const router = express.Router();

router.route("/").get(packageReq);
router.route("/:id").get(protect, singlePack);

export default router;
