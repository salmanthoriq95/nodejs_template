// "use strict";

const Joi = require("joi");
const HttpException = require("../../errors/httpException");
// const adsd=require("s")
module.exports = class Validators {
	getHomeValidator(input) {
		console.log("validator");

		if (!input.message) {
			throw new Error();
		}

		return input;
	}
};
