const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");

const Bill = sequelize.define("Bill", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Bill.belongsTo(User); // Uma conta de restaurante pertence a um usuário
User.hasMany(Bill); // Um usuário pode ter várias contas de restaurante

module.exports = Bill;
