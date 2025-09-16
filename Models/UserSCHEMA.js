import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userPassword: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const UserSCHEMA = mongoose.model("user", userSchema);
