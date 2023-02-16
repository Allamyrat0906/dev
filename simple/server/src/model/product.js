const Sequelize = require("sequelize");
var sequelize = require("./database");
var category = require("./category");
var nametable = "Products";
var Products = sequelize.define(nametable, {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pName: Sequelize.STRING,
  pDescription: Sequelize.STRING,
  pCost: Sequelize.INTEGER,
  pImage: Sequelize.STRING,
  categoryId: {
    type: Sequelize.INTEGER,
    references: {
      model: category,
      key: "id",
    },
  },
});
Products.belongsTo(category);
module.exports = Products;
