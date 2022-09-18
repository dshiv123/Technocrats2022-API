module.exports = (sequelize, DataTypes) => {
    const QuestionMaster = sequelize.define('QuestionMaster', {
        questionId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        questiontext: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        subjectid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        questionTypeid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        questionmarks: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        questiontime: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isactive: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isMandatory: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });
    QuestionMaster.associate = function (models) {
        QuestionMaster.hasMany(models.AnswerMaster);
    };

    return QuestionMaster;
};


