/* eslint-disable prettier/prettier */
import { Controller, Post, Put, Body, Param, Get } from '@nestjs/common';
import { Cliente } from '../entities/cliente.entity';
import { ClientesService } from '../services/clientes.service';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  async cadastroCliente(@Body() cliente: Cliente) {
    return this.clientesService.cadastroCliente(cliente);
  }

  @Put(':id')
  async atualizacaoCliente(@Param('id') id: number, @Body() cliente: Cliente) {
    return this.clientesService.atualizacaoCliente(id, cliente);
  }
  
  @Get(':cliente_id')
  async consultaCliente(@Param('cliente_id') clienteId: number) {
    return this.clientesService.consultaCliente(clienteId);
  }

  @Get()
  async consultaTodosClientes() {
    return this.clientesService.consultaTodosClientes();
  }
}
