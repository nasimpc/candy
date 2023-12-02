const Sequelize = require('sequelize');
const sequelize = new Sequelize('candy', 'root', 'internship', {
  dialect: 'mysql',
  host: 'localhost'

})

module.exports = sequelize;