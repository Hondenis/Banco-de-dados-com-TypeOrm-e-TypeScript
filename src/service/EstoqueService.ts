import { Repository } from "typeorm";
import { Estoque } from "../entity/Estoque";
import { EstoqueRepository } from "../repository/EstoqueRepository";

export class EstoqueService{
    private estoqueRepository: EstoqueRepository;

    constructor(){
        this.estoqueRepository = new EstoqueRepository();
    }

    async criarEstoque(estoque: Estoque): Promise<Estoque>{
        return await this.estoqueRepository.criarEstoque(estoque);
    }

    async listarEstoque(): Promise<Estoque[]>{
        return await this.estoqueRepository.listarEstoque();
    }

    async editarEstoque(id: number, estoqueAtualizado: Partial<Estoque>): Promise<Estoque | null> {
        return await this.estoqueRepository.editarEstoque(id, estoqueAtualizado);
    }

    async excluirEstoque(id: number): Promise<void>{
        await this.estoqueRepository.excluirEstoque(id);
    }

    async pesquisarEstoque(id: number): Promise<Estoque | null> {
        return await this.estoqueRepository.pesquisarEstoque(id);
    }
}