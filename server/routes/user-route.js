const express = require("express");
const router = express.Router()
const { signin, signup } = require("../controllers/user/user-controller");
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
   .isEmpty(),
  check('code')
   .not()
   .isEmpty()
   .isLength({min: 8}),
], signup);

router.post("/signin", signin)

module.exports = router;

