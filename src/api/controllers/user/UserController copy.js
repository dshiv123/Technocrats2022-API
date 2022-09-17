const [authenticateToken] = require("../../services/jwt-token");
const getUserDetail = (req, res, next) => {
  console.log("Token", process.env.ACCESS_TOKEN_SECRET);
  const isAuthnicated = authenticateToken(req, res, next);
  console.log("isAuthnicated", isAuthnicated);
  if (isAuthnicated) {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(response));
  }
};
const testUser = (req, res, next) => {
  res.send("User service working fine!!!");
};


module.exports = [getUserDetail, testUser];
