const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add your username!"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email!"],
      unique: [true, "Email address already in use!"],
    },
    password: {
      type: String,
      required: [true, "Please add your password!"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", "userSchema");
