"use strict";

const express = require("express");

// Environment variables
const path = require("path");
const envName = !process.env.APP_ENV ? "prod" : `${process.env.APP_ENV}`;
const dotenv = require("dotenv");
dotenv.config({ path: path.resolve(__dirname, `../env/${envName}/.env`) });

const { APP } = require("./app/config");
const loaderApp = require("./app");

const app = express();

// Load App
loaderApp(app);

app.listen(APP.PORT, () => {
	console.log(`[${APP.NAME}] Server listen on PORT ${APP.PORT}`);
});
