const quiz = require("../controllers/quiz/QuizController");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

// add router in express app
app.use("/", router);
// create application/json parser
var jsonParser = bodyParser.json();

router.post("/quiz", jsonParser, quiz.create);
router.get("/quiz", quiz.helloQuiz);
router.get("/quiz/allquiz", quiz.findAll);
//router.delete('/quiz/:quizID', quiz.deleteUser)
module.exports = router;
