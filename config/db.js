const { Sequelize } = require("sequelize");
require("dotenv").config();

// Configurações de conexão com o banco de dados
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    // Outras opções de configuração, se necessário
  }
);

// Testar a conexão com o banco de dados
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Successful connection to the database.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

// Exportar a instância do Sequelize para uso em outros arquivos
module.exports = {
  sequelize,
  testConnection,
};
