// services/estagiosService.js
const { Estagios, Alunos } = require('../models');

const estagiosService = {

    async novaCompra(livroId, quantidade) {
        const livro = await Alunos.findByPk(livroId);
        if (!livro) {
            throw new Error('Livro não encontrado');
        }

        const compra = await Estagios.create({
            livroId,
            quantidade,
            dataCompra: new Date(),
        });

        return compra;
    },

    async getEstagios() {
        return await Estagios.findAll({ include: 'livro' });
    },

    async getCompra(id) {
        const compra = await Estagios.findByPk(id, { include: 'livro' });
        if (!compra) {
            throw new Error('Compra não encontrada');
        }
        return compra;
    },

    async alterarCompra(id, quantidade) {
        const compra = await Estagios.findByPk(id);
        if (!compra) {
            throw new Error('Compra não encontrada');
        }

        compra.quantidade = quantidade;
        await compra.save();

        return compra;
    },

    async excluirCompra(id) {
        const compra = await Estagio.findByPk(id);
        if (!compra) {
            throw new Error('Compra não encontrada');
        }

        await compra.destroy();
    }

};

module.exports = estagiosService;