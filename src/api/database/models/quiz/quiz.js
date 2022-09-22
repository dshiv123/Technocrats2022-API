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
            allowNull: true,
            defaultValue: 0
        },
        istimerenabled: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        quizcode: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        freezeTableName: true
    });

    return QuizMaster;
};