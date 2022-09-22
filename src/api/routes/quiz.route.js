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
router.get("/quiz/quizQuestionMapping", quiz.quizQuestionMapping);

router.post("/findQuizbyCode", jsonParser, quiz.findQuizbyCode);
//router.delete('/quiz/:quizID', quiz.deleteUser)
//findAllQuiz
module.exports = router;
