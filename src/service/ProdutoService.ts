import { Produto } from "../entity/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoService{
    private produtoRepository: ProdutoRepository;

    constructor(){
        this.produtoRepository = new ProdutoRepository();
    }

    async criarProduto(produto: Produto): Promise<Produto>{
        return await this.produtoRepository.criarProduto(produto);
    }

    async listarProduto(): Promise<Produto[]>{
        return await this.produtoRepository.listarProduto();
    }

    async editarUsuario(id: number, produtoAtualizado: Partial<Produto>): Promise<Produto | null> {
        return await this.produtoRepository.editarProduto(id, produtoAtualizado);
    }

    async excluirProduto(id: number): Promise<void>{
        await this.produtoRepository.excluirProduto(id);
    }

    async pesquisarProduto(id: number): Promise<Produto | null> {
        return await this.produtoRepository.pesquisarProduto(id);
    }
}
