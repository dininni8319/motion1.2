const User = require("../../models/user-model");
const { customError } = require("../../error/http-error");

exports.createTempUserAction = async(next, code, email) => {
  
  let tempUser;
  try {
    tempUser = new User({
      email,
      confirmationCode:code
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

  return tempUser;
}