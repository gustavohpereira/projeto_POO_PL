import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import Cliente from './cliente.entity';

@Entity()
export default class Servico {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nome!: string

    @ManyToMany(() => Cliente, cliente => cliente.servicosConsumidos)
    clientes!: Cliente[];
}