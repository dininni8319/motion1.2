const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String, 
    minlength: 8
  },
  image: {
    type: String,
  },
  active: {
    type: String,
    enum:[ "Pending", "Active"],
    default: "Pending"
  },
  confirmationCode: {
    type: String,
    unique: true
  }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);

