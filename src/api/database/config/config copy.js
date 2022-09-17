require('dotenv').config()
module.exports = {
  development: {
    username: "technoadmin",
    password: "Pyramid@5050",
    database: "technovationdb",
    host: "technovationdb.mysql.database.azure.com",
    dialect: "mysql",
    port: 3306,
    "logging": true,
    operatorsAliases: 0,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    "ssl": true,
    "dialectOptions": {
      "ssl": {
        "require": true
      }
    }

  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'mysql',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'mysql',
  },
}
