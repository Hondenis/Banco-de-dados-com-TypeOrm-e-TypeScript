import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pessoa } from "./Pessoa";
import { Endereco } from "./Endereco";
import { Cartao } from "./Cartao";
import { CarrinhoCompras } from "./CarrinhoCompras";

@Entity()
export class Usuario extends Pessoa{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    telefone: string;

    @OneToMany(() => Endereco, (endereco) => endereco.usuario)
    @JoinTable()
    endereco: Endereco[];

    @OneToMany(() => Cartao, (cartao) => cartao.usuario)
    @JoinTable()
    cartao: Cartao[];

    @OneToMany(() => CarrinhoCompras, (carrinhoCompras) => carrinhoCompras.usuario)
    compras: CarrinhoCompras[];

    constructor(nome?: string, email?: string, cpf?: string, carrinhoCompras?: CarrinhoCompras){
        super(nome, email, cpf);
        
}

}