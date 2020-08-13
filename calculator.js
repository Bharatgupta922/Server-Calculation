//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function (req, res) {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var bmi = height / (weight * weight);
  res.send("<h1>YOUR BMI IS </h1><h1>" + bmi + "</h1>");
});
app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("<h1>The Result is :</h1>" + result);
});
app.listen(3000, function () {
  console.log("the server has been started");
});
