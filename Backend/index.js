const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes');
const alunosRoutes = require('./routes/alunosRoutes');
const estagiosRoutes = require('./routes/estagiosRoutes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

// Sincroniza o banco de dados. CUIDADO! Quando for igual a TRUE, todas as tabelas serão apagadas e recriadas
sequelize.sync({ force: false })
  .then(() => {
    console.log('');
    console.log('Banco de dados sincronizado!');
  })
  .catch(error => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/alunos', alunosRoutes);
app.use('/api/estagios', estagiosRoutes); 

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});


