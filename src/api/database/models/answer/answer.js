module.exports = (sequelize, DataTypes) => {
    const AnswerMaster = sequelize.define('AnswerMaster', {
        answerid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        questionid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {         // User belongsTo Company 1:1
                model: 'QuestionMaster',
                key: 'questionid'
            }
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false

        },
        iscorrect: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    },

        {
            freezeTableName: true
        });

    return AnswerMaster;
};