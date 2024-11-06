import { Cartao } from "../entity/Cartao";
import { CartaoRepository } from "../repository/CartaoRepository";

export class CartaoService{
    private cartaoRepository: CartaoRepository;

    constructor(){
        this.cartaoRepository = new CartaoRepository();
    }

    async criarCartao(cartao: Cartao): Promise<Cartao>{
        return await this.cartaoRepository.criarCartao(cartao);
    }

    async listarCartao(): Promise<Cartao[]>{
        return await this.cartaoRepository.listarCartao();
    }

    async editarCartao(id: number, cartaoAtualizado: Partial<Cartao>): Promise<Cartao | null> {
        return await this.cartaoRepository.editarCartao(id, cartaoAtualizado);
    }

    async excluirCartao(id: number): Promise<void>{
        await this.cartaoRepository.excluirCartao(id);
    }

    async pesquisarCartao(id: number): Promise<Cartao | null> {
        return await this.cartaoRepository.pesquisarCartao(id);
    }
}