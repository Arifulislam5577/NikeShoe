import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import packageRouter from "./routes/packageRoutes.js";
import paymentRoute from "./routes/paymentRoute.js";
import orderRoute from "./routes/orderRoutes.js";
import dealRoute from "./routes/dealsRoutes.js";
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URI, () => {
  process.env.NODE_ENV === "development" &&
    console.log("Database connection established");
});

if (process.env.NODE_ENV === "development") {
  app.use(morgan("tiny"));
}

app.use(cors());
app.use(express.json());
// Routes
app.use("/api/v1/user", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/package", packageRouter);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/deal", dealRoute);

// --------------------------deployment------------------------------

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve("client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  process.env.NODE_ENV === "development" &&
    console.log(
      `App is Running port on ${PORT} at ${process.env.NODE_ENV} mode`
    );
});
