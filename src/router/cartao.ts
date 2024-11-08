import express from 'express';
import { CartaoController } from '../controler/CartaoController';

const router = express.Router();
const cartaoController = new CartaoController();

router.post('/criar', (req, res) => {cartaoController.criarCartao(req, res)});
router.put('/:id', (req, res) => {cartaoController.editarCartao(req,res)});
router.delete('/:id', (req, res) => {cartaoController.excluirCartao(req, res)});
router.get('/listar', (req, res) => {cartaoController.listarCartao(req, res)});
router.get('/:id', (req, res) => {cartaoController.pesquisarCartao(req,res)});

export default router;