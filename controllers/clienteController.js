import { Cliente } from '../models/Cliente.js';

export const criarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        return res.status(201).json(cliente);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const listarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        return res.status(200).json(clientes);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    } 
}

export const buscarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);

        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        return res.status(200).json(cliente);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const atualizarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);

        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        await cliente.update(req.body);

        return res.status(200).json(cliente);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deletarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);

        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        await cliente.destroy();

        return res.status(200).json({
            message: 'Cliente deletado com sucesso'
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}