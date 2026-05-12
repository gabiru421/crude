import { Router } from "express";
import {
    criarCategoria,
    listarCategorias,
    buscarCategoria,
    atualizarCategoria,
    deletarCategoria
} from "../controllers/categoriaController.js";

const router = Router();

/**
 * @swagger
 * /categoria:
 *   post:
 *     summary: Cria uma categoria
 *     tags: [Categorias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoria criada
 *       500:
 *         description: Erro ao criar categoria
 */
router.post("/categoria", criarCategoria)

/**
 * @swagger
 * /categoria:
 *   get:
 *     summary: Lista todas as categorias
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Lista de categorias
 *       500:
 *         description: Erro ao listar categorias
 */
router.get("/categoria", listarCategorias)

/**
 * @swagger
 * /categoria/{id}:
 *   get:
 *     summary: Busca uma categoria por ID
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da categoria
 *     responses:
 *       200:
 *         description: Categoria encontrada
 *       404:
 *         description: Categoria não encontrada
 *       500:
 *         description: Erro ao buscar categoria
 */
router.get("/categoria/:id", buscarCategoria)

/**
 * @swagger
 * /categoria/{id}:
 *   put:
 *     summary: Atualiza uma categoria
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da categoria
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoria atualizada
 *       404:
 *         description: Categoria não encontrada
 *       500:
 *         description: Erro ao atualizar categoria
 */
router.put("/categoria/:id", atualizarCategoria)

/**
 * @swagger
 * /categoria/{id}:
 *   delete:
 *     summary: Remove uma categoria
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da categoria
 *     responses:
 *       200:
 *         description: Categoria removida
 *       404:
 *         description: Categoria não encontrada
 *       500:
 *         description: Erro ao remover categoria
 */
router.delete("/categoria/:id", deletarCategoria)

export default router;