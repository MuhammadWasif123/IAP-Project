// import bcrypt from "bcryptjs/dist/bcrypt";
import bcrypt from "bcrypt";
import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});

adminSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
adminSchema.methods.generateToken = async function () {
  return await jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.SEC_KEY
  );
};

export const Admin = mongoose.model("Admin", adminSchema);
