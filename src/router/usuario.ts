import express from 'express';
import { UsuarioController } from '../controler/UsuarioController';

const router = express.Router();
const usuarioController = new UsuarioController();

router.post('/criar', (req, res) => {usuarioController.criarUsuario(req, res)});
router.put('/:id', (req, res) => {usuarioController.editarUsuario(req, res)});
router.delete('/', (req, res) => {usuarioController.excluirUsuario(req, res)});
router.get('/listar', (req, res) => {usuarioController.listarUsuario(req, res)});
router.get('/pesquisar', (req, res) => {usuarioController.pesquisarUsuario(req, res)});

export default router;