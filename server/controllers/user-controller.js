const User = require("../models/user-model");
const { customError } = require("../error/http-error");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const validPassword = require("../utils/passwordValidation");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const JWT_KEY = process.env.JWT_KEY;

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      customError("Invalid inputd passed, please check your data.", 422))
  }

  const { first_name, last_name, email, password, code } = req.body;
  
  let existingUser;
  try {
    existingUser = await User.findOne({ "email": email });
    
  } catch (err) {
    const error = customError(
      "Sign up failed, please try again later",
      500
    );
    return next(error);
  }
   
  if (!existingUser) {
    const error = customError(`User does not exists, please register with your email`,
     422 
    );

    return next(error);
  }

  let confirmationCode;
  try {
    confirmationCode = await User.findOne({confirmationCode: code});
  } catch (err) {
    const error = customError(`Something went wrong.`, 500);

  return next(error);
  }

  if (!confirmationCode || code === "") {
    const error = customError(`Confirmation code does not exists, please request a new one.`,
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
    last_name,
    password: hashPassword,
    confirmationCode: "",
    active: "Active"
  };

  let newUser; 
  try {
    newUser = await User.findOneAndUpdate({"email": email}, user);
    
  } catch (err) {
    const error = customError(
      "Sign up failed, please try again later",
      500
    );
    return next(error);
  }
  
  res.status(201).json(
     {
      message: "Your profile was created successfully!",
     }
  );
};

exports.signin = async (req, res, next) => {

  const { email, password } = req.body;

  let emailExists;
  try {
    emailExists = await User.findOne({ email });
  } catch (err) {
    const error = customError(
      "Something went wrong!",
      500
    )
    return next(error);
  }
 
  let isValidPassword;
  let hash = emailExists.password;
  try {
    isValidPassword = await validPassword(hash,password);
    
  } catch (err) {
    const error = customError(
      "Something went wrong!",
      500
    );
    return next(error);
  }
  
  if (isValidPassword && emailExists) {
     
    let token;
    try {
      token = jwt.sign(
        {
          userId: emailExists._id,
          email: emailExists.email
        },JWT_KEY,
        { expiresIn: "1h"}
      )
    } catch (err) {
      const error = customError(
        "Signing Up user failed, please try it again.",
        500
      );
      return next(error);
    }
    res.status(200).json({
      userName: {
         first_name: emailExists.first_name,
         last_name: emailExists.last_name,
      },
      token: token 
    });
  }
};



