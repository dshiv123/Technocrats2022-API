const db = require("../../database/models");
const [successResponse, errorsResponse] = require("../../util/common-util/repsonse");
const constants = require("../../util/common-util/constatnt/constants");
const { QueryTypes } = require('sequelize');

const UserQuizMap = db.UserQuizMapping;
const QuizMaster = db.QuizMaster;

// Retrieve all Quizmapping from the database.
findAllUserQuiz = (async (req, res, next) => {
    let quizDetail = [];
    let quizmap = [];

    const quizsmapping = await UserQuizMap.findAll(({
        where: { userID: req.body.userid },
    }));
    for (quizs of quizsmapping) {
        quizResult = await QuizMaster.findAll
            ({
                where: { quizid: quizs.dataValues.quizid },
            })
        if (quizResult) {
            quizResult.forEach(quizText => {
                quizDetail.push({

                    quizid: quizText.quizid,
                    quizname: quizText.quizname,
                    quizstatus: quizText.quizstatus
                })
            });
            quizmap.push({
                quizMap: quizs,
                quizDetail: quizDetail

            })
            quizDetail = [];
        }
    };
    successResponse(res, constants.SUCCESS_STATUS_CODE, `${constants.Quiz, constants.LIST}`, quizmap);
});

helloQuestion = (req, res, next) => {
    res.send(`User Quiz mapping ${constants.SERVICE_WORKING_FINE}`);
};

module.exports = { findAllUserQuiz, helloQuestion }