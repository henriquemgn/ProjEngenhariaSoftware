import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Conta } from './conta.entity';

@Entity()
export class Movimentacao {
  @PrimaryGeneratedColumn()
  movimentacao_id: number;

  @ManyToOne(() => Conta, (conta) => conta.movimentacoes)
  conta: Conta;

  @Column()
  tipo_movimentacao: string;

  @Column({ type: 'numeric' })
  valor: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data_movimentacao: Date;
}
