const express = require("express");
const sequelize = require("./config/db");
const User = require("./src/models/user");

const app = express();

app.use(express.json());

// Sincronizar os modelos com o banco de dados
(async () => {
  try {
    await sequelize.sync();
    console.log("Models synchronized with the database.");
  } catch (error) {
    console.error("Error synchronizing models with the database:", error);
  }
})();

// Rotas, middlewares, e outras configurações...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});
