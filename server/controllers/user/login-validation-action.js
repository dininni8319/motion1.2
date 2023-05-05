const validPassword = require("../../utils/passwordValidation");
const { customError } = require("../../error/http-error");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const JWT_KEY = process.env.JWT_KEY;

exports.loginValidation = async (next, emailExists, password) => {

  let isValidPassword;
  let hash = emailExists?.password;
  try {
    isValidPassword = await validPassword(hash, password);
    
  } catch (err) {
    const error = customError(
      "Something went wrong!",
      400
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

    return token;
  }
};