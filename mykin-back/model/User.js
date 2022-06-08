const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

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

module.exports = Mongoose.model("User", User);
