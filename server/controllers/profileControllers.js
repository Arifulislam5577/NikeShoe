import USER from "../model/user.js";
import asyncHandler from "express-async-handler";

export const profile = asyncHandler(async (req, res) => {
  const user = await USER.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: user.token,
    });
  }
});
