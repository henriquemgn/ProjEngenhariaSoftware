/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conta } from '../entities/conta.entity';
import { Cliente } from 'src/entities/cliente.entity';

@Injectable()
export class ContasService {
  constructor(
    @InjectRepository(Conta)
    private readonly contaRepository: Repository<Conta>,
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async cadastroConta(conta: Conta): Promise<Conta> {

    if (conta.tipo_conta !== 'contaCorrente' && conta.tipo_conta !== 'contaInvestimento') {
      throw new Error('Tipo de conta inválido');
    }

    const cliente = await this.clienteRepository.findOne({ where: { cliente_id: conta.cliente.cliente_id } });
    if (!cliente) {
      throw new Error('Cliente não encontrado');
    }

    conta.cliente = cliente;
    return this.contaRepository.save(conta);
  }

  async atualizacaoConta(id: number, conta: Partial<Conta>): Promise<Conta> {
    const existingConta = await this.contaRepository.findOne({ where: { conta_id: id } });
    if (!existingConta) {
      throw new Error('Conta não encontrada');
    }
    return this.contaRepository.save({
      ...existingConta,
      ...conta, //qualquer propriedade de "conta" substituirá a propriedade correspondente no objeto "existingConta"
    });
  }

  async consultaConta(contaId: number): Promise<Conta> {
    const existingConta = await this.contaRepository.findOne({ where: { conta_id: contaId } });
    if (!existingConta) {
      throw new Error('Conta não encontrada');
    }
    return existingConta;
  }

  async consultaTodasContas(): Promise<Conta[]> {
    return this.contaRepository.find();
  }
}
