const { customError } = require("../error/http-error");
const { validationResult } = require("express-validator");
const User = require("../models/user-model");
const randomString = require("../utils/randomCode");
const Transporter = require("../mail/trasporter");
const nodemailer = require("nodemailer");

exports.emailVerification = async (req, res, next) => {
  const { email } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      customError("Invalid inputd passed, please check your data.", 422));
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
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
  
  let sendEmail;
  try {
    sendEmail = await Transporter.sendMail({
      from: "s.dininni@yahoo.com",
      to: email,
      subject: "Confirmation code",
      text: `This is your confirmation code: ${verifyCode}, use it to finish your registration`,
      html: "<h2>Hello from Motion</h2>"
    })
  } catch (err) {
    const error = customError(
      "The email was not sent, please try again later",
      500
    );

    if(!sendEmail) {
      await User.findOneAndDelete({ email: email });
      return next(error);
    }
  }

  // console.log("Message sent: %s", confirmationCode.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(confirmationCode));
  res.status(200).json({code: verifyCode, message: "We sent a code for the verification, please check your email"})
};