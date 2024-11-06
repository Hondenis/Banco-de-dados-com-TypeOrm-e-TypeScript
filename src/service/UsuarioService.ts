import { Usuario } from "../entity/Usuario";
import { UsuarioRepository } from "../repository/UsuarioRepository";


export class UsuarioService{
    private usuarioRepository: UsuarioRepository;

    constructor(){
        this.usuarioRepository = new UsuarioRepository();
    }

    async criarUsuario(usuario: Usuario): Promise<Usuario>{
        return await this.usuarioRepository.criarUsuario(usuario);
    }

    async listarUsuario(): Promise<Usuario[]>{
        return await this.usuarioRepository.listarUsuario();
    }

    async editarUsuario(id: number, dadosAtualizados: Partial<Usuario>): Promise<Usuario | null> {
        return await this.usuarioRepository.editarUsuario(id, dadosAtualizados);
    }

    async excluirUsuario(id: number): Promise<void>{
        await this.usuarioRepository.excluirUsuario(id);
    }

    async pesquisarUsuario(id: number): Promise<Usuario | null> {
        return await this.usuarioRepository.pesquisarUsuario(id);
    }
}