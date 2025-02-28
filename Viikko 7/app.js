var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const userDatabase = require("./userDatabase");
const bcrypt = require("bcryptjs");
const basicAuth = require("express-basic-auth");


var bookRouter = require("./routes/book");
var borrowerRouter = require("./routes/borrower");

var opiskelijaRouter = require("./routes/opiskelija");
var opintojaksoRouter = require("./routes/opintojakso");
var arvointiRouter = require("./routes/arviointi");
var loginRouter = require("./routes/login");

var userRouter = require("./routes/user");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/book", bookRouter);

app.use("/opiskelija", opiskelijaRouter);
app.use("/opintojakso", opintojaksoRouter);
app.use("/arviointi", arvointiRouter);

app.use(basicAuth({ authorizer: myAuthorizer, authorizeAsync: true }));

app.use("/borrower", borrowerRouter);

app.use("/user", userRouter);
app.use("login", loginRouter);

function myAuthorizer(username, password, cb) {
  userDatabase.query(
    "SELECT password FROM user WHERE username = ?",
    [username],
    function (dbError, dbResults, fields) {
      if (dbError) {
        response.json(dbError);
      } else {
        if (dbResults.length > 0) {
          bcrypt.compare(password, dbResults[0].password, function (err, res) {
            if (res) {
              console.log("success");
              return cb(null, true);
            } else {
              console.log("wrong password");
              return cb(null, false);
            }
            response.end();
          });
        } else {
          console.log("user does not exists");
          return cb(null, false);
        }
      }
    }
  );
}

module.exports = app;
