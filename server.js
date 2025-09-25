const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas de teste
app.get("/api", (req, res) => {
  res.json({ message: "Servidor rodando 🚀" });
});

// Rota de usuários
app.get("/usuarios", (req, res) => {
  res.json([
    { id: 1, nome: "Maria", email: "maria@email.com" },
    { id: 2, nome: "João", email: "joao@email.com" }
  ]);
});

// Rota de consultas
app.post("/consultas", (req, res) => {
  const { paciente, medico, data } = req.body;
  res.json({
    mensagem: "Consulta agendada com sucesso!",
    dados: { paciente, medico, data }
  });
});

// Servir arquivos estáticos (frontend em /public)
app.use(express.static(path.join(__dirname, "public")));

// Rota coringa para SPA (React, Angular, etc.)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
