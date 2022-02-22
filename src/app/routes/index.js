"use strict";

const express = require("express");
const Router = express.Router();

const { home } = require("../services/");

// All Routes
Router.route("/").get(home.getHomeController);

module.exports = Router;
