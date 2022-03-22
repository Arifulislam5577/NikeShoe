import mongoose from "mongoose";

const dealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  companyName: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const DEAL = mongoose.model("DEAL", dealSchema);

export default DEAL;
