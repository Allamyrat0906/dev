var Sequelize = require("sequelize");
const sequelize = new Sequelize("lalala", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = sequelize;
