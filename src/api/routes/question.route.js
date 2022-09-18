const question = require("../controllers/questions/QuestionController");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
// add router in express app
app.use("/", router);
// create application/json parser
var jsonParser = bodyParser.json();
router.post("/question", jsonParser, question.create);
router.get("/question", question.helloQuestion);
router.get("/question/allquestion", question.findAll);
router.post("/question/mapquestionanswer", jsonParser, question.mapquestionanswer);

module.exports = router;
