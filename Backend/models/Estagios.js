// models/Estagio.js
module.exports = (sequelize, DataTypes) => {
    const Estagios = sequelize.define('estagios', {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      area: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sobre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      local: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      alunoId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'Alunos',
          key: 'id',
        },
      },
    });
  
    Estagios.associate = (models) => {
      Estagios.belongsTo(models.Alunos, {
        foreignKey: 'alunoId',
        as: 'aluno',
      });
    };
  
    return Estagios;
  };
  