const quizusermapping = require("../controllers/quiz/QuizUserMapping");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

// add router in express app
app.use("/", router);
// create application/json parser
var jsonParser = bodyParser.json();

router.post("/quizusermapping/alluserquizmapping", jsonParser, quizusermapping.findAllUserQuiz);
router.get("/quizusermapping", quizusermapping.helloQuestion);

module.exports = router;
