import express from 'express';
import { UsuarioController } from '../controler/UsuarioController';

const router = express.Router();
const usuarioController = new UsuarioController();

