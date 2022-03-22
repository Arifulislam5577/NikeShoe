import ORDER from "../model/Order.js";
import asyncHandler from "express-async-handler";

export const createOrder = asyncHandler(async (req, res) => {
  const { shippingInfo, billingInfo } = req.body;

  const order = await ORDER.create({
    user: req.user,
    shippingInfo,
    billingInfo,
  });

  if (order) {
    res.status(201).json(order);
  } else {
    res.status(400).json({ message: "Order Not Created,Please Try Again" });
  }
});

export const userOrder = asyncHandler(async (req, res) => {
  const orders = await ORDER.find({ user: req.user._id });

  if (orders.length > 0) {
    res.status(200).json(orders);
  } else {
    res.status(400).json({ message: "No Order Found" });
  }
});

export const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await ORDER.find();
  if (orders.length > 0) {
    res.status(200).json(orders);
  } else {
    res.status(400).json({ message: "No Order Found" });
  }
});

export const updateOrderDelivery = asyncHandler(async (req, res) => {
  const order = await ORDER.findByIdAndUpdate(req.params.id);

  if (order) {
    order.shippingInfo.isDelivered = true;
    await order.save();
    res.status(200).json({ message: "Order updated successfully" });
  } else {
    res.status(400).json({ message: "No Order Upadate" });
  }
});
