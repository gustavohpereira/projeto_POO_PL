import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Cliente from './cliente.entity';

@Entity()
export default class RG {
    
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column()
    valor!: string

    @Column()
    dataEmissao!: Date

    @ManyToOne(() => Cliente, cliente => cliente.rgs, {onDelete: "CASCADE"})
    cliente!: Cliente;
}