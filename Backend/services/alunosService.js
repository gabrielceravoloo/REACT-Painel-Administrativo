// services/alunosService.js
const { Alunos } = require('../models');

const alunosService = {
    async novoAluno(nome, email, nascimento, curso) {
        return Alunos.create({ nome, email, nascimento, curso });
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

    async alterarAluno(id, nome, email, nascimento, curso) {
        const aluno = await Alunos.findByPk(id);
        if (!aluno) throw new Error('Aluno não encontrado');
        aluno.nome = nome;
        aluno.email = email;
        aluno.nascimento = nascimento;
        aluno.curso = curso;
        return aluno.save();
    },

    async excluirAluno(id) {
        const aluno = await Alunos.findByPk(id);
        if (!aluno) throw new Error('Aluno não encontrado');
        return aluno.destroy();
    }
    
};

module.exports = alunosService;