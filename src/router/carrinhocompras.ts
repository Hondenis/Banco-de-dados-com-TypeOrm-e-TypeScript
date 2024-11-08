import express from 'express';
import { CarrinhoComprasController } from '../controler/CarrinhoComprasController';

const router = express.Router();
const carrinhoController = new CarrinhoComprasController();

router.post('/criar', (req, res) => {carrinhoController.criarCarrinho(req, res)});
router.put('/:id', (req, res) => {carrinhoController.editarCarrinho(req,res)});
router.delete('/:id', (req, res) => {carrinhoController.excluirCarrinho(req, res)});
router.get('/listar', (req, res) => {carrinhoController.listarCarrinho(req, res)});
router.get('/:id', (req, res) => {carrinhoController.pesquisarCarrinho(req,res)});

export default router;