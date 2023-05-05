const { customError } = require("../../error/http-error");
const { validationResult } = require("express-validator");
const { findUser } = require("../email/find-user-action");
const { verifyCode } = require("./verification-code-action");
const { loginValidation } = require("./login-validation-action");
const { createUser } = require("./create-user-action");

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      customError("Invalid inputd passed, please check your data.", 422))
  }

  await verifyCode(req, res, next);

  let user = await createUser(req, res, next)

  if (user) {
    res.status(201).json(
       {
        message: "Your profile was created successfully!",
       }
    );
  } else {
    const error = customError(
      "Sign up failed, please try again later",
      500
    );
    return next(error);
  }
};

exports.signin = async (req, res, next) => {

  const { email, password } = req.body;

  let sendExistingUser = false;
  let emailExists = await findUser(next, email, sendExistingUser);
 
  let token = await loginValidation(next, emailExists, password);
  
  if (token) {
    res.status(200).json({
      userName: {
         first_name: emailExists.first_name,
         last_name: emailExists.last_name,
      },
      token: token 
    });
  } else {
    const error = customError(
      "Sign up failed, please try again later",
      500
    );
    return next(error);
  }
};



