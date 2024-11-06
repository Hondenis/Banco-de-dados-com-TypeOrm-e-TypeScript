import { Repository } from "typeorm";
import { AppDataSource } from "../banco";
import { Estoque } from "../entity/Estoque";

export class EstoqueRepository {
    private repositorioEstoque: Repository<Estoque>;

    constructor() {
        this.repositorioEstoque = AppDataSource.getRepository(Estoque);
    }

    async criarEstoque(estoque: Estoque): Promise<Estoque> {
        return await this.repositorioEstoque.save(estoque);
    }

    async listarEstoque(): Promise<Estoque[]> {
        return await this.repositorioEstoque.find();
    }

    async editarEstoque(id: number, estoqueAtualizado: Partial<Estoque>): Promise<Estoque | null>{
        const estoque = await this.repositorioEstoque.findOne({ where: { id } });
        if (!estoque) {
            throw new Error("Estoque não encontrado.");
        }
        Object.assign(estoque, estoqueAtualizado);
        return await this.repositorioEstoque.save(estoque);
    }

    async excluirEstoque(id: number): Promise<void> {
        const estoque = await this.repositorioEstoque.findOne({ where: { id } });
        if (!estoque) {
            throw new Error("Estoque não encontrado.");
        }
        await this.repositorioEstoque.remove(estoque);
    }

    async pesquisarEstoque(id: number): Promise<Estoque | null> {
        return await this.repositorioEstoque.findOne({ where: { id } });
    }
}
