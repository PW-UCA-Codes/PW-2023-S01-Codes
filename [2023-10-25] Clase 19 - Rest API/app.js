const express = require("express");
const morgan = require("morgan");
const path = require("path");

const indexRouter = require("./routes/index.router");

const app = express();

//Request Logger config
app.use(morgan("dev"));

//Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Static files
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/api", indexRouter);

module.exports = app;