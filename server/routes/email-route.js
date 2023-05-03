const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { emailVerification } = require("../controllers/email-controller");

router.post("/verify", 
 [
  check('email')
    .normalizeEmail()
    .isEmail()
 ],
  emailVerification
);

module.exports = router;