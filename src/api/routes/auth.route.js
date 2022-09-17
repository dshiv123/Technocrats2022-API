const [helloAuth, authnticateUser] = require("../controllers/auth/AuthController");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

// add router in express app
app.use("/", router);
// create application/json parser
var jsonParser = bodyParser.json();
router.get("/Auth", helloAuth);
router.post("/Auth", jsonParser, authnticateUser);
module.exports = router;
