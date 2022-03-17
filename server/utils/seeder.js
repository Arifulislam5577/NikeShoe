import mongoose from "mongoose";
import dotenv from "dotenv";
import PACKAGE from "../model/package.js";
import { Package } from "../utils/packageData.js";
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, () => {
  process.env.NODE_ENV === "development" &&
    console.log("Database connection established");
});

const seedPackage = async () => {
  try {
    await PACKAGE.deleteMany();
    console.log("Package deleted");
    await PACKAGE.insertMany(Package);
    console.log("Package added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

seedPackage();
