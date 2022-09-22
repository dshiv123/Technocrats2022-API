module.exports = (sequelize, DataTypes) => {
    const QuizMaster = sequelize.define('QuizMaster', {
        quizid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        quizname: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        subjectid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quizstatus: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quiztime: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        istimerenabled: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quizcode: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    return QuizMaster;
};