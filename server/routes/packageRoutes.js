import express from "express";
import { packageReq } from "../controllers/packageControllers.js";

const router = express.Router();

router.route("/").get(packageReq);

export default router;
