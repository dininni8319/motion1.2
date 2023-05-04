const bcrypt = require("bcrypt");

const validatePassword = (hash, password) => {
  let data = bcrypt
    .compare(password, hash)
    .then(data => {
      return data;
    })
  return data;
};

module.exports = validatePassword;