const { customError } = require("../../error/http-error");
const { validationResult } = require("express-validator");
const User = require("../../models/user-model");
const { findUser } = require("./find-user-action");
const { sendCodeWithEmail } = require("./sendemail-action");
const { generateCode } = require("./generate-code-action");
const randomString = require("../../utils/randomCode");

exports.emailVerification = async (req, res, next) => {
  const { email } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      customError("Invalid inputd passed, please check your data.", 422));
  }
  // looks if the user exists, if it does then it will throw an error
  await findUser(next, email);
 
  let verifyCode;
  let tempUser;
  try {
    verifyCode = randomString(8);

    tempUser = new User({
      email,
      confirmationCode: verifyCode
    })
  } catch (err) {
    const error = customError(
      "Sign up failed, please try again later",
      500
    );
    return next(error);
  }

  if (tempUser) {
    await tempUser.save();
  } else {
    const error = customError(
      "Sign up failed, please try again later",
      500
    );
      return next(error);
  }
  
  await sendCodeWithEmail(verifyCode, email);
  
  res.status(200).json({code: verifyCode, message: "We sent a code for the verification, please check your email"})
};

exports.sendCode = async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(
      customError("Please provide an email", 400)
    );
  }

  let userEmailExists;
  try {
    userEmailExists = await User.findOne({ email });
  } catch (err) {
    return next(
      customError("Something went wrong, please try it again later", 400)
    );
  }
  
  let verifyCode = generateCode(next);

  await sendCodeWithEmail(verifyCode, email);

  res.status(200).json({ message: "We sent a message to your email"});
};