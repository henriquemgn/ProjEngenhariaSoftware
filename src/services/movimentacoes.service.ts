/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conta } from '../entities/conta.entity';
import { Movimentacao } from '../entities/movimentacao.entity';

@Injectable()
export class MovimentacoesService {
  constructor(
    @InjectRepository(Movimentacao)
    private readonly movimentacaoRepository: Repository<Movimentacao>,
    @InjectRepository(Conta)
    private readonly contaRepository: Repository<Conta>,
  ) {}

  async cadastroMovimentacao(contaId: number, movimentacao: Movimentacao) {
    const conta = await this.contaRepository.findOne({
      where: { conta_id: contaId },
      relations: ['movimentacoes'],
    });
    if (!conta) {
      throw new Error('Conta não encontrada');
    }

    if (movimentacao.tipo_movimentacao === 'saque') {
      if (Number(conta.saldo) < movimentacao.valor) {
        throw new Error('Saldo insuficiente');
      }
      conta.saldo = Number(conta.saldo) - movimentacao.valor;
    } else if (movimentacao.tipo_movimentacao === 'deposito') {
      conta.saldo = Number(conta.saldo) + movimentacao.valor;
    } else {
      throw new Error('Tipo de movimentação inválido');
    }

    movimentacao.conta = conta;
    await this.contaRepository.save(conta);
    return this.movimentacaoRepository.save(movimentacao);
  }

  async consultaMovimentacoes(contaId: number): Promise<Movimentacao[]> {
    const conta = await this.contaRepository.findOne({
      where: { conta_id: contaId },
      relations: ['movimentacoes'],
    });
    if (!conta) {
      throw new Error('Conta não encontrada');
    }
    return conta.movimentacoes;
  }
  
  async consultaTodasMovimentacoes(): Promise<Movimentacao[]> {
    return this.movimentacaoRepository.find({ relations: ['conta'] });
  }
}
