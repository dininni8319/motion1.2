const mongoose = require("mongoose");
const request = require("supertest");
require("dotenv").config();
const { app } = require("../server");

beforeEach(async () => {
  await mongoose.connect(process.env.DATABASE);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("POST /api/social/signin", () => {

  describe("The user should give a email and password", () => {
    test("should response with status code 200",async () => {
      const response = await request(app).post("/api/social/signin").send({
        email: "s.dininni@yahoo.com",
        password: "12345678"
      });

      expect(response.statusCode).toBe(200);
    })

    test('should specify json in the content type header', async () => {
      const response = await request(app).post('/api/social/signin').send({
        email: "s.dininni@yahoo.com",
        password: "12345678"
      });

      expect(response.header['content-type']).toEqual(expect.stringContaining("json"))
    });

    test('the response should have a token to be defined', async () => {
      const response = await request(app).post('/api/social/signin').send({
        email: "s.dininni@yahoo.com",
        password: "12345678"
      });
      
      expect(response.body.token).toBeDefined()
    });
  });

  describe("when email and password is missing", () => {
    test('should return 500 if the email is missing', async () => {
       const response = await request(app).post("/api/social/signin").send({
         email: "",
         password: ""
       })

       expect(response.statusCode).toBe(400);
    })

    test('should respond with status 400 if the email is missing', async () => {
      const BodyData = [
        { email: "s.dininni@yahoo.com"},
        { password: "12345678"},
        {}
      ]
      
      for (const body of BodyData) {
        const response = await request(app).post("/api/social/signin").send(body)
        expect(response.statusCode).toBe(400);
      }
   })
  })
})