const Mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.DB;

Mongoose.connect(url, { useNewUrlParser: true });

const UserSchema = new Mongoose.Schema(
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

exports.User = Mongoose.model("User", UserSchema);
