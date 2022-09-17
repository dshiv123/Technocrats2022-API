const db = require("../../database/models");
const mail = require("../../util/common-util/mail.util");
const [successResponse, errorsResponse] = require("../../util/common-util/repsonse");
const constants = require("../../util/common-util/constatnt/constants");

const Question = db.QuestionMaster;
const AnswerMaster = db.AnswerMaster;
create = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const question = req.body;
    // Save Question in the database
    Question.create(question)
        .then(data => {
            // Save Question in the database
            AnswerMaster.bulkCreate(question.Answer)
                .then(data => {
                    res.send(data);
                    //  mail();
                })
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || constants.USER_CREATION_ERROR
            });
        });
};
// Retrieve all Question from the database.
findAll = (async (req, res, next) => {
    const questions = await Question.findAll();
    successResponse(res, constants.SUCCESS_STATUS_CODE, constants.SUCCESS, questions);
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

module.exports = { create, helloQuestion, findOne, findAll, create }