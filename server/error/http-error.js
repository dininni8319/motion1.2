class HttpError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.code = errorCode;
  }
};

const customError = (msg, errorCode) => {
   return new HttpError(msg, errorCode);
}

module.exports = { HttpError, customError};

