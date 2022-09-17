
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json()
const user = require('../controllers/user/UserController');
const [generateAccessToken, authenticateToken] = require("../services/jwt-token")
var express = require("express");
var router = express.Router();
router.post("/user", jsonParser, user.create);
router.get("/user", user.helloUser);
router.get("/user/alluser", authenticateToken, user.findAll);
router.delete('/user/:userID', user.deleteUser)
module.exports = router;
