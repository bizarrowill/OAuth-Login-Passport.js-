const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// DB Schema for storing User Model
const userSchema = new Schema({
  username: String,
  googleId: String,
  thumbnail: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;
