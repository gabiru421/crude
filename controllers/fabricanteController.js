import { Fabricante } from '../models/Fabricante.js';

export const criarFabricante = async (req, res) => {
    try {
        const fabricante = await Fabricante.create(req.body);
        return res.status(201).json(fabricante);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const listarFabricantes = async (req, res) => {
    try {
        const fabricantes = await Fabricante.findAll();
        return res.status(200).json(fabricantes);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    } 
}

export const buscarFabricante = async (req, res) => {
    try {
        const fabricante = await Fabricante.findByPk(req.params.id);

        if (!fabricante) {
            return res.status(404).json({ message: 'Fabricante não encontrado' });
        }

        return res.status(200).json(fabricante);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const atualizarFabricante = async (req, res) => {
    try {
        const fabricante = await Fabricante.findByPk(req.params.id);

        if (!fabricante) {
            return res.status(404).json({ message: 'Fabricante não encontrado' });
        }

        await fabricante.update(req.body);

        return res.status(200).json(fabricante);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deletarFabricante = async (req, res) => {
    try {
        const fabricante = await Fabricante.findByPk(req.params.id);

        if (!fabricante) {
            return res.status(404).json({ message: 'Fabricante não encontrado' });
        }

        await fabricante.destroy();

        return res.status(200).json({
            message: 'Fabricante deletado com sucesso'
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}