import DEAL from "../model/Deal.js";
import asyncHandler from "express-async-handler";

export const createDeal = asyncHandler(async (req, res) => {
  const { name, email, companyName, message } = req.body;
  const deal = await DEAL.create({ name, email, companyName, message });
  if (deal) {
    res.status(201).json({ message: "Deal Created successfully" });
  } else {
    res.status(400).json({ message: "Something went wrong" });
  }
});

export const getDeals = asyncHandler(async (req, res) => {
  const deals = await DEAL.find();
  if (deals.length > 0) {
    res.status(200).json(deals);
  } else {
    res.status(400).json({ message: "No deals found" });
  }
});
