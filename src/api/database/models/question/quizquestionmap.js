module.exports = (sequelize, DataTypes) => {
    const QuizMap = sequelize.define('QuizMap', {
        quizmapid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        quizid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        questionid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        questionorder: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    }, {
        freezeTableName: true
    });

    return QuizMap;
};