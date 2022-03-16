import mongoose from "mongoose";

const dealSchema = new mongoose.Schema({
  User: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "USER" },
  Name: { type: String, required: true },
  Company: { type: String, required: true },
  Email: { type: Number, required: true },
  message: { type: String, required: true },
});

const DEAL = mongoose.model("DEAL", dealSchema);

export default DEAL;
