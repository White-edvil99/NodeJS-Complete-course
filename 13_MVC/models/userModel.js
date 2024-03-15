const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    JobTitle: {
      type: String,
      required: true,
    },
    Gender: {
      type: String,
    },
  },
  { timestamps: true }
);

// Model
const User = mongoose.model("user", userSchema);

module.exports = User;
