import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Cliente } from './cliente.entity';
import { Movimentacao } from './movimentacao.entity';

@Entity()
export class Conta {
  @PrimaryGeneratedColumn()
  conta_id: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.contas)
  cliente: Cliente;

  @Column()
  tipo_conta: string;

  @Column({ type: 'numeric', default: 0 })
  saldo: number;

  @Column({ type: 'date' })
  data_abertura: Date;

  @OneToMany(() => Movimentacao, (movimentacao) => movimentacao.conta)
  movimentacoes: Movimentacao[];
}
