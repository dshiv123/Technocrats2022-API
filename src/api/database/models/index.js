'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'production';
const config = require('../../database/config/config')[env];
const db = {};
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config, {
    logging: console.log
  });
}
const getAllDBModels = function (dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath)
    .filter(file => {
      return (file !== basename);
    })
  arrayOfFiles = arrayOfFiles || []
  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllDBModels(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(file)
      const model = require(path.join(dirPath, file))(sequelize, Sequelize.DataTypes)
      db[model.name] = model;
    }
  })
  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  return arrayOfFiles
}
getAllDBModels(__dirname);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;