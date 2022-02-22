"use strict";

const { NextFunction: next, Request: req, Response: res } = require("express");
const Validators = require("./validators");
const validator = new Validators();
const Services = require("./services");
const service = new Services();

module.exports = class Controllers {
	async getHomeController(req, res, next) {
		try {
			const validateResult = validator.getHomeValidator(req.query);
			const result = await service.getHomeService(validateResult);
			res.json(result);
		} catch (error) {
			next(error);
		}
	}
};
