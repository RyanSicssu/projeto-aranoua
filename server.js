const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('API do Projeto Aranoua funcionando 🚀');
});

// Exemplo de rota para usuários
app.get('/usuarios', (req, res) => {
  res.json([
    { id: 1, nome: "Maria", email: "maria@email.com" },
    { id: 2, nome: "João", email: "joao@email.com" }
  ]);
});

// Exemplo de rota para consultas
app.post('/consultas', (req, res) => {
  const { paciente, medico, data } = req.body;
  res.json({ mensagem: "Consulta agendada com sucesso!", dados: { paciente, medico, data } });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
