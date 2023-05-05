const randomString = require("../../utils/randomCode");
const { customError } = require("../../error/http-error");

exports.generateCode = (next) => {
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

  return verifyCode;
};