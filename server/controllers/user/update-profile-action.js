const User = require("../../models/user-model");
const { customError } = require("../../error/http-error");

exports.updateProfileAction = async (req, res, next) => {
  const { userId } = req.userData;
  let user;

  try {
    user = await User.findOneAndUpdate({_id: userId}, req.body).exec();
  } catch (err) {
    const error = customError(
      "I did not find any user profile",
      500
    );
    return next(error);
  }
  
  if (!user) {
    const error = customError(
      "I did not update your profile",
      500
    );
    return next(error);
  }
  return { message: "successful profile updated"};
}