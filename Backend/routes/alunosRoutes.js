const express = require('express');
const alunosService = require('../services/alunosService');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.post('/novo', authenticateToken, async (req, res) => {
    const { nome, email, nascimento, curso } = req.body;

    try {
        const aluno = await alunosService.novoAluno(nome, email, nascimento, curso);
        res.status(201).json(aluno);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar o aluno!' });
    }
});

router.get('/', authenticateToken, async (req, res) => {
    try {
        const alunos = await alunosService.getAlunos();
        res.json(alunos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao retornar os registros dos alunos!' });
    }
});

router.get('/editar/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    try {
        const aluno = await alunosService.getAluno(id);
        res.json(aluno);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao retornar o registro do aluno!' });
    }
});

router.put('/editar/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { nome, email, nascimento, curso } = req.body;

    try {
        const aluno = await alunosService.alterarAluno(id, nome, email, nascimento, curso);
        res.json(aluno);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/excluir/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;

    try {
        await alunosService.excluirAluno(id);
        res.json({ message: 'Aluno excluído com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

