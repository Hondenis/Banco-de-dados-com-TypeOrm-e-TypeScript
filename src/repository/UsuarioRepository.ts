import { AppDataSource } from "../banco";
import { Usuario } from "../entity/Usuario";
import { Repository } from "typeorm";

export class UsuarioRepository{
    private repositorioUsuario: Repository<Usuario>;

    constructor(){
        this.repositorioUsuario = AppDataSource.getRepository(Usuario);
    }

    async criarUsuario(usuario: Usuario): Promise<Usuario>{
        return await this.repositorioUsuario.save(usuario);
    }

    async listarUsuario(): Promise<Usuario[]>{
        return await this.repositorioUsuario.find();
    }

    async editarUsuario(id: number, dadosAtualizados: Partial<Usuario>): Promise<Usuario | null>{
        const usuario = await this.repositorioUsuario.findOne({ where: { id } });
        if(!usuario){
            throw new Error("Usuario não encontrado");
        }
        Object.assign(usuario, dadosAtualizados);
        return await this.repositorioUsuario.save(usuario);
    }

    async excluirUsuario(id: number): Promise<void>{
        const usuario = await this.repositorioUsuario.findOne({ where: { id }});
        if(!usuario){
            throw new Error("Usuario não encontrado");
        }
        await this.repositorioUsuario.remove(usuario);
    }

    async pesquisarUsuario(id: number): Promise<Usuario | null>{
        return await this.repositorioUsuario.findOne({ where: { id }});
    }
 }