module.exports = (sequelize, DataTypes) => {
    const UserQuizMapping = sequelize.define('UserQuizMapping', {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'userId',
            },
            allowNull: true
        },
        quizid: {
            type: DataTypes.INTEGER,
            references: {
                model: 'QuizMaster',
                key: 'quizid',
            },
            allowNull: true
        },


    }, {
        freezeTableName: true
    });

    return UserQuizMapping;
};