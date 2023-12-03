import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import CPF from './cpf.entity';
import RG from './rg.entity';
import Telefone from './telefone.entity';
import Pet from './pet.entity';
import Produto from './produto.entity';
import Servico from './servico.entity';

@Entity()
export default class Cliente {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nome!: string

    @Column()
    nomeSocial!: string

    @OneToOne(() => CPF, cpf => cpf.cliente, { cascade: true, onDelete: "CASCADE" })
    @JoinColumn()
    cpf!: CPF

    @OneToMany(() => RG, rg => rg.cliente, { cascade: true, onDelete: "CASCADE" })
    rgs!: RG[]

    @CreateDateColumn()
    dataCadastro!: Date

    @OneToMany(() => Telefone, telefone => telefone.cliente, { cascade: true, onDelete: "CASCADE" })
    telefones!: Telefone[]

    @ManyToMany(() => Produto, produto => produto.clientes)
    @JoinTable()
    produtosConsumidos!: Produto[];

    @ManyToMany(() => Servico, servico => servico.clientes)
    @JoinTable()
    servicosConsumidos!: Servico[];

    @OneToMany(() => Pet, pet => pet.cliente, { cascade: true, onDelete: "CASCADE" })
    pets!: Pet[]
}