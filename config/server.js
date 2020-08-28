const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include("app/routes")
    .then("config/db_connection.js")
    .then("app/models")
    .then("app/controllers")
    .into(app);

exports.app = app;