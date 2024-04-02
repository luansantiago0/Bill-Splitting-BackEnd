const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const register = async (req, res) => {
  try {
    const { email, password, emailConfirmation } = req.body;

    // Verifica se o email e a confirmação do email coincidem
    if (email !== emailConfirmation) {
      return res.status(400).send("Email and email confirmation do not match");
    }

    // Verifica se o email já está registrado
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).send("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({ data: { email, password: hashedPassword } });

    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error registering user");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).send("User not found");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).send("Invalid password");
    }
    const token = jwt.sign({ userId: user.id }, "secret_key");
    res.status(200).send({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error logging in");
  }
};

module.exports = {
  register,
  login,
};
