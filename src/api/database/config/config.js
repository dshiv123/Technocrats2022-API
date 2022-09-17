require('dotenv').config()
module.exports = {
  development: {
    username: "mysql_admin",
    password: "Cts@5050",
    database: "technovationdb",
    host: "127.0.0.1",
    dialect: "mysql",
    "logging": true,
    operatorsAliases: 0,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }

  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'mysql',
  },
  production: {
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
}
