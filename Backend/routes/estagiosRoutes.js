const express = require('express');
const estagiosService = require('../services/estagiosService');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.post('/nova', authenticateToken, async (req, res) => {
    const { nome, area, sobre, local, salario, alunoId } = req.body;

    try {
        const estagio = await estagiosService.novoEstagio(nome, area, sobre, local, salario, alunoId);
        res.status(201).json(estagio);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar o estagio!', error: error.message });
    }
});

router.get('/', authenticateToken, async (req, res) => {
    try {
        const estagios = await estagiosService.getestagios();
        res.json(estagios);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao retornar os registros de estagios!' });
    }
});

router.get('/editar/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    try {
        const estagio = await estagiosService.getEstagio(id);
        res.json(estagio);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao retornar o registro da estagio!' });
    }
});

router.put('/editar/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { quantidade } = req.body;

    try {
        const estagio = await estagiosService.alterarEstagio(id, quantidade);
        res.json(estagio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/excluir/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;

    try {
        await estagiosService.excluirEstagio(id);
        res.json({ message: 'estagio excluída com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
