import USER from "../model/user.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = await USER.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "No authorizated" });
    }
  }

  if (!token) {
    res.status(400).json({ message: "No authorization no token" });
  }
});

export const protectByAdmin = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = await USER.findById(decoded.id).select("-password");
      if (req.user.isAdmin) {
        next();
      }
    } catch (error) {
      res.status(401).json({ message: "No authorizated" });
    }
  }

  if (!token) {
    res.status(400).json({ message: "No authorization no token" });
  }
});
