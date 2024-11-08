import express from 'express';
import { EstoqueController } from '../controler/EstoqueController';

const router = express.Router();
const estoqueControler = new EstoqueController();

router.post('/criar', (req, res) => {estoqueControler.criarEstoque(req, res)});
router.put('/:id', (req, res) => {estoqueControler.editarEstoque(req, res)});
router.delete('/:id', (req, res) => {estoqueControler.excluirEstoque(req, res)});
router.get('/listar', (req, res) => {estoqueControler.listarEstoque(req, res)});
router.get('/:id', (req, res) => {estoqueControler.pesquisarEstoque(req, res)});

export default router;