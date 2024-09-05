const sequelize = require('../config/database');

// Importar os modelos
const Usuarios = require('./Usuarios');
const Alunos = require('./Alunos');
const Estagios = require('./Estagios');

// Inicializar os modelos
const models = {
  Usuarios: Usuarios(sequelize, sequelize.Sequelize.DataTypes),
  Alunos: Alunos(sequelize, sequelize.Sequelize.DataTypes),
  Estagios: Estagios(sequelize, sequelize.Sequelize.DataTypes),
};

// Configurar as associações
Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = { sequelize, ...models };
