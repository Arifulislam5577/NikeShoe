import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import isEmail from "validator/lib/isEmail.js";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      minlength: [4, "Name must be at least 4 character"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email address"],
      unique: [true, "Please enter a valid email address"],
      lowercase: true,
      trim: true,
      validate: [isEmail, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minlength: [6, "Password must be at least 6 character"],
    },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

const USER = mongoose.model("USER", userSchema);

export default USER;
