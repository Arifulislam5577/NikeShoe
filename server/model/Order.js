import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "USER",
    },
    shippingInfo: {
      name: { type: String, required: true },
      companyName: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      country: { type: String, required: true },
      city: { type: String, required: true },
      zipcode: { type: String, required: true },
      houseNumber: { type: String, required: true },
    },

    billingInfo: {
      paid: { type: String, required: true },
      Color: { type: String, required: true },
      Pair: { type: String, required: true },
      Img: { type: String, required: true },
      Color: { type: String, required: true },
      amount: { type: Number, required: true },
      Name: { type: String, required: true },
      Size: { type: String, required: true },
      Delivery: { type: String, required: true },
      Shipping: { type: Number, required: true },
      ItemsPrice: { type: Number, required: true },
      Price: { type: Number, required: true },
    },
  },
  { timestamps: true }
);

const ORDER = mongoose.model("ORDER", orderSchema);

export default ORDER;
