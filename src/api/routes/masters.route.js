const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const masters = require("../controllers/masters/MasterController");
router.get("/masters/subject", masters.subject);
router.get("/masters/questionmaster", masters.questionmaster);

router.get("/masters", masters.helloMaster);

module.exports = router;