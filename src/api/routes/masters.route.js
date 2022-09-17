const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const masters = require("../controllers/masters/MasterController");
router.get("/masters/quizcategory", masters.getquizcategory);
router.get("/masters", masters.helloMaster);

module.exports = router;