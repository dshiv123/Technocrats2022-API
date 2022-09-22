module.exports = (sequelize, DataTypes) => {
    const QuestionMaster = sequelize.define('QuestionMaster', {
        questionid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        questiontext: {
            type: DataTypes.STRING,
            allowNull: false
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
            allowNull: true

        },
        questionmarks: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 10
        },
        questiontime: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10
        },
        isactive: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: true
        },
        isMandatory: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });
    // QuestionMaster.associate = function (models) {
    //     QuestionMaster.hasMany(models.AnswerMaster);
    // };
    // QuestionMaster.associate = function (models) {
    //     //  QuestionMaster.belongsTo(models.Company, { foreignKey: 'companyId', as: 'company' })
    //     QuestionMaster.belongsToMany(models.AnswerMaster, { through: 'models.AnswerMaster', foreignKey: 'questionid', as: 'qid1' })
    // };

    QuestionMaster.associate = function (models) {
        QuestionMaster.hasMany(models.AnswerMaster, { foreignKey: 'questionid', as: 'questionid' })
    };
    return QuestionMaster;
};


