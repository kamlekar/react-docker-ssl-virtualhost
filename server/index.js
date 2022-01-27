const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const session = require("express-session");
var bodyParser = require("body-parser");
const passport = require("passport");

const app = express();
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// connect DB
connectDB();

require("./config/passport")(passport);

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
