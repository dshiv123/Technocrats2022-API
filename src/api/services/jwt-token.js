const jwt = require("jsonwebtoken");
const [successResponse, errorsResponse] = require("../util/common-util/repsonse");
const status = require('http-status');

function generateAccessToken(username) {
  return jwt.sign(username, process.env.ACCESS_TOKEN_SECRET);
}

function authenticateToken(req, res, next) {
  const token = req.headers["authorization"];
  // const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return errorsResponse(res, status.FORBIDDEN, status['403']);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) {
      return errorsResponse(res, status.INTERNAL_SERVER_ERROR, `Unexpected error`);
    }
    req.user = user;
    next();
    return;
  });
}
module.exports = [generateAccessToken, authenticateToken];
