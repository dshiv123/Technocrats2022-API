// const { createLogger, format, transports, config } = require('winston');
const winston = require('winston');
//const { combine, timestamp, json, align, printf } = format;
const logConfiguration = {
  format: winston.format.json(),
  'transports': [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'sample.log'
    })
  ]
};

const logger = winston.createLogger(logConfiguration);
// logger.exports.stream = {
//   write: function (message, encoding) {
//     // use the 'info' log  level so the output will be picked up by both transports
//     // (file and console) 
//     logger().info(message)
//   }
// }
exports.logger = logger;