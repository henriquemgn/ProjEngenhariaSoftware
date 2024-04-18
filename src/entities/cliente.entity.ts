import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Conta } from './conta.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  cliente_id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column({ type: 'date' })
  data_nascimento: Date;

  @OneToMany(() => Conta, (conta) => conta.cliente)
  contas: Conta[];
}
