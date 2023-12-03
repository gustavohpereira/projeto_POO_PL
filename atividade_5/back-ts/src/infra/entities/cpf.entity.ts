import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Cliente from './cliente.entity';

@Entity()
export default class CPF {
    
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    valor!: string

    @Column()
    dataEmissao!: Date

    @OneToOne(() => Cliente, cliente => cliente.cpf)
    cliente!: Cliente
}