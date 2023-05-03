const express = require("express");
const connectDB = require("./db/connect");
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require("morgan");
const userRoutes = require("./routes/user-route");
const emailRoutes = require("./routes/email-route");
const notFound = require("./middlewares/not-found");

require("dotenv").config();
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/social", userRoutes);
app.use("/api/email", emailRoutes);
app.use(notFound);

app.use((error, req, res, next) => {
   res
    .status(error.code || 500)
    .json({ message:error.message || "An unknown error occured!"});
});

const port = process.env.PORT;
const start = async () => {
  try {
    await connectDB(process.env.DATABASE)
    app.listen(port, () => {
      console.log("connected to MongoDB on the port:",port);
    })
  } catch (error) {
    console.log(error || "Something when wrong!");
  }
}

start();


