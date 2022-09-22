
const jwt = require("jsonwebtoken");
const db = require("../../database/models");
require('dotenv').config;
const [successResponse, errorsResponse] = require("../../util/common-util/repsonse");
const { logger } = require('../../util/common-util/log');

const User = db.User;
const helloAuth = (req, res, next) => {
  res.send("Auth service working fine!!!");
};
const authnticateUser = async (req, res, next) => {
  await User.findOne({
    where: { email: req.body.email },
  }).then((user) => {
    if (user && user.email) {
      //   const accessToken = jwt.sign(user.email, process.env.ACCESS_TOKEN_SECRET);
      const accessToken = "ABCG12333";
      successResponse(res, 10000, "User Authorize", user, accessToken);
      logger.info('User Authorized', { sessionID: `${req.id}` });
    } else {
      errorsResponse(res, 10001, "No user found")
    }
  }).catch(err => {
    errorsResponse(res, 10001, "Error", err)
  })
};
module.exports = [helloAuth, authnticateUser]