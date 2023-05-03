const express = require("express");
const router = express.Router()
const { signup } = require("../controllers/user-controller");
const { check } = require("express-validator");

router.post("/",
[
  check("email")
   .normalizeEmail()
   .isEmail(),
  check('password')
   .isLength({min: 8}),
  check("first_name")
   .not()
   .isEmpty(),
   check("last_name")
   .not()
   .isEmpty()
], signup);


module.exports = router;

