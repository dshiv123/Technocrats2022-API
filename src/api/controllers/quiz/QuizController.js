const db = require("../../database/models");
const mail = require("../../util/common-util/mail.util");
const [successResponse, errorsResponse] = require("../../util/common-util/repsonse");
const constants = require("../../util/common-util/constatnt/constants");
const Quiz = db.QuizMaster;
create = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const quiz = req.body;
    // Save Quiz in the database
    Quiz.create(quiz)
        .then(data => {
            successResponse(res, constants.SUCCESS_STATUS_CODE, `${constants.Quiz}`, data);
            // res.send(data);
            //  mail();
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message
            });
        });
};
// Retrieve all Quiz from the database.
findAll = (async (req, res, next) => {
    const quizs = await Quiz.findAll();
    successResponse(res, constants.SUCCESS_STATUS_CODE, `${constants.Quiz, constants.LIST}`, quizs);
});
// Find a single Quiz with an id
findOne = (req, res) => {
};
// Update a Quiz by the id in the request
update = (req, res) => {
    const quiz = req.body.quiz;


};
// Delete a Quiz with the specified id in the request
deleteQuiz = (req, res) => {
    return Quiz.destroy({
        where: { quizid: req.params.quizID }
    }).then(data => {
        successResponse(res, 10000, `${constants.Quiz, constants.DELETED_SUCCESFULLY}: ${req.params.quizID}`);

    })
        .catch(err => {
            errorsResponse(res, res.statusCode, `${constants.USER_DELETE_ERROR} ${req.params.quizID}- ${err.message}`);

        });

};
// Delete all Quiz from the database.
deleteAll = (req, res) => {

};
// Find all published Quiz
findAllPublished = (req, res) => {

};
helloQuiz = (req, res, next) => {
    res.send(`Quiz ${constants.SERVICE_WORKING_FINE}`);
};

module.exports = { create, helloQuiz, findAllPublished, deleteQuiz, update, findOne, findAll }