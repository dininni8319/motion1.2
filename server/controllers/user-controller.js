const User = require("../models/user-model");
const { customError } = require("../error/http-error");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

exports.signup = async (req, res, next) => {
 
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      customError("Invalid inputd passed, please check your data.", 422))
  }

  const { first_name, last_name, email, password } = req.body;
  
  let existingUser;
  try {
    expistingUser = await User.findOne({ email: email});
  } catch (err) {
    const error = customError(
      "Sign up failed, please try again later",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = customError(`
      User exists already, please login instead
     `,
     422 
    );

    return next(error);
  }
  
  let hashPassword;
  try {
    hashPassword = await bcrypt.hash(password, 10);
  } catch (err) {
    const error = customError(
      "Could not create a user, try it again.",
      500
    );

    return next(error);
  }

  const user = {
    first_name,
    email,
    password: hashPassword,
    last_name
  }

  const newUser = new User(user)
  // const verify = randomString();
  
  try {
    await newUser.save();
  } catch (err) {
    const error = customError(
      "Sign up failed, please try again later",
      500
    );
    return next(error);
  }
  
  res.status(201).json(
     {
      message: "Yuor profile was created successfully!",
     }
  );
};



