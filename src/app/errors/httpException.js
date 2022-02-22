"use strict";

module.exports = class HttpExpection extends Error {
	constructor(statusCode, httpData) {
		super(httpData.message);
		this.name = "HttpExpection";
		this.statusCode = statusCode;
		this.data = httpData.data || null;
	}
};
