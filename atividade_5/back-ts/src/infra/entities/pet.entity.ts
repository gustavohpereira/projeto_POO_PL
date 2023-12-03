import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Cliente from './cliente.entity';

@Entity()
export default class Pet {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nome!: string

    @Column()
    tipo!: string

    @Column()
    raca!: string

    @Column()
    genero!: string

    @ManyToOne(() => Cliente, cliente => cliente.pets)
    cliente!: Cliente;

}