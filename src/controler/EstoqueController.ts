import { Request, Response } from "express";
import { EstoqueService } from "../service/EstoqueService";
import { Estoque } from "../entity/Estoque";

export class EstoqueController {
    private estoqueService: EstoqueService;

    constructor() {
        this.estoqueService = new EstoqueService();
    }

    async criarEstoque(req: Request, res: Response): Promise<Response> {
        try {
            const { quantidadeEmEstoque} = req.body;
            const estoque = new Estoque(quantidadeEmEstoque);
            const novoEstoque = await this.estoqueService.criarEstoque(estoque);
            return res.status(201).json({message: "Estoque criado com sucesso", novoEstoque});
        } catch (error) {
            return res.status(400).json({ message: "Erro ao criar estoque.", error: error.message });
        }
    }

    async listarEstoque(req: Request, res: Response): Promise<Response> {
        try {
            const estoque = await this.estoqueService.listarEstoque();
            return res.status(200).json({message: "Estoque listado com sucesso.", estoque});
        } catch (error) {
            return res.status(500).json({ message: "Erro ao listar estoque.", error: error.message });
        }
    }

    async editarEstoque(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const dadosAtualizados = req.body;
            const estoqueAtualizado = await this.estoqueService.editarEstoque(id, dadosAtualizados);
            return res.status(200).json({message: `Estoque ${id} editado com sucesso`, estoqueAtualizado});
        } catch (error) {
            return res.status(404).json({ message: "Erro ao editar estoque.", error: error.message });
        }
    }

    async excluirEstoque(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            await this.estoqueService.excluirEstoque(id);
            return res.status(200).send({message: `Estoque ${id} removido com sucesso.`});
        } catch (error) {
            return res.status(404).json({ message: "Erro ao excluir estoque.", error: error.message });
        }
    }

    async pesquisarEstoque(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const estoque = await this.estoqueService.pesquisarEstoque(id);
            return res.status(200).json({message: `Pesquisa ${id} realizada com sucesso`, estoque});
        } catch (error) {
            return res.status(404).json({ message: "Erro ao pesquisar estoque.", error: error.message });
        }
    }
}
