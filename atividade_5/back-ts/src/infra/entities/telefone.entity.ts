import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Cliente from './cliente.entity';

@Entity()
export default class Telefone {
    
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column()
    ddd!: string

    @Column()
    numero!: string

    @ManyToOne(() => Cliente, cliente => cliente.telefones, {onDelete: "CASCADE"})
    cliente!: Cliente;
}