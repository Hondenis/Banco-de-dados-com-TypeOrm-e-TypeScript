import { CarrinhoCompras } from "../entity/CarrinhoCompras";
import { CarrinhoComprasRepository } from "../repository/CarrinhoComprasRepository";

export class CarrinhoComprasService{
    private carrinhoRepository: CarrinhoComprasRepository;

    constructor(){
        this.carrinhoRepository =  new CarrinhoComprasRepository();
    }

    async criarCarrinho(carrinho: CarrinhoCompras): Promise<CarrinhoCompras>{
        return await this.carrinhoRepository.criarCarrinho(carrinho);
    }

    async listarCarrinho(): Promise<CarrinhoCompras[]>{
        return await this.carrinhoRepository.listarCarrinho();
    }

    async editarCarrinho(id: number, carrinhoAtualizado: Partial<CarrinhoCompras>): Promise<CarrinhoCompras | null> {
        return await this.carrinhoRepository.editarCarrinho(id, carrinhoAtualizado);
    }

    async excluirCarrinho(id: number): Promise<void>{
        await this.carrinhoRepository.excluirCarrinho(id);
    }

    async pesquisarCarrinho(id: number): Promise<CarrinhoCompras | null> {
        return await this.carrinhoRepository.pesquisarCarrinho(id);
    }
}