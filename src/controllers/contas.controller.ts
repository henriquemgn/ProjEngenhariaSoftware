/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Param, Body, Put } from '@nestjs/common';
import { ContasService } from '../services/contas.service';
import { Conta } from 'src/entities/conta.entity';

@Controller('contas')
export class ContasController {
  constructor(private readonly contasService: ContasService) {}

  @Post()
  async cadastroConta(@Body() conta: Conta) {
    return this.contasService.cadastroConta(conta);
  }

  @Put(':id')
  async atualizacaoConta(@Param('id') id: number, @Body() conta: Partial<Conta>) {
    return this.contasService.atualizacaoConta(id, conta);
  }

  @Get(':conta_id')
  async consultaConta(@Param('conta_id') contaId: number) {
    return this.contasService.consultaConta(contaId);
  }
  @Get()
  async consultaTodasContas() {
    return this.contasService.consultaTodasContas();
  }
}
