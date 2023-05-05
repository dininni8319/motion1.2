const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { emailVerification, sendCode } = require("../controllers/email/email-controller");

router.post("/verify", 
 [
  check('email')
    .normalizeEmail()
    .isEmail()
 ],
  emailVerification
);

router.post("/reset/password",
[
 check('email')
  .normalizeEmail()
  .isEmail()
],
 sendCode);

module.exports = router;