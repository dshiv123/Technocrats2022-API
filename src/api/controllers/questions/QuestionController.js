const db = require("../../database/models");
const mail = require("../../util/common-util/mail.util");
const [successResponse, errorsResponse] = require("../../util/common-util/repsonse");
const constants = require("../../util/common-util/constatnt/constants");

const Question = db.QuestionMaster;
const AnswerMaster = db.AnswerMaster;
AnswerMaster.belongsTo(Question, {
    foreignKey: "questionid",
    as: "qid",
});
create = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const question = req.body;
    const answer = req.body.Answer;

    //Save Question in the database
    Question.create(question)
        .then(questiondata => {
            var data = [];
            var qid = questiondata.dataValues.questionId;
            for (i = 0; i < answer.length; i++) {
                data.push({ answer: answer[i].answer, iscorrect: answer[i].iscorrect, "questionid": questiondata.dataValues.questionId, });
            }
            const x = questiondata;
            // Save Question in the database
            AnswerMaster.bulkCreate(data)
                .then(answerdata => {
                    successResponse(res, constants.SUCCESS_STATUS_CODE, `${constants.QUESTION, constants.LIST}`, { "questionid": qid });

                    //  mail();
                })
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || constants.QUESTION_CREATION_ERROR
            });
        });
};
mapquestionanswer = (req, res) => {
    const QuizMap = db.QuizMap;
    if (!req.body) {
        return res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    var questionmap = [];
    const data = req.body;
    for (i = 0; i < data.mappedquestion.length; i++) {
        questionmap.push({ questionid: data.mappedquestion[i], quizid: data.quizid, questionorder: i });
    }
    QuizMap.bulkCreate(questionmap)
        .then(questiondata => {
            successResponse(res, constants.SUCCESS_STATUS_CODE, `${constants.QUESTION, constants.MAP}`, questiondata);

        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || constants.QUESTION_MAPPING_ERROR
            });
        });


}
// Retrieve all Question from the database.
findAll = (async (req, res, next) => {
    const questions = await Question.findAll();
    successResponse(res, constants.SUCCESS_STATUS_CODE, constants.SUCCESS, questions);
});

findquestionById = (async (req, res, next) => {
    const question = await Question.findByPk(1, { include: ["questionId"] });
    successResponse(res, constants.SUCCESS_STATUS_CODE, question);

});
// Find a single Question with an id
findOne = (req, res) => {
};

// Delete a Question with the specified id in the request
deleteQuestion = (req, res) => {
    return Question.destroy({
        where: { questionid: req.params.questionID }
    }).then(data => {
        successResponse(res, 10000, `${constants.USER_DELETED_SUCCESFULLY}: ${req.params.questionID}`);

    })
        .catch(err => {
            errorsResponse(res, res.statusCode, `${constants.USER_DELETE_ERROR} ${req.params.questionID}- ${err.message}`);

        });

};

helloQuestion = (req, res, next) => {
    res.send(`Question ${constants.SERVICE_WORKING_FINE}`);
};

module.exports = { create, helloQuestion, findOne, findAll, create, mapquestionanswer, findquestionById }