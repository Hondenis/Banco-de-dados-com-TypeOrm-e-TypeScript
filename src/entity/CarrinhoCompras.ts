import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, Collection } from "typeorm";
import { Usuario } from "./Usuario";
import { Produto } from "./Produto";

@Entity()
export class CarrinhoCompras{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    valorUnitario: string;

    @Column()
    quantidade: number;

    @Column()
    valorTotal: string;

    @Column({default: "Ativo"})
    status: string; // Controla o status do carrinho

    @ManyToOne(() => Usuario, (usuario) => usuario.compras)
    usuario: Usuario;
    
    @ManyToMany(() => Produto, (produto) => produto.carrinhoCompras)
    @JoinTable()
    produto: Produto[];

    constructor(valorUnitario?: string, quantidade?: number, valorTotal?: string){
        this.valorUnitario = valorUnitario;
        this.quantidade = quantidade;
        this.valorTotal = valorTotal;
    }
}