"use strict";

const { Application: app, static: Static } = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { errorHandler } = require("./errors");
const routes = require("./routes");
// const swaggerJSDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

// const swaggerDefinition = {
// 	openapi: "3.0.0",
// 	info: {
// 		title: "Product Api Example",
// 		version: "1.0.0",
// 		description:
// 			"This is a REST API application made with Express. It example boilerplate.",
// 		contact: {
// 			name: "Developer",
// 			email: "fuji@gmail.com",
// 		},
// 	},
// 	servers: [
// 		{
// 			url: "http://localhost:4442/",
// 			description: "Local Dev",
// 		},
// 		{
// 			url: "http://iws01lab3.ra.com:8080/",
// 			description: "Server Dev",
// 		},
// 	],
// };

// const options = {
// 	swaggerDefinition,
// 	// Paths to files containing OpenAPI definitions
// 	apis: ["./src/app/services/**/_routes*.ts"],
// };

// const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
	// Middleware
	app.use(cors());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	//setting accepted headers
	app.use((req, res, next) => {
		//website you wish allow to connect
		res.setHeader("Access-Control-Allow-Origin", "*");

		//Request method you wish to allow
		res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

		//Request Headers you wish to allow
		res.setHeader(
			"Access-Control-Allow-Headers",
			"X-Requested-With,Content-Type,Authorization"
		);

		//Set to true if you need the website to include cookies in the requests sent
		//to the API (e.g. in case you use sessions)
		res.setHeader("Access-Control-Allow-Credentials", true);

		//Pass to next layer of middleware
		next();
	});
	// Documentation Handling
	// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

	// Api Handling
	app.use(routes);

	// //jsdoc
	// app.use("/docs", Static("./docs"));

	// Error Handling
	app.use(errorHandler);

	// Unhandling Rejection Expection
	process.on("unhandledRejection", (reason, p) => {
		console.log(p);
		throw reason;
	});

	process.on("uncaughtException", (error) => {
		console.log(error);
		process.exit(1);
	});

	// Default path
	app.use((req, res) => {
		res.status(404);
		res.send({
			method: req.method,
			url: req.url,
			message: "Page not found",
		});
	});
};
