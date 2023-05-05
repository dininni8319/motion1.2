const Transporter = require("../../mail/trasporter");
const User = require("../../models/user-model");
const { customError } = require("../../error/http-error");

exports.sendCodeWithEmail = async (verificationCode, email) => {
  let sendEmail;
  try {
    sendEmail = await Transporter.sendMail({
      from: "s.dininni@yahoo.com",
      to: email,
      subject: "Confirmation code",
      text: `This is your confirmation code, use it to finish your registration`,
      html: `<h2>Hello from Motion, here is you code: ${verificationCode}</h2>`
    })
  } catch (err) {
    const error = customError(
      "The email was not sent, please try again later",
      500
    );

    if(!sendEmail) {
      await User.findOneAndDelete({ email: email });
      return next(error);
    }
  };
}