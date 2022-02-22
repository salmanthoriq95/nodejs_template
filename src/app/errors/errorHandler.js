const { NextFunction: next, Request: req, Response: res } = require("express");

module.exports = (error, req, res, next) => {
	const errorResponse = {
		name: error.name,
		message: error.message,
		data: error.data,
	};

	if (req.query.debug === "1") errorResponse.stack = error.stack;

	if (error.name === "HttpExpection") {
		return res.status(error.statusCode).json(errorResponse);
	}
	return res.status(500).json(
		req.query.debug === "1"
			? errorResponse
			: {
					name: "Internal Server Error",
					message: "Please contact administrator",
			  }
	);
};
