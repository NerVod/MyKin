const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema(
  {
    name: {
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
  { collection: "users", timestamps: true }
);

userSchema.methods.hashPassword =  async (password) => {
  return await bcrypt.hashSync(password, 10);
};
userSchema.methods.compareUserPassword = async (
  passwordSaisi,
  passwordChiffre
) => {
  return await bcrypt.compare(passwordSaisi, passwordChiffre);
};
userSchema.methods.generateJwtToken = async (donnes, secret, expiration) => {
  return jwt.sign(donnes, secret, expiration);
};
module.exports = mongoose.model("User", userSchema);
userSchema.plugin(uniqueValidator, {
  message: `{PATH} est déjà utilisé`,
});

// module.exports = Mongoose.model("User", User);
