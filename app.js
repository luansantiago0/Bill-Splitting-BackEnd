const express = require("express");

const app = express();

app.use(express.json());

// Rotas, middlewares, e outras configurações...

// Rota para testar a conexão com o banco de dados
app.get("/test-database", async (req, res) => {
  try {
    // Consulta simples para verificar a conexão com o banco de dados
    const result = await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({ message: "Database connection successful" });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    res.status(500).json({ error: "Database connection failed" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});
