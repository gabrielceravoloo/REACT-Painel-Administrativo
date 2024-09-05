// services/alunosService.js
const { Alunos } = require('../models');

const alunosService = {
    async novoAluno(nome, autor, valor) {
        return Alunos.create({ nome, autor, valor });
    },

    async getAlunos() {
        return Alunos.findAll();
    },

    async getAluno(id) {
        const aluno = await Alunos.findByPk(id);
        if (!aluno) 
            throw new Error('Aluno não encontrado');
        else 
            return aluno;
    },

    async alterarAluno(id, nome, autor, valor) {
        const aluno = await Alunos.findByPk(id);
        if (!aluno) throw new Error('Aluno não encontrado');
        aluno.nome = nome;
        aluno.autor = autor;
        aluno.valor = valor;
        return aluno.save();
    },

    async excluirAluno(id) {
        const aluno = await Alunos.findByPk(id);
        if (!aluno) throw new Error('Aluno não encontrado');
        return aluno.destroy();
    }
    
};

module.exports = alunosService;