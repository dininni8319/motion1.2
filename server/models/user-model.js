const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String, 
    required: true,
    minlength: 8
  },
  image: {
    type: String,
  }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);

