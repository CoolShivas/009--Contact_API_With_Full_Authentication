import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  contactName: { type: String, require: true },
  contactEmail: { type: String, require: true },
  contactPhone: { type: Number, require: true },
  contactType: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
  contactUser: { type: mongoose.Schema.Types.ObjectId },
});

export const ContactSCHEMA = mongoose.model("contact", contactSchema);
