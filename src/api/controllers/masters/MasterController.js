const db = require("../../database/models");
const mail = require("../../util/common-util/mail.util");
const [successResponse, errorsResponse] = require("../../util/common-util/repsonse");
const constants = require("../../util/common-util/constatnt/constants");
const { QueryTypes } = require('sequelize');
const sequelize = db.sequelize;
getquizcategory = (async (req, res, next) => {
    const questions = await sequelize.query("SELECT subjectid,subjectname FROM subject", { type: QueryTypes.SELECT });
    successResponse(res, constants.SUCCESS_STATUS_CODE, constants.SUCCESS, questions);
});

helloMaster = (req, res, next) => {
    res.send(`Master ${constants.SERVICE_WORKING_FINE}`);
};

module.exports = { helloMaster, getquizcategory }