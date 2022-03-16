import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URI, () => {
  process.env.NODE_ENV === "development" &&
    console.log("Database connection established");
});
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
// Routes
app.use("/api/v1/user", authRouter);
app.use("/api/v1/user", userRouter);

app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  process.env.NODE_ENV === "development" &&
    console.log(
      `App is Running port on ${PORT} at ${process.env.NODE_ENV} mode`
    );
});