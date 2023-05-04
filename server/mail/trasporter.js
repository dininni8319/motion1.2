const nodemailer = require("nodemailer");
require("dotenv").config();

const {
  MAIL_TRAP_HOST,
  MAIL_TRAP_PORT,
  MAIL_TRAP_USER,
  MAIL_TRAP_PASSWORD,
} = process.env;

const Transporter = nodemailer.createTransport({
  host: MAIL_TRAP_HOST,
  port: MAIL_TRAP_PORT,
  auth: {
    user: MAIL_TRAP_USER,
    pass: MAIL_TRAP_PASSWORD 
  },
  // secure: true,
});


module.exports = Transporter;