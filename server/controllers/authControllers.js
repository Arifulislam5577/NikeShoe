import USER from "../model/user.js";
import asyncHandler from "express-async-handler";
import { generateToken } from "../utils/generateToken.js";

export const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const isExistEmail = await USER.findOne({ email });
  if (isExistEmail) {
    res.status(400).json({ message: "Email already exists" });
  } else {
    const user = await USER.create({ name, email, password });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  }
});

export const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await USER.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid email or password" });
  }
});

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await USER.find();

  if (users.length > 0) {
    res.status(200).json(users);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
