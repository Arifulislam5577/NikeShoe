import PACKAGE from "../model/package.js";
import asyncHandler from "express-async-handler";

export const packageReq = asyncHandler(async (req, res) => {
  const packages = await PACKAGE.find();

  if (packages.length > 0) {
    res.status(200).json(packages);
  } else {
    res.status(404).json({ message: "Package Not Found" });
  }
});

export const singlePack = asyncHandler(async (req, res) => {
  const pack = await PACKAGE.findById({ _id: req.params.id });

  if (pack) {
    res.status(200).json(pack);
  } else {
    res.status(404).json({ message: "Invalid Id" });
  }
});
