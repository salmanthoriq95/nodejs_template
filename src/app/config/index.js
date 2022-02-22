"use strict";

// const dotenv = require("dotenv");
// const envName = !process.env.APP_ENV ? "" : `.${process.env.APP_ENV}`;
// dotenv.config({ path: `../../../env/.env.${envName}` });
// const envPath = require("../../../env/.env");
module.exports = {
	APP: {
		HOST: process.env.APP_HOST,
		PORT: process.env.APP_PORT,
		NAME: process.env.APP_NAME,
	},
	DB: {
		HOST: process.env.DB_HOST,
		DATABASE: process.env.DB_NAME,
		PORT: process.env.DB_PORT,
		USER: process.env.DB_USER,
		PASSWORD: process.env.DB_PASS,
	},
};
