import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Color: { type: String, required: true },
  Img: { type: String, required: true },
  Pair: { type: Number, required: true },
  Size: { type: String, required: true },
  Delivery: { type: String, required: true },
  Shipping: { type: Number, required: true },
  ItemsPrice: { type: Number, required: true },
  Price: { type: Number, required: true },
});

const PACKAGE = mongoose.model("Package", packageSchema);

export default PACKAGE;
