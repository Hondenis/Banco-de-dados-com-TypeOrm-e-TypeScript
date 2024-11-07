import { CarrinhoCompras } from "../entity/CarrinhoCompras";
import { CarrinhoComprasService } from "../service/CarrinhoComprasService";
import { Request, Response} from 'express';

export class CarrinhoComprasController{
    private carrinhoService: CarrinhoComprasService;

    constructor(){
        this.carrinhoService = new CarrinhoComprasService();
    }

    async criarCarrinho(req: Request, res: Response): Promise<Response> {
        try {
            const {usuarioId, produto} = req.body;
            const novoCarrinho = await this.carrinhoService.criarCarrinho(usuarioId, produto);
            return res.status(201).json({message: "Carrinho criado com sucesso.", novoCarrinho});
        } catch (error) {
            return res.status(400).json({message: "Erro ao criar carrinho.", error: error.message});
        }
    }

    async listarCarrinho(req: Request, res: Response): Promise<Response> {
        try {
            const carrinho = await this.carrinhoService.listarCarrinho();
            return res.status(200).json(carrinho)
        } catch (error) {
            return res.status(400).json({message: "Lista de carrinhos não encontrada.", error: error.message});
        }
    }

    async editarCarrinho(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const carrinhosAtualizados = req.body;
            await this.carrinhoService.editarCarrinho(id, carrinhosAtualizados);
            return res.status(200).json({ message: `Carrinho ${id} editado com suscesso.`, carrinhosAtualizados});
        } catch (error) {
            return res.status(400).json({ message: "Error ao editar carrinho.", error: error.message});
        }
    }

    async excluirCarrinho(req: Request, res: Response): Promise<Response>{
        try {
            const id: number = parseInt(req.params.id);
            const carrinho = await this.carrinhoService.excluirCarrinho(id);
            return res.status(200).json({ message: `Carrinho ${id} removido com sucesso`, carrinho});
        } catch (error) {
            return res.status(400).json({ message: "Erro ao remover carrinho.", erro: error.message});
        }
    }

    async pesquisarCarrinho(req: Request, res: Response): Promise<Response>{
        try {
            const id = parseInt(req.params.id);
            const carrinho = await this.carrinhoService.pesquisarCarrinho(id);
            return res.status(200).json({message: `Pesquisa ${id} realizada com sucesso`, carrinho});
        } catch (error) {
            return res.status(404).json({ message: "Erro ao pesquisar carrinho.", error: error.message });
        }
    }
}
