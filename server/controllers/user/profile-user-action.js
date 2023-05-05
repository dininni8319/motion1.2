const User = require("../../models/user-model");
const { customError } = require("../../error/http-error");

exports.findUserProfile = async (next, userId) => {

  let user;
  try {
    user = await User.findOne({_id: userId}, "-password -active -confirmationCode"); 
  } catch (err) {
    const error = customError(
      "Something went wrong.",
      500
    );
    return next(error);
  }

  if (!user) {
    const error = customError(
      "User Profile not found.",
      500
    );
    return next(error); 
  }
  return user;
};