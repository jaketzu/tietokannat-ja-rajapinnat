var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//5. MIDDLEWARE
app.use("/5", function (req, res, next) {
  console.log("Middleware called");
  next();
});

app.use("/", indexRouter);

//4. POST-METHOD
app.post("/", (request, response) => {
  response.send(request.body);
  console.log(request.body);
});

//1. GET-METHOD
app.get("/1", (request, response) => {
  response.send("This is a a response!");
});

//2, GET-METHOD WITH 1 PARAMETER
app.get("/2/:name", (request, response) => {
  response.send(`Hello ${request.params.name}.`);
});

//3. GET-METHOD WITH 2 PARAMETERS
app.get("/3/:num1/:num2", (request, response) => {
  response.send(
    `Sum of the numbers is ${
      parseFloat(request.params.num1) + parseFloat(request.params.num2)
    }.`
  );
});

//5. MIDDLEWARE
app.get("/5", (request, response) => {
  response.send("Middleware log in log.");
});

module.exports = app;
