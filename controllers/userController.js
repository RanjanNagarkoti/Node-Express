const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error("Emaily already exists our db!");
  }

  //bcrypt password
  // const hashedPassword = await bcrypt.hash(password, 10);

  // const user = await User.create({
  //   name,
  //   email,
  //   hashedPassword,
  // });

  // if (user) {
  //   res.status(201).json({ _id: user.id, email: user.email });
  // } else {
  //   res.status(400);
  //   throw new Error("User data is not valid");
  // }
});

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login the user" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current user information" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
