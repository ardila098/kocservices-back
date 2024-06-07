"use strict";

var mongoose = require("mongoose");
require("dotenv").config();
var mongoURL = process.env.MONGO_URL || "mongodb://localhost/insurancedb";
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("MongoDB connected");
})["catch"](function (err) {
  return console.error("MongoDB connection error:", err);
});