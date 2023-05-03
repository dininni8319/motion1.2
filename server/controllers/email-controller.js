const { customError } = require("../error/http-error");
const { validationResult } = require("express-validator");
const User = require("../models/user-model");
const randomString = require("../utils/randomCode");

exports.emailVerification = async (req, res, next) => {
  const { email } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      customError("Invalid inputd passed, please check your data.", 422))
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ email })
  } catch (err) {
    const error = customError(
      "Sign up failed, please try again later",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = customError(`User exists already, please login instead`,
     422 
    );
 
    return next(error);
  }
  let verifyCode;
  try {
    verifyCode = randomString(8);
  } catch (err) {
    const error = customError(
      "Sign up failed, please try again later",
      500
    );
    return next(error);
  }
  res.status(200).json({code: verifyCode})
};