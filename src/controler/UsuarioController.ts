import { Usuario } from "../entity/Usuario";
import { UsuarioService } from "../service/UsuarioService";
import { Request, Response} from 'express'

export class UsuarioController{
    private usuarioService: UsuarioService;

    constructor(){
        this.usuarioService = new UsuarioService();
    }

    async criarUsuario(req: Request, res: Response): Promise<Response>{
        try {
            const usuario: Usuario = req.body;
            const novoUsuario = await this.usuarioService.criarUsuario(usuario);
            return res.status(201).json(novoUsuario);
        } catch (error){
            return res.status(400).json({ message: "Erro ao criar usuario.", error: error.message});
        }
    }

    async listarUsuario(req: Request, res: Response): Promise<Response>{
        try{
            const usuarios = await this.usuarioService.listarUsuario();
            return res.status(200).json(usuarios);
       } catch (error) {
        return res.status(500).json({ error: error.message});
       }
    }

    async editarUsuario(req: Request, res: Response): Promise<Response> {
        try{
        const id = parseInt(req.params.id);
        const dadosAtualizados = req.body;
        await this.usuarioService.editarUsuario(id, dadosAtualizados);
        return res.status(200).json({ message: `Usuario com ID ${id} atualizado com sucesso.`, dadosAtualizados});
       } catch (error) { 
        return res.status(400).json({ message: "Erro ao atualizar usuario.", error: error.message});
       }
    }

    async excluirUsuario(req: Request, res: Response): Promise<Response>{
        try {
            const id: number = parseInt(req.params.id);
            const usuario = await this.usuarioService.excluirUsuario(id);
            return res.status(200).json({ message: `Usuario ${id} removido com sucesso`, usuario});
        } catch (error) {
            return res.status(400).json({ message: "Erro ao remover usuario.", erro: error.message});
        }
    }

    async pesquisarUsuario(req: Request, res: Response): Promise<Response>{
        try {
            const id = parseInt(req.params.id);
            const usuario = await this.usuarioService.pesquisarUsuario(id);
            return res.status(200).json(usuario)
        } catch (error) {
            return res.status(500).json({ error: error.message});
        }
    }
}