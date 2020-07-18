const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/htmlRoutes");
const routes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
const mongodb_uri = process.env.mongodbUri || "mongodb://loclalhost/workouts";