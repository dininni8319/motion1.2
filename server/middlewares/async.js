const { customError } = require("../error/http-error");

const AsyncWrapper = (fn, error, statusCode) => {
  return async (req, res, next) => {
    try {
      await  fn(req, res, next)
    } catch (err) {
      next(customError(error, statusCode));
    }
  }
}

module.exports = AsyncWrapper;