const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;


module.exports = {
  db: 'mongodb+srv://NerVod:MotDePasseMongo@cluster0.aykvr.mongodb.net/mykin?retryWrites=true&w=majority',
};

// const Mongoose = require("mongoose");
// const Schema = Mongoose.Schema;
// require("dotenv").config();
// const url = process.env.DB;

// Mongoose.connect(url, { useNewUrlParser: true });

// let User = new Schema(
//   {
//     userName: {
//       type: String,
//       unique: true,
//       required: true,
//       lowercase: true,
//     },
//     email: {
//       type: String,
//       unique: true,
//       required: true,
//       lowercase: true,
//       trim: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   },
//   { collection: "users" }
// );

// exports.User = Mongoose.model("User", User);
