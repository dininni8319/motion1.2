const bcrypt = require("bcrypt");
const { customError } = require("../../error/http-error");

exports.hashedPassword = async (req, res, next) => {
  const { password } = req.body;
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

  return hashPassword;
};
