import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Cliente from './cliente.entity';

@Entity()
export default class Produto {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nome!: string

    @ManyToMany(() => Cliente, cliente => cliente.produtosConsumidos, {onDelete: "CASCADE"})
    clientes!: Cliente[];
}