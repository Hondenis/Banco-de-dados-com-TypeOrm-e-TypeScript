import { AppDataSource } from "../banco";
import { Produto } from "../entity/Produto";
import { Repository } from "typeorm";

export class ProdutoRepository{
    private repositorioProduto: Repository<Produto>;

    constructor(){
        this.repositorioProduto = AppDataSource.getRepository(Produto);
    }

    async criarProduto(produto: Produto): Promise<Produto>{
        return await this.repositorioProduto.save(produto);
    }

    async listarProduto(): Promise<Produto[]>{
        return await this.repositorioProduto.find();
    }

    async editarProduto(id: number, produtoAtualizado: Partial<Produto>): Promise<Produto | null>{
        const produto = await this.repositorioProduto.findOne({ where: {id}});
        if(!produto){
            throw new Error("Produto não encontrado.");
        }
        Object.assign(produto, produtoAtualizado);
        return await this.repositorioProduto.save(produto);
    }

    async excluirProduto(id: number): Promise<void>{
        const produto = await this.repositorioProduto.findOne({ where: {id}})
        if(!produto){
            throw new Error("Produto não encontrado.");
        }
        await this.repositorioProduto.remove(produto);
    }

    async pesquisarProduto(id: number): Promise<Produto | null>{
        return await this.repositorioProduto.findOne({ where: {id}});
    }
}