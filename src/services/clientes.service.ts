import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async cadastroCliente(cliente: Cliente): Promise<Cliente> {
    return this.clienteRepository.save(cliente);
  }

  async atualizacaoCliente(id: number, cliente: Cliente): Promise<Cliente> {
    const existingCliente = await this.clienteRepository.findOne({
      where: { cliente_id: id },
    });

    if (!existingCliente) {
      throw new Error('Cliente não encontrado');
    }
    // verifica se os campos nome e/ou email foram fornecidos
    if (cliente.nome !== undefined) {
      existingCliente.nome = cliente.nome;
    }
    if (cliente.email !== undefined) {
      existingCliente.email = cliente.email;
    }
    return this.clienteRepository.save({
      ...existingCliente,
      ...cliente,
    });
  }
  async consultaCliente(clienteId: number): Promise<Cliente> {
    const existingCliente = await this.clienteRepository.findOne({
      where: { cliente_id: clienteId },
    });
    if (!existingCliente) {
      throw new Error('Cliente não encontrado');
    }
    return existingCliente;
  }

  async consultaTodosClientes(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }
}
