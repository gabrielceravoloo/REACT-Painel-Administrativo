// models/Alunos.js
module.exports = (sequelize, DataTypes) => {
    const Alunos = sequelize.define('Aluno', {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      curso: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    return Alunos;
  };
  