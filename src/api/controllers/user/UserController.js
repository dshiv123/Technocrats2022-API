const db = require("../../database/models");
const mail = require("../../util/common-util/mail.util");
const [successResponse, errorsResponse] = require("../../util/common-util/repsonse");
const constants = require("../../util/common-util/constatnt/constants");

const User = db.User;
create = (req, res) => {
    if (!req.body.userData.email) {
        return res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const user = req.body.userData;
    // Save User in the database
    User.create(user)
        .then(data => {
            res.send(data);
            //  mail();
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || constants.USER_CREATION_ERROR
            });
        });
};
// Retrieve all User from the database.
findAll = (async (req, res, next) => {
    const users = await User.findAll();
    successResponse(res, 200, constants.USER_LIST, users);
});
// Find a single User with an id
findOne = (req, res) => {
};
// Update a User by the id in the request
update = (req, res) => {
    const user = req.body.user;


};
// Delete a User with the specified id in the request
deleteUser = (req, res) => {
    return User.destroy({
        where: { userid: req.params.userID }
    }).then(data => {
        successResponse(res, 10000, `${constants.USER_DELETED_SUCCESFULLY}: ${req.params.userID}`);

    })
        .catch(err => {
            errorsResponse(res, res.statusCode, `${constants.USER_DELETE_ERROR} ${req.params.userID}- ${err.message}`);

        });

};
// Delete all User from the database.
deleteAll = (req, res) => {

};
// Find all published User
findAllPublished = (req, res) => {

};
helloUser = (req, res, next) => {
    res.send(`User ${constants.SERVICE_WORKING_FINE}`);
};

module.exports = { create, helloUser, findAllPublished, deleteUser, update, findOne, findAll, create }