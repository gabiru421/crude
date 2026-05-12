import { Categoria } from '../models/Categoria.js';

export const criarCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.create(req.body);
        return res.status(201).json(categoria);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const listarCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        return res.status(200).json(categorias);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const buscarCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);

        if (!categoria) {
            return res.status(404).json({ message: 'Categoria não encontrada' });
        }

        return res.status(200).json(categoria);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const atualizarCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);

        if (!categoria) {
            return res.status(404).json({ message: 'Categoria não encontrada' });
        }

        await categoria.update(req.body);

        return res.status(200).json(categoria);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deletarCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);

        if (!categoria) {
            return res.status(404).json({ message: 'Categoria não encontrada' });
        }

        await categoria.destroy();

        return res.status(200).json({
            message: 'Categoria deletada com sucesso'
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}