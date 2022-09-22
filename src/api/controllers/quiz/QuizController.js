const db = require("../../database/models");
const mail = require("../../util/common-util/mail.util");
const [successResponse, errorsResponse] = require("../../util/common-util/repsonse");
const constants = require("../../util/common-util/constatnt/constants");
const data = require('./quizmap.json');
const { QueryTypes } = require('sequelize');

const Quiz = db.QuizMaster;
const sequelize = db.sequelize;
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
quizQuestionMapping = (async (req, res, next) => {
    const query = `SELECT distinct quizmaster.quizname,sub.subjectname,
qtype.questiontypename,
qmaster.questionid,qmaster.questiontext,ans.answerid,ans.answer,ans.iscorrect
,qmaster.questionmarks,qmaster.questiontime
FROM quizmaster JOIN quizmap qmap
ON quizmaster.quizid = qmap.quizid
JOIN questionmaster qmaster
on qmap.questionid = qmaster.questionid
JOIN questiontype qtype on
qmaster.questiontypeid = qtype.questiontypeid
JOIN subject sub on
qmaster.subjectid = sub.subjectid
JOIN answermaster ans on
ans.questionid = qmaster.questionid
WHERE quizmaster.quizid=11
order by qmaster.questionid;; `;
    const queryInfo = await sequelize.query(query, { type: QueryTypes.SELECT });
    successResponse(res, constants.SUCCESS_STATUS_CODE, constants.SUCCESS, queryInfo);


});
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

const findQuizbyCode = async (req, res, next) => {
    await Quiz.findOne({
        where: { quizcode: req.body.quizcode },
    }).then((quiz) => {
        if (quiz) {
            successResponse(res, 10000, "Quiz Detail", quiz,);

        } else {
            errorsResponse(res, 10001, "No quiz found")
        }
    }).catch(err => {
        errorsResponse(res, 10001, "Error", err)
    })
};
findAllQuiz = (async (req, res, next) => {
    const users = await Quiz.findAll();
    successResponse(res, 200, constants.USER_LIST, users);
});
// Find all published Quiz
findAllPublished = (req, res) => {

};
helloQuiz = (req, res, next) => {
    res.send(`Quiz ${constants.SERVICE_WORKING_FINE}`);
};

module.exports = { create, helloQuiz, findAllPublished, deleteQuiz, update, findOne, findAll, quizQuestionMapping, findAllQuiz, findQuizbyCode }