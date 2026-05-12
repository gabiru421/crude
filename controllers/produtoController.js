import { Produto } from '../models/Produto.js';

export const criarProduto = async (req, res) => {
    try {
        const produto = await Produto.create(req.body);
        return res.status(201).json(produto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const listarProdutos = async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        return res.status(200).json(produtos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    } 
}

export const buscarProduto = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);

        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        return res.status(200).json(produto);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const atualizarProduto = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);

        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        await produto.update(req.body);

        return res.status(200).json(produto);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deletarProduto = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);

        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        await produto.destroy();

        return res.status(200).json({
            message: 'Produto deletado com sucesso'
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}