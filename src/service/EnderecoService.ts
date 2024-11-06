import { Endereco } from "../entity/Endereco";
import { EnderecoRepository } from "../repository/EnderecoRepository";

export class EnderecoService{
    private enderecoRepository: EnderecoRepository;

    constructor(){
        this.enderecoRepository = new EnderecoRepository();
    }

    async criarEndereco(endereco: Endereco): Promise<Endereco>{
        return await this.enderecoRepository.criarEndereco(endereco);
    }

    async listarEndereco(): Promise<Endereco[]>{
        return await this.enderecoRepository.listarEndereco();
    }

    async editarEndereco(id: number, enderecoAtualizado: Partial<Endereco>): Promise<Endereco | null> {
        return await this.enderecoRepository.editarEndereco(id, enderecoAtualizado);
    }

    async excluirEndereco(id: number): Promise<void>{
        await this.enderecoRepository.excluirEndereco(id);
    }

    async pesquisarEndereco(id: number): Promise<Endereco | null> {
        return await this.enderecoRepository.pesquisarEndereco(id);
    }   
}
