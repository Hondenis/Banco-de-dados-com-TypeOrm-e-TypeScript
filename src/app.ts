import "reflect-metadata";
import { AppDataSource } from "./banco";
import { CarrinhoCompras } from "./entity/CarrinhoCompras";
import { Cartao } from "./entity/Cartao";
import { Endereco } from "./entity/Endereco";
import { Estoque } from "./entity/Estoque";
import { Produto } from "./entity/Produto";
import { Usuario } from "./entity/Usuario";
import { CarrinhoComprasRepository } from "./repository/CarrinhoComprasRepository";
import { CartaoRepository } from "./repository/CartaoRepository";
import { EnderecoRepository } from "./repository/EnderecoRepository";
import { EstoqueRepository } from "./repository/EstoqueRepository";
import { ProdutoRepository } from "./repository/ProdutoRepository";
import { UsuarioRepository } from "./repository/UsuarioRepository";


AppDataSource.initialize()
    .then(async () => {
       



    })
    .catch((error) => console.log("Erro ao inicializar o banco de dados:", error));
