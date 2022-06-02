const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
require("dotenv").config();
const url = process.env.DB;

let User = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);

exports.User = Mongoose.model("User", User);
