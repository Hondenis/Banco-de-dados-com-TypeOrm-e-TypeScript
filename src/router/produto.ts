import express from 'express';
import { ProdutoController } from '../controler/ProdutoController';

const router = express.Router();
const produtoController = new ProdutoController();

router.post('/criar', (req, res) => {produtoController.criarProduto(req, res)});
router.put('/:id', (req, res) => {produtoController.editarProduto(req,res)});
router.delete('/:id', (req, res) => {produtoController.excluirProduto(req, res)});
router.get('/listar', (req, res) => {produtoController.listarProduto(req, res)});
router.get('/:id', (req, res) => {produtoController.pesquisarProduto(req,res)});

export default router;