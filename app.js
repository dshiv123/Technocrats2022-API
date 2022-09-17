const express = require("express");
const cors = require("cors");
//const logger = require('../api/util/common-util/log').logger;
const fs = require('fs')
var path = require('path')

const app = express();
app.use(cors());

const bodyParser = require("body-parser")
const morgan = require('morgan');

const dotenv = require("dotenv");
dotenv.config();

const db = require("./src/api/database/models")
const constants = require("./src/api/util/common-util/constatnt/constants");
// setup the logger
// app.use(morgan('combined', { "stream": winston.stream }));
// const morganMiddleware = morgan(
//     ':method :url :status :res[content-length] - :response-time ms',
//     {
//         stream: {
//             // Configure Morgan to use our custom logger with the http severity
//             write: (message) => logger.http(message.trim()),
//         },
//     }
// );


// app.use(morganMiddleware);
// Capture 500 errors
// app.use((err, req, res, next) => {
//     res.status(500).send('Could not perform the calculation!');
//     logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
// })

// // Capture 404 erors
// app.use((req, res, next) => {
//     res.status(404).send("PAGE NOT FOUND");
//     logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
// })

const basePath = constants.BASE_PATH;
const port = process.env.PORT || constants.SERVER_PORT;

const loginRoute = require("./src/api/routes/auth.route");
const userRoute = require("./src/api/routes/user.route");
const countryRoute = require("./src/api/routes/country.route");
const quizRoute = require("./src/api/routes/quiz.route");
const masterRoute = require("./src/api/routes/masters.route");
const questionRoute = require("./src/api/routes/question.route");

//Default route
app.use("/", loginRoute);
app.use("/", userRoute);
app.use("/", countryRoute);
app.use("/", quizRoute);
app.use("/", masterRoute);
app.use("/", questionRoute);
// app.use(function (err, req, res, next) {
//     logger.error(`${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`);
//     next(err)
// })

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`${constants.SERVER_PORT_MESSAGE} ${port}`);
    });
})
