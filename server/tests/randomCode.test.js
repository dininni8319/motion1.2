const randomString = require("../utils/randomCode");
const validatePassword = require("../utils/passwordValidation");

describe("The function should retunr a value not equal, to the give one", () => {
  test('should return a random string', () => {
    const random = randomString()
    expect(random).not.toEqual("sWE@#$%4")
  });
});

// describe("It should return true if given password correct.", () => {
//   test('should return true if the password and hash is correct', () => {
//     const validPass = validatePassword()
    
//     // expect(validPass( "", 12345678)).not.toEqual()
//   });
// });