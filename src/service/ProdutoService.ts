import { Produto } from "../entity/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { EstoqueRepository } from "../repository/EstoqueRepository";

export class ProdutoService{
    private produtoRepository: ProdutoRepository;
    private estoqueRepository: EstoqueRepository;

    constructor(){
        this.produtoRepository = new ProdutoRepository();
        this.estoqueRepository = new EstoqueRepository();
    }

    async criarProduto(produto: Produto, estoqueId: number): Promise<Produto>{
        const estoque = await this.estoqueRepository.pesquisarEstoque(estoqueId);

        if (!estoque) {
            throw new Error("Estoque não encontrado")
        }

        produto.estoque = estoque;
        
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
