const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const countries = require("../controllers/country/CountryController");
router.get("/country", countries.CountryList);
router.get("/state", countries.StateList);

module.exports = router;